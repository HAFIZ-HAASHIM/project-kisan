import { GoogleGenerativeAI } from "@google/generative-ai"
import { collection, addDoc, query, where, orderBy, limit, getDocs } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "./firebase-config"

// Initialize Google AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!)

// Firestore Collections
export const COLLECTIONS = {
  QUERIES: "queries",
  MARKET_DATA: "market_data",
  SCHEMES: "government_schemes",
  WEATHER_CACHE: "weather_cache",
  USER_PROFILES: "user_profiles",
}

// Save query to Firestore
export async function saveQueryToFirestore(
  userId: string,
  type: string,
  query: string,
  response: string,
  language = "en",
) {
  try {
    await addDoc(collection(db, COLLECTIONS.QUERIES), {
      userId,
      type,
      query,
      response,
      language,
      timestamp: new Date(),
      source: "google-ai",
    })
  } catch (error) {
    console.error("Error saving to Firestore:", error)
  }
}

// Get user query history from Firestore
export async function getUserHistoryFromFirestore(userId: string, queryLimit = 10) {
  try {
    const q = query(
      collection(db, COLLECTIONS.QUERIES),
      where("userId", "==", userId),
      orderBy("timestamp", "desc"),
      limit(queryLimit),
    )

    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("Error fetching from Firestore:", error)
    return []
  }
}

// Upload image to Firebase Storage
export async function uploadImageToFirebase(file: File, path: string) {
  try {
    const storageRef = ref(storage, path)
    const snapshot = await uploadBytes(storageRef, file)
    const downloadURL = await getDownloadURL(snapshot.ref)
    return downloadURL
  } catch (error) {
    console.error("Error uploading to Firebase Storage:", error)
    throw error
  }
}

// Google Translate API wrapper
export async function translateText(text: string, targetLanguage: string) {
  try {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${process.env.GOOGLE_TRANSLATE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: text,
          target: targetLanguage,
          format: "text",
        }),
      },
    )

    const data = await response.json()
    return data.data.translations[0].translatedText
  } catch (error) {
    console.error("Translation error:", error)
    return text
  }
}

// Enhanced Gemini AI with web search capabilities
export async function getGeminiResponseWithSearch(prompt: string, searchQuery?: string) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      },
    })

    // Enhanced prompt with search context if provided
    const enhancedPrompt = searchQuery
      ? `${prompt}\n\nAdditional context: Please also consider current information about: ${searchQuery}`
      : prompt

    const result = await model.generateContent(enhancedPrompt)
    return result.response.text()
  } catch (error) {
    console.error("Gemini AI error:", error)
    throw error
  }
}

// Google Maps Geocoding
export async function getLocationFromCoordinates(lat: number, lon: number) {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${process.env.GOOGLE_MAPS_API_KEY}`,
    )
    const data = await response.json()
    return data.results[0]?.formatted_address || "Unknown Location"
  } catch (error) {
    console.error("Geocoding error:", error)
    return "Unknown Location"
  }
}
