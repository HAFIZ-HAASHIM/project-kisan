"use server"

import { getGeminiResponseWithSearch, saveQueryToFirestore } from "@/lib/google-services"
import { collection, where, getDocs, addDoc } from "firebase/firestore"
import { db, COLLECTIONS } from "@/lib/google-services"

// Enhanced government schemes database in Firestore
const COMPREHENSIVE_SCHEMES = {
  "PM-KISAN": {
    name: "Pradhan Mantri Kisan Samman Nidhi Yojana",
    description: "Direct income support to farmers",
    benefit: "₹6000 per year in 3 installments of ₹2000 each",
    eligibility: "Small and marginal farmers with cultivable land up to 2 hectares",
    documents: ["Aadhaar Card", "Bank Account Details", "Land Records", "Mobile Number"],
    website: "pmkisan.gov.in",
    helpline: "155261",
    applicationProcess: "Online registration through PM-KISAN portal or CSC centers",
    status: "Active",
    lastUpdated: "2024",
  },
  PMFBY: {
    name: "Pradhan Mantri Fasal Bima Yojana",
    description: "Comprehensive crop insurance scheme",
    benefit: "Insurance coverage for crop losses due to natural calamities",
    eligibility: "All farmers growing notified crops in notified areas",
    premium: "2% for Kharif, 1.5% for Rabi, 5% for Commercial/Horticultural crops",
    website: "pmfby.gov.in",
    helpline: "1800-200-7710",
    status: "Active",
  },
  // Add more comprehensive scheme data...
}

export async function getSchemeInfo(query: string, language = "en") {
  try {
    // Search for schemes in Firestore cache
    const schemesQuery = query(
      collection(db, COLLECTIONS.SCHEMES),
      where("keywords", "array-contains-any", query.toLowerCase().split(" ")),
    )

    const cachedSchemes = await getDocs(schemesQuery)
    const relevantSchemes: any[] = []

    cachedSchemes.forEach((doc) => {
      relevantSchemes.push({ id: doc.id, ...doc.data() })
    })

    const languagePrompts = {
      en: `You are a government policy expert specializing in Indian agricultural schemes and subsidies. Provide comprehensive information about: "${query}"

SCHEME ANALYSIS FRAMEWORK:
1. **Scheme Identification**:
   - Official scheme name(s)
   - Implementing ministry/department
   - Scheme category (subsidy/insurance/credit/support)

2. **Detailed Benefits**:
   - Financial assistance amount
   - Non-financial benefits
   - Coverage and scope
   - Duration of benefits

3. **Eligibility Criteria**:
   - Primary eligibility requirements
   - Income/land holding limits
   - Specific farmer categories (SC/ST/Women/Young farmers)
   - Geographic restrictions if any

4. **Application Process**:
   - Step-by-step application procedure
   - Online vs offline application
   - Required documents checklist
   - Application timeline and deadlines

5. **Implementation Details**:
   - Nodal agencies involved
   - State-wise variations
   - Common implementation challenges
   - Success stories

6. **Contact Information**:
   - Official websites
   - Helpline numbers
   - Local contact points
   - Grievance redressal mechanism

7. **Tips for Success**:
   - Common mistakes to avoid
   - Best practices for application
   - Follow-up procedures
   - Alternative schemes if not eligible

${relevantSchemes.length > 0 ? `Relevant schemes found: ${JSON.stringify(relevantSchemes)}` : ""}

Provide accurate, up-to-date information with specific details that farmers can act upon immediately.`,

      hi: `आप भारतीय कृषि योजनाओं और सब्सिडी में विशेषज्ञता रखने वाले एक सरकारी नीति विशेषज्ञ हैं। "${query}" के बारे में व्यापक जानकारी प्रदान करें:

योजना विश्लेषण ढांचा:
1. **योजना की पहचान**:
   - आधिकारिक योजना नाम
   - कार्यान्वयन मंत्रालय/विभाग
   - योजना श्रेणी (सब्सिडी/बीमा/क्रेडिट/सहायता)

2. **विस्तृत लाभ**:
   - वित्तीय सहायता राशि
   - गैर-वित्तीय लाभ
   - कवरेज और दायरा
   - लाभ की अवधि

3. **पात्रता मापदंड**:
   - प्राथमिक पात्रता आवश्यकताएं
   - आय/भूमि धारण सीमा
   - विशिष्ट किसान श्रेणियां (SC/ST/महिला/युवा किसान)
   - भौगोलिक प्रतिबंध यदि कोई हो

4. **आवेदन प्रक्रिया**:
   - चरणबद्ध आवेदन प्रक्रिया
   - ऑनलाइन बनाम ऑफलाइन आवेदन
   - आवश्यक दस्तावेज चेकलिस्ट
   - आवेदन समयसीमा और अंतिम तिथि

5. **कार्यान्वयन विवरण**:
   - शामिल नोडल एजेंसियां
   - राज्यवार भिन्नताएं
   - सामान्य कार्यान्वयन चुनौतियां
   - सफलता की कहानियां

6. **संपर्क जानकारी**:
   - आधिकारिक वेबसाइट
   - हेल्पलाइन नंबर
   - स्थानीय संपर्क बिंदु
   - शिकायत निवारण तंत्र

7. **सफलता के लिए सुझाव**:
   - बचने योग्य सामान्य गलतियां
   - आवेदन के लिए सर्वोत्तम प्रथाएं
   - फॉलो-अप प्रक्रियाएं
   - पात्र नहीं होने पर वैकल्पिक योजनाएं

${relevantSchemes.length > 0 ? `संबंधित योजनाएं मिलीं: ${JSON.stringify(relevantSchemes)}` : ""}

सटीक, अद्यतन जानकारी प्रदान करें जिस पर किसान तुरंत कार्य कर सकें।`,
    }

    const prompt = languagePrompts[language as keyof typeof languagePrompts] || languagePrompts.en

    const response = await getGeminiResponseWithSearch(
      prompt,
      `${query} government scheme India 2024 agriculture farmers subsidy eligibility application`,
    )

    // Save to Firestore for future reference
    await addDoc(collection(db, COLLECTIONS.SCHEMES), {
      query: query.toLowerCase(),
      keywords: query.toLowerCase().split(" "),
      response,
      timestamp: new Date(),
      language,
      source: "gemini-ai-enhanced",
    })

    // Save query history
    await saveQueryToFirestore("anonymous", "schemes", query, response, language)

    return response
  } catch (error) {
    console.error("Error fetching scheme information:", error)
    throw new Error("Failed to fetch scheme information")
  }
}
