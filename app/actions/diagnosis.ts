"use server"

import { getGeminiResponseWithSearch, saveQueryToFirestore, uploadImageToFirebase } from "@/lib/google-services"

export async function diagnoseCrop(formData: FormData) {
  try {
    const imageFile = formData.get("image") as File
    const language = (formData.get("language") as string) || "en"

    if (!imageFile) {
      throw new Error("No image provided")
    }

    // Upload image to Firebase Storage
    const imagePath = `crop-images/${Date.now()}-${imageFile.name}`
    const imageUrl = await uploadImageToFirebase(imageFile, imagePath)

    // Convert image to base64 for Gemini Vision
    const bytes = await imageFile.arrayBuffer()
    const base64 = Buffer.from(bytes).toString("base64")
    const mimeType = imageFile.type

    const languagePrompts = {
      en: `You are an expert agricultural pathologist with 20+ years of experience in Indian farming. Analyze this crop image and provide a comprehensive diagnosis in English.

ANALYSIS FRAMEWORK:
1. **Crop Identification**: Identify the crop type and variety if possible
2. **Health Assessment**: Overall plant health status (Healthy/Stressed/Diseased)
3. **Disease/Pest Diagnosis**: 
   - Primary issues identified
   - Secondary concerns
   - Severity level (Mild/Moderate/Severe)
4. **Treatment Recommendations**:
   - Immediate actions (next 24-48 hours)
   - Short-term treatment (1-2 weeks)
   - Long-term management
   - Both organic and chemical options
5. **Prevention Strategies**: Future prevention measures
6. **Economic Impact**: Potential yield loss if untreated
7. **Follow-up**: When to reassess and seek additional help

Make your advice practical, cost-effective, and suitable for Indian farming conditions. Include local names of treatments where applicable.`,

      hi: `आप 20+ वर्षों के अनुभव के साथ एक विशेषज्ञ कृषि रोग विशेषज्ञ हैं। इस फसल की तस्वीर का विश्लेषण करें और हिंदी में व्यापक निदान प्रदान करें।

विश्लेषण ढांचा:
1. **फसल की पहचान**: फसल का प्रकार और किस्म की पहचान करें
2. **स्वास्थ्य मूल्यांकन**: पौधे की समग्र स्वास्थ्य स्थिति (स्वस्थ/तनावग्रस्त/रोगग्रस्त)
3. **रोग/कीट निदान**:
   - मुख्य समस्याओं की पहचान
   - द्वितीयक चिंताएं
   - गंभीरता का स्तर (हल्का/मध्यम/गंभीर)
4. **उपचार की सिफारिशें**:
   - तत्काल कार्य (अगले 24-48 घंटे)
   - अल्पकालिक उपचार (1-2 सप्ताह)
   - दीर्घकालिक प्रबंधन
   - जैविक और रासायनिक दोनों विकल्प
5. **रोकथाम रणनीतियां**: भविष्य की रोकथाम के उपाय
6. **आर्थिक प्रभाव**: अगर इलाज न किया जाए तो संभावित उपज हानि
7. **फॉलो-अप**: कब पुनर्मूल्यांकन करें और अतिरिक्त सहायता लें

अपनी सलाह को व्यावहारिक, लागत-प्रभावी और भारतीय कृषि परिस्थितियों के लिए उपयुक्त बनाएं।`,
    }

    const prompt = languagePrompts[language as keyof typeof languagePrompts] || languagePrompts.en

    // Use Gemini Vision for image analysis
    const response = await getGeminiResponseWithSearch(
      `${prompt}\n\nImage data: data:${mimeType};base64,${base64}`,
      "latest crop disease treatments India 2024",
    )

    // Save to Firestore
    await saveQueryToFirestore("anonymous", "diagnosis", imageFile.name, response, language)

    return response
  } catch (error) {
    console.error("Error in crop diagnosis:", error)
    throw new Error("Failed to diagnose crop. Please try again.")
  }
}
