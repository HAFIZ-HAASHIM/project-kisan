"use server"

import { getGeminiResponseWithSearch, saveQueryToFirestore } from "@/lib/google-services"
import { collection, query, where, orderBy, limit, getDocs, addDoc } from "firebase/firestore"
import { db, COLLECTIONS } from "@/lib/google-services"

export async function getMarketPrices(cropQuery: string, language = "en") {
  try {
    // Check Firebase cache for recent market data
    const marketDataQuery = query(
      collection(db, COLLECTIONS.MARKET_DATA),
      where("crop", "==", cropQuery.toLowerCase()),
      orderBy("timestamp", "desc"),
      limit(1),
    )

    const cachedData = await getDocs(marketDataQuery)
    let recentMarketData = null

    if (!cachedData.empty) {
      const latestData = cachedData.docs[0].data()
      const dataAge = Date.now() - latestData.timestamp.toMillis()

      // Use cached data if less than 6 hours old
      if (dataAge < 6 * 60 * 60 * 1000) {
        recentMarketData = latestData
      }
    }

    const languagePrompts = {
      en: `You are a senior agricultural market analyst specializing in Indian commodity markets. Provide comprehensive market analysis for: ${cropQuery}

MARKET INTELLIGENCE FRAMEWORK:
1. **Current Market Scenario**:
   - Price ranges across major mandis (₹/quintal)
   - Price trend (increasing/decreasing/stable)
   - Market sentiment (bullish/bearish/neutral)

2. **Regional Price Variations**:
   - Top 5 markets with best prices
   - Regional price differences and reasons
   - Transportation cost considerations

3. **Quality Parameters**:
   - Factors affecting pricing
   - Quality standards and grades
   - Premium/discount for different qualities

4. **Market Timing Strategy**:
   - Best time to sell (immediate/wait)
   - Seasonal price patterns
   - Festival/event impact on prices

5. **Storage & Logistics**:
   - Storage recommendations
   - Transportation tips
   - Cost-benefit analysis of holding vs selling

6. **Market Forecast**:
   - 1-month price prediction
   - Factors that could affect prices
   - Risk assessment

7. **Actionable Recommendations**:
   - Immediate action plan
   - Alternative marketing channels
   - Value addition opportunities

${recentMarketData ? `Recent market data available: ${JSON.stringify(recentMarketData)}` : ""}

Provide practical, actionable advice for Indian farmers with specific price ranges and market names.`,

      hi: `आप भारतीय कमोडिटी बाजारों में विशेषज्ञता रखने वाले एक वरिष्ठ कृषि बाजार विश्लेषक हैं। ${cropQuery} के लिए व्यापक बाजार विश्लेषण प्रदान करें:

बाजार बुद्धिमत्ता ढांचा:
1. **वर्तमान बाजार स्थिति**:
   - प्रमुख मंडियों में मूल्य सीमा (₹/क्विंटल)
   - मूल्य प्रवृत्ति (बढ़ती/घटती/स्थिर)
   - बाजार भावना (तेजी/मंदी/तटस्थ)

2. **क्षेत्रीय मूल्य भिन्नताएं**:
   - सर्वोत्तम मूल्य वाली शीर्ष 5 मंडियां
   - क्षेत्रीय मूल्य अंतर और कारण
   - परिवहन लागत विचार

3. **गुणवत्ता मापदंड**:
   - मूल्य निर्धारण को प्रभावित करने वाले कारक
   - गुणवत्ता मानक और ग्रेड
   - विभिन्न गुणवत्ता के लिए प्रीमियम/छूट

4. **बाजार समय रणनीति**:
   - बेचने का सबसे अच्छा समय (तुरंत/प्रतीक्षा)
   - मौसमी मूल्य पैटर्न
   - त्योहार/घटना का मूल्यों पर प्रभाव

5. **भंडारण और रसद**:
   - भंडारण सिफारिशें
   - परिवहन सुझाव
   - होल्डिंग बनाम बिक्री का लागत-लाभ विश्लेषण

6. **बाजार पूर्वानुमान**:
   - 1-महीने की मूल्य भविष्यवाणी
   - मूल्यों को प्रभावित करने वाले कारक
   - जोखिम मूल्यांकन

7. **कार्यान्वित सिफारिशें**:
   - तत्काल कार्य योजना
   - वैकल्पिक विपणन चैनल
   - मूल्य संवर्धन के अवसर

${recentMarketData ? `हाल का बाजार डेटा उपलब्ध: ${JSON.stringify(recentMarketData)}` : ""}

विशिष्ट मूल्य सीमा और बाजार नामों के साथ भारतीय किसानों के लिए व्यावहारिक, कार्यान्वित सलाह प्रदान करें।`,
    }

    const prompt = languagePrompts[language as keyof typeof languagePrompts] || languagePrompts.en

    const response = await getGeminiResponseWithSearch(
      prompt,
      `${cropQuery} market prices India today current rates mandi`,
    )

    // Cache the response in Firestore
    await addDoc(collection(db, COLLECTIONS.MARKET_DATA), {
      crop: cropQuery.toLowerCase(),
      analysis: response,
      timestamp: new Date(),
      language,
      source: "gemini-ai-enhanced",
    })

    // Save query history
    await saveQueryToFirestore("anonymous", "market", cropQuery, response, language)

    return response
  } catch (error) {
    console.error("Error fetching market prices:", error)
    throw new Error("Failed to fetch market information")
  }
}
