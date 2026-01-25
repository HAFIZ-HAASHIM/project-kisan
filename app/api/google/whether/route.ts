import { type NextRequest, NextResponse } from "next/server"
import { getGeminiResponseWithSearch, saveQueryToFirestore, getLocationFromCoordinates } from "@/lib/google-services"
import { collection, addDoc } from "firebase/firestore"
import { db, COLLECTIONS } from "@/lib/google-services"

export async function POST(request: NextRequest) {
  try {
    const { lat, lon, language = "en" } = await request.json()

    if (!lat || !lon) {
      return NextResponse.json({ error: "Location coordinates required" }, { status: 400 })
    }

    // Get location name using Google Maps API
    const locationName = await getLocationFromCoordinates(lat, lon)

    // Use Google's weather data through search-enhanced Gemini
    const weatherPrompt =
      language === "hi"
        ? `आप एक कृषि मौसम विज्ञानी हैं। ${locationName} (अक्षांश: ${lat}, देशांतर: ${lon}) के लिए वर्तमान मौसम स्थिति के आधार पर कृषि सलाह प्रदान करें।

शामिल करें:
1. **वर्तमान मौसम सारांश**: तापमान, आर्द्रता, हवा की गति, बारिश की संभावना
2. **फसल प्रभाव विश्लेषण**: विभिन्न फसलों पर मौसम का प्रभाव
3. **सिंचाई सिफारिशें**: कब और कितना पानी दें
4. **कीट-रोग चेतावनी**: मौसम के कारण संभावित कीट-रोग समस्याएं
5. **खेत कार्य सुझाव**: आज और आने वाले दिनों के लिए उपयुक्त कृषि कार्य
6. **भंडारण सलाह**: फसल और उपकरण सुरक्षा
7. **3-दिन का पूर्वानुमान**: आगामी कृषि योजना के लिए

व्यावहारिक और तुरंत लागू करने योग्य सलाह दें।`
        : `You are an agricultural meteorologist. Provide farming advice based on current weather conditions for ${locationName} (Latitude: ${lat}, Longitude: ${lon}).

Include:
1. **Current Weather Summary**: Temperature, humidity, wind speed, precipitation probability
2. **Crop Impact Analysis**: How weather affects different crops
3. **Irrigation Recommendations**: When and how much to water
4. **Pest & Disease Alerts**: Weather-related pest/disease risks
5. **Field Work Suggestions**: Suitable agricultural activities for today and coming days
6. **Storage Advice**: Crop and equipment protection
7. **3-Day Forecast**: For upcoming agricultural planning

Provide practical, immediately actionable advice.`

    const weatherAdvice = await getGeminiResponseWithSearch(
      weatherPrompt,
      `weather ${locationName} today agriculture farming advice`,
    )

    // Cache weather advice in Firestore
    await addDoc(collection(db, COLLECTIONS.WEATHER_CACHE), {
      location: locationName,
      coordinates: { lat, lon },
      advice: weatherAdvice,
      timestamp: new Date(),
      language,
      source: "google-enhanced",
    })

    // Save query history
    await saveQueryToFirestore("anonymous", "weather", `${locationName} weather advice`, weatherAdvice, language)

    return NextResponse.json({
      advice: weatherAdvice,
      location: locationName,
      coordinates: { lat, lon },
      timestamp: new Date().toISOString(),
      source: "Google AI + Maps",
    })
  } catch (error) {
    console.error("Weather advice error:", error)
    return NextResponse.json({ error: "Failed to fetch weather advice" }, { status: 500 })
  }
}
