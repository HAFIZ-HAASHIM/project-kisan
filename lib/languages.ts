export const languages = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
  },
  hi: {
    code: "hi",
    name: "Hindi",
    nativeName: "हिंदी",
    flag: "🇮🇳",
  },
  kn: {
    code: "kn",
    name: "Kannada",
    nativeName: "ಕನ್ನಡ",
    flag: "🇮🇳",
  },
  ta: {
    code: "ta",
    name: "Tamil",
    nativeName: "தமிழ்",
    flag: "🇮🇳",
  },
  te: {
    code: "te",
    name: "Telugu",
    nativeName: "తెలుగు",
    flag: "🇮🇳",
  },
  mr: {
    code: "mr",
    name: "Marathi",
    nativeName: "मराठी",
    flag: "🇮🇳",
  },
  gu: {
    code: "gu",
    name: "Gujarati",
    nativeName: "ગુજરાતી",
    flag: "🇮🇳",
  },
  bn: {
    code: "bn",
    name: "Bengali",
    nativeName: "বাংলা",
    flag: "🇮🇳",
  },
  pa: {
    code: "pa",
    name: "Punjabi",
    nativeName: "ਪੰਜਾਬੀ",
    flag: "🇮🇳",
  },
  or: {
    code: "or",
    name: "Odia",
    nativeName: "ଓଡ଼ିଆ",
    flag: "🇮🇳",
  },
} as const

export type LanguageCode = keyof typeof languages

export const translations = {
  en: {
    // App Title
    appTitle: "Project Kisan",
    appSubtitle: "Your AI-powered Farming Assistant",
    appDescription: "Intelligent multilingual farming companion powered by AI",

    // Navigation
    back: "Back",
    home: "Home",

    // Main Features
    cropDiagnosis: "Crop Diagnosis",
    cropDiagnosisDesc: "Upload crop photos to diagnose diseases instantly with AI",
    marketPrices: "Market Prices",
    marketPricesDesc: "Get current market rates and AI-powered selling advice",
    govSchemes: "Government Schemes",
    govSchemesDesc: "Detailed information about all government schemes for farmers",
    askExpert: "Ask Expert",
    askExpertDesc: "Ask questions directly to agriculture experts and get instant solutions",

    // Actions
    uploadPhoto: "Upload Photo",
    checkPrices: "Check Prices",
    viewSchemes: "View Schemes",
    askQuestion: "Ask Question",
    askByVoice: "Ask by Voice",
    listening: "Listening...",

    // Common
    loading: "Loading...",
    error: "Error",
    submit: "Submit",
    search: "Search",
    analyze: "Analyze",
    diagnose: "Diagnose",
    analyzing: "Analyzing...",
    searching: "Searching...",

    // Voice
    youSaid: "You said",
    voiceNotSupported: "Voice recognition not supported in this browser",

    // Footer
    madeWithLove: "Made with ❤️ for Indian Farmers",
    empoweringAgriculture: "Empowering agriculture through artificial intelligence",

    // Features
    aiPoweredAnalysis: "AI-Powered Analysis",
    aiAnalysisDesc: "Advanced machine learning for accurate crop diagnosis and market predictions",
    voiceFirstInterface: "Voice-First Interface",
    voiceInterfaceDesc: "Speak in your language and get instant responses with audio playback",
    farmerFriendly: "Farmer-Friendly",
    farmerFriendlyDesc: "Designed specifically for Indian farmers with multilingual support",

    // Stats
    farmers: "Farmers",
    aiPowered: "AI-Powered",

    // Crop Diagnosis
    uploadCropPhoto: "Upload Crop Photo",
    diagnosisResults: "Diagnosis Results",
    aiAnalysis: "AI Analysis",
    selectImageFirst: "Please select an image first",
    diagnosisError: "Error in diagnosis. Please try again.",
    diagnosisWillAppear: "Diagnosis will appear here after uploading photo",
    instructions: "Instructions:",
    takeCleanPhotos: "Take clear photos in good lighting",
    showProblemClearly: "Show the problem area clearly",
    onePhotoAtTime: "Upload one crop photo at a time",
    multipleAngles: "Take photos from multiple angles for better results",

    // Market Prices
    askAboutCrop: "Ask About Crop",
    enterCropName: "Enter crop name",
    marketAnalysis: "Market Analysis",
    popularCrops: "Popular Crops:",
    marketTips: "Market Tips:",
    visitMandiEarly: "Visit mandi early morning for better prices",
    comparePrices: "Compare prices across multiple mandis",
    maintainQuality: "Maintain crop quality",
    understandWeatherImpact: "Understand impact of weather and festivals",
    marketAnalysisWillAppear: "Market analysis will appear here after entering crop name",

    // Government Schemes
    askAboutSchemes: "Ask About Schemes",
    enterSchemeQuestion: "Enter scheme name or question",
    getInformation: "Get Information",
    schemeDetails: "Scheme Details",
    popularSchemes: "Popular Schemes:",
    importantLinks: "Important Links:",
    applicationPortals: "Application Portals:",
    helpline: "Helpline:",
    schemeInfoWillAppear: "Scheme information will appear here after asking",
    askAboutScheme: "Please ask about a scheme",

    // Ask Expert
    askYourQuestion: "Ask Your Question",
    writeQuestion: "Write your agriculture question here...",
    sendQuestion: "Send Question",
    askingExpert: "Asking Expert...",
    expertAnswer: "Expert's Answer",
    agricultureExpert: "Agriculture Expert",
    commonQuestions: "Common Questions:",
    expertTips: "Expert Tips:",
    askClearQuestions: "Ask clear and detailed questions",
    provideCropInfo: "Provide crop, soil and area information",
    describeSymptoms: "Describe problem symptoms in detail",
    mentionPreviousTreatments: "Mention previous treatments tried",
    expertAnswerWillAppear: "Expert's answer will appear here after asking question",
    enterYourQuestion: "Please enter your question",

    // Language
    selectLanguage: "Select Language",
    changeLanguage: "Change Language",
    language: "Language",

    // Common Questions
    yellowLeaves: "Why are my crop leaves turning yellow?",
    afterRain: "What should I do after rain?",
    organicFertilizer: "How to make organic fertilizer?",
    pestControl: "Home remedies for pest control",
    soilTesting: "How to test soil?",
    irrigationTiming: "What is the right time for irrigation?",

    // Crops
    wheat: "Wheat",
    rice: "Rice",
    corn: "Corn",
    soybean: "Soybean",
    cotton: "Cotton",
    sugarcane: "Sugarcane",
    potato: "Potato",
    onion: "Onion",
  },

  hi: {
    // App Title
    appTitle: "प्रोजेक्ट किसान",
    appSubtitle: "आपका AI-संचालित कृषि सहायक",
    appDescription: "AI द्वारा संचालित बुद्धिमान बहुभाषी कृषि साथी",

    // Navigation
    back: "वापस",
    home: "होम",

    // Main Features
    cropDiagnosis: "फसल निदान",
    cropDiagnosisDesc: "AI के साथ तुरंत बीमारी का निदान करने के लिए फसल की तस्वीरें अपलोड करें",
    marketPrices: "बाजार भाव",
    marketPricesDesc: "वर्तमान बाजार दरें और AI-संचालित बिक्री सलाह प्राप्त करें",
    govSchemes: "सरकारी योजनाएं",
    govSchemesDesc: "किसानों के लिए सभी सरकारी योजनाओं की विस्तृत जानकारी",
    askExpert: "विशेषज्ञ से पूछें",
    askExpertDesc: "कृषि विशेषज्ञों से सीधे प्रश्न पूछें और तुरंत समाधान प्राप्त करें",

    // Actions
    uploadPhoto: "तस्वीर अपलोड करें",
    checkPrices: "भाव देखें",
    viewSchemes: "योजनाएं देखें",
    askQuestion: "सवाल पूछें",
    askByVoice: "आवाज़ से पूछें",
    listening: "सुन रहा हूँ...",

    // Common
    loading: "लोड हो रहा है...",
    error: "त्रुटि",
    submit: "जमा करें",
    search: "खोजें",
    analyze: "विश्लेषण करें",
    diagnose: "निदान करें",
    analyzing: "विश्लेषण हो रहा है...",
    searching: "खोज रहे हैं...",

    // Voice
    youSaid: "आपने कहा",
    voiceNotSupported: "इस ब्राउज़र में आवाज़ पहचान समर्थित नहीं है",

    // Footer
    madeWithLove: "भारतीय किसानों के लिए प्रेम से बनाया गया",
    empoweringAgriculture: "कृत्रिम बुद्धिमत्ता के माध्यम से कृषि को सशक्त बनाना",

    // Features
    aiPoweredAnalysis: "AI-संचालित विश्लेषण",
    aiAnalysisDesc: "सटीक फसल निदान और बाजार भविष्यवाणियों के लिए उन्नत मशीन लर्निंग",
    voiceFirstInterface: "आवाज़-प्राथमिक इंटरफ़ेस",
    voiceInterfaceDesc: "अपनी भाषा में बोलें और ऑडियो प्लेबैक के साथ तुरंत उत्तर प्राप्त करें",
    farmerFriendly: "किसान-अनुकूल",
    farmerFriendlyDesc: "बहुभाषी समर्थन के साथ विशेष रूप से भारतीय किसानों के लिए डिज़ाइन किया गया",

    // Stats
    farmers: "किसान",
    aiPowered: "AI-संचालित",

    // Crop Diagnosis
    uploadCropPhoto: "फसल की तस्वीर अपलोड करें",
    diagnosisResults: "निदान परिणाम",
    aiAnalysis: "AI विश्लेषण",
    selectImageFirst: "कृपया पहले एक तस्वीर चुनें",
    diagnosisError: "निदान में त्रुटि हुई। कृपया पुनः प्रयास करें।",
    diagnosisWillAppear: "तस्वीर अपलोड करने के बाद निदान यहाँ दिखेगा",
    instructions: "निर्देश:",
    takeCleanPhotos: "स्पष्ट और अच्छी रोशनी में तस्वीर लें",
    showProblemClearly: "समस्या वाले क्षेत्र को स्पष्ट रूप से दिखाएं",
    onePhotoAtTime: "एक समय में एक ही फसल की तस्वीर अपलोड करें",
    multipleAngles: "बेहतर परिणाम के लिए कई कोणों से तस्वीर लें",

    // Market Prices
    askAboutCrop: "फसल के बारे में पूछें",
    enterCropName: "फसल का नाम दर्ज करें",
    marketAnalysis: "बाजार विश्लेषण",
    popularCrops: "लोकप्रिय फसलें:",
    marketTips: "बाजार सुझाव:",
    visitMandiEarly: "बेहतर भाव के लिए सुबह जल्दी मंडी जाएं",
    comparePrices: "कई मंडियों के भाव की तुलना करें",
    maintainQuality: "फसल की गुणवत्ता बनाए रखें",
    understandWeatherImpact: "मौसम और त्योहारों का प्रभाव समझें",
    marketAnalysisWillAppear: "फसल का नाम दर्ज करने के बाद बाजार विश्लेषण यहाँ दिखेगा",

    // Government Schemes
    askAboutSchemes: "योजनाओं के बारे में पूछें",
    enterSchemeQuestion: "योजना का नाम या प्रश्न दर्ज करें",
    getInformation: "जानकारी प्राप्त करें",
    schemeDetails: "योजना विवरण",
    popularSchemes: "लोकप्रिय योजनाएं:",
    importantLinks: "महत्वपूर्ण लिंक:",
    applicationPortals: "आवेदन पोर्टल:",
    helpline: "हेल्पलाइन:",
    schemeInfoWillAppear: "योजना के बारे में पूछने के बाद जानकारी यहाँ दिखेगी",
    askAboutScheme: "कृपया योजना के बारे में पूछें",

    // Ask Expert
    askYourQuestion: "अपना प्रश्न पूछें",
    writeQuestion: "अपना कृषि संबंधी प्रश्न यहाँ लिखें...",
    sendQuestion: "प्रश्न भेजें",
    askingExpert: "विशेषज्ञ से पूछ रहे हैं...",
    expertAnswer: "विशेषज्ञ का उत्तर",
    agricultureExpert: "कृषि विशेषज्ञ",
    commonQuestions: "आम प्रश्न:",
    expertTips: "विशेषज्ञ सुझाव:",
    askClearQuestions: "स्पष्ट और विस्तृत प्रश्न पूछें",
    provideCropInfo: "अपनी फसल, मिट्टी और क्षेत्र की जानकारी दें",
    describeSymptoms: "समस्या के लक्षण विस्तार से बताएं",
    mentionPreviousTreatments: "पहले किए गए उपचार की जानकारी दें",
    expertAnswerWillAppear: "प्रश्न पूछने के बाद विशेषज्ञ का उत्तर यहाँ दिखेगा",
    enterYourQuestion: "कृपया अपना प्रश्न दर्ज करें",

    // Language
    selectLanguage: "भाषा चुनें",
    changeLanguage: "भाषा बदलें",
    language: "भाषा",

    // Common Questions
    yellowLeaves: "मेरी फसल की पत्तियां पीली क्यों हो रही हैं?",
    afterRain: "बारिश के बाद क्या करना चाहिए?",
    organicFertilizer: "जैविक खाद कैसे बनाएं?",
    pestControl: "कीट नियंत्रण के घरेलू उपाय",
    soilTesting: "मिट्टी की जांच कैसे करें?",
    irrigationTiming: "सिंचाई का सही समय क्या है?",

    // Crops
    wheat: "गेहूं",
    rice: "चावल",
    corn: "मक्का",
    soybean: "सोयाबीन",
    cotton: "कपास",
    sugarcane: "गन्ना",
    potato: "आलू",
    onion: "प्याज",
  },

  kn: {
    // App Title
    appTitle: "ಪ್ರಾಜೆಕ್ಟ್ ಕಿಸಾನ್",
    appSubtitle: "ನಿಮ್ಮ AI-ಚಾಲಿತ ಕೃಷಿ ಸಹಾಯಕ",
    appDescription: "AI ನಿಂದ ಚಾಲಿತ ಬುದ್ಧಿವಂತ ಬಹುಭಾಷಾ ಕೃಷಿ ಸಹಚರ",

    // Navigation
    back: "ಹಿಂದೆ",
    home: "ಮುಖ್ಯ",

    // Main Features
    cropDiagnosis: "ಬೆಳೆ ರೋಗ ನಿರ್ಣಯ",
    cropDiagnosisDesc: "AI ಯೊಂದಿಗೆ ತಕ್ಷಣವೇ ರೋಗ ನಿರ್ಣಯ ಮಾಡಲು ಬೆಳೆಯ ಫೋಟೋಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    marketPrices: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು",
    marketPricesDesc: "ಪ್ರಸ್ತುತ ಮಾರುಕಟ್ಟೆ ದರಗಳು ಮತ್ತು AI-ಚಾಲಿತ ಮಾರಾಟ ಸಲಹೆ ಪಡೆಯಿರಿ",
    govSchemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
    govSchemesDesc: "ರೈತರಿಗಾಗಿ ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ವಿವರವಾದ ಮಾಹಿತಿ",
    askExpert: "ತಜ್ಞರನ್ನು ಕೇಳಿ",
    askExpertDesc: "ಕೃಷಿ ತಜ್ಞರಿಗೆ ನೇರವಾಗಿ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ ಮತ್ತು ತಕ್ಷಣದ ಪರಿಹಾರಗಳನ್ನು ಪಡೆಯಿರಿ",

    // Actions
    uploadPhoto: "ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    checkPrices: "ಬೆಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
    viewSchemes: "ಯೋಜನೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    askQuestion: "ಪ್ರಶ್ನೆ ಕೇಳಿ",
    askByVoice: "ಧ್ವನಿಯಿಂದ ಕೇಳಿ",
    listening: "ಕೇಳುತ್ತಿದೆ...",

    // Common
    loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
    error: "ದೋಷ",
    submit: "ಸಲ್ಲಿಸಿ",
    search: "ಹುಡುಕಿ",
    analyze: "ವಿಶ್ಲೇಷಿಸಿ",
    diagnose: "ರೋಗ ನಿರ್ಣಯ",
    analyzing: "ವಿಶ್ಲೇಷಿಸುತ್ತಿದೆ...",
    searching: "ಹುಡುಕುತ್ತಿದೆ...",

    // Voice
    youSaid: "ನೀವು ಹೇಳಿದ್ದು",
    voiceNotSupported: "ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆ ಬೆಂಬಲಿತವಾಗಿಲ್ಲ",

    // Footer
    madeWithLove: "ಭಾರತೀಯ ರೈತರಿಗಾಗಿ ಪ್ರೀತಿಯಿಂದ ತಯಾರಿಸಲಾಗಿದೆ",
    empoweringAgriculture: "ಕೃತ್ರಿಮ ಬುದ್ಧಿಮತ್ತೆಯ ಮೂಲಕ ಕೃಷಿಯನ್ನು ಸಶಕ್ತಗೊಳಿಸುವುದು",

    // Features
    aiPoweredAnalysis: "AI-ಚಾಲಿತ ವಿಶ್ಲೇಷಣೆ",
    aiAnalysisDesc: "ನಿಖರವಾದ ಬೆಳೆ ರೋಗ ನಿರ್ಣಯ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಭವಿಷ್ಯವಾಣಿಗಳಿಗಾಗಿ ಸುಧಾರಿತ ಯಂತ್ರ ಕಲಿಕೆ",
    voiceFirstInterface: "ಧ್ವನಿ-ಮೊದಲ ಇಂಟರ್‌ಫೇಸ್",
    voiceInterfaceDesc: "ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡಿ ಮತ್ತು ಆಡಿಯೋ ಪ್ಲೇಬ್ಯಾಕ್‌ನೊಂದಿಗೆ ತಕ್ಷಣದ ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ಪಡೆಯಿರಿ",
    farmerFriendly: "ರೈತ-ಸ್ನೇಹಿ",
    farmerFriendlyDesc: "ಬಹುಭಾಷಾ ಬೆಂಬಲದೊಂದಿಗೆ ವಿಶೇಷವಾಗಿ ಭಾರತೀಯ ರೈತರಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ",

    // Stats
    farmers: "ರೈತರು",
    aiPowered: "AI-ಚಾಲಿತ",

    // Language
    selectLanguage: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ",
    changeLanguage: "ಭಾಷೆ ಬದಲಾಯಿಸಿ",
    language: "ಭಾಷೆ",

    // Crops
    wheat: "ಗೋಧಿ",
    rice: "ಅಕ್ಕಿ",
    corn: "ಜೋಳ",
    soybean: "ಸೋಯಾಬೀನ್",
    cotton: "ಹತ್ತಿ",
    sugarcane: "ಕಬ್ಬು",
    potato: "ಆಲೂಗಡ್ಡೆ",
    onion: "ಈರುಳ್ಳಿ",

    // Add other translations as needed...
    cropDiagnosis: "ಬೆಳೆ ರೋಗ ನಿರ್ಣಯ",
    uploadCropPhoto: "ಬೆಳೆಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    diagnosisResults: "ರೋಗ ನಿರ್ಣಯ ಫಲಿತಾಂಶಗಳು",
    aiAnalysis: "AI ವಿಶ್ಲೇಷಣೆ",
    selectImageFirst: "ದಯವಿಟ್ಟು ಮೊದಲು ಚಿತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    diagnosisError: "ರೋಗ ನಿರ್ಣಯದಲ್ಲಿ ದೋಷ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    instructions: "ಸೂಚನೆಗಳು:",
    takeCleanPhotos: "ಸ್ಪಷ್ಟ ಮತ್ತು ಉತ್ತಮ ಬೆಳಕಿನಲ್ಲಿ ಫೋಟೋ ತೆಗೆಯಿರಿ",
    commonQuestions: "ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು:",
    expertTips: "ತಜ್ಞರ ಸಲಹೆಗಳು:",
    askClearQuestions: "ಸ್ಪಷ್ಟ ಮತ್ತು ವಿವರವಾದ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ",
    provideCropInfo: "ನಿಮ್ಮ ಬೆಳೆ, ಮಣ್ಣು ಮತ್ತು ಪ್ರದೇಶದ ಮಾಹಿತಿ ನೀಡಿ",
    describeSymptoms: "ಸಮಸ್ಯೆಯ ಲಕ್ಷಣಗಳನ್ನು ವಿವರವಾಗಿ ವಿವರಿಸಿ",
    mentionPreviousTreatments: "ಹಿಂದೆ ಪ್ರಯತ್ನಿಸಿದ ಚಿಕಿತ್ಸೆಗಳನ್ನು ಉಲ್ಲೇಖಿಸಿ",
    yellowLeaves: "ನನ್ನ ಬೆಳೆಯ ಎಲೆಗಳು ಏಕೆ ಹಳದಿಯಾಗುತ್ತಿವೆ?",
    afterRain: "ಮಳೆಯ ನಂತರ ಏನು ಮಾಡಬೇಕು?",
    organicFertilizer: "ಸಾವಯವ ಗೊಬ್ಬರವನ್ನು ಹೇಗೆ ತಯಾರಿಸುವುದು?",
    pestControl: "ಕೀಟ ನಿಯಂತ್ರಣಕ್ಕಾಗಿ ಮನೆಮದ್ದು",
    soilTesting: "ಮಣ್ಣಿನ ಪರೀಕ್ಷೆ ಹೇಗೆ ಮಾಡುವುದು?",
    irrigationTiming: "ನೀರಾವರಿಗೆ ಸರಿಯಾದ ಸಮಯ ಯಾವುದು?",
  },

  ta: {
    // App Title
    appTitle: "ப்ராஜெக்ட் கிசான்",
    appSubtitle: "உங்கள் AI-இயங்கும் விவசாய உதவியாளர்",
    appDescription: "AI ஆல் இயக்கப்படும் புத்திசாலி பன்மொழி விவசாய துணைவர்",

    // Navigation
    back: "பின்",
    home: "முகப்பு",

    // Main Features
    cropDiagnosis: "பயிர் நோய் கண்டறிதல்",
    cropDiagnosisDesc: "AI உடன் உடனடியாக நோய் கண்டறிய பயிர் புகைப்படங்களை பதிவேற்றவும்",
    marketPrices: "சந்தை விலைகள்",
    marketPricesDesc: "தற்போதைய சந்தை விலைகள் மற்றும் AI-இயங்கும் விற்பனை ஆலோசனை பெறுங்கள்",
    govSchemes: "அரசு திட்டங்கள்",
    govSchemesDesc: "விவசாயிகளுக்கான அனைத்து அரசு திட்டங்களின் விரிவான தகவல்",
    askExpert: "நிபுணரிடம் கேளுங்கள்",
    askExpertDesc: "விவசாய நிபுணர்களிடம் நேரடியாக கேள்விகள் கேட்டு உடனடி தீர்வுகளைப் பெறுங்கள்",

    // Actions
    uploadPhoto: "புகைப்படம் பதிவேற்றவும்",
    checkPrices: "விலைகளை சரிபார்க்கவும்",
    viewSchemes: "திட்டங்களை பார்க்கவும்",
    askQuestion: "கேள்வி கேளுங்கள்",
    askByVoice: "குரல் மூலம் கேளுங்கள்",
    listening: "கேட்கிறது...",

    // Language
    selectLanguage: "மொழியை தேர்ந்தெடுக்கவும்",
    changeLanguage: "மொழியை மாற்றவும்",
    language: "மொழி",

    // Crops
    wheat: "கோதுமை",
    rice: "அரிசி",
    corn: "சோளம்",
    soybean: "சோயாபீன்",
    cotton: "பருத்தி",
    sugarcane: "கரும்பு",
    potato: "உருளைக்கிழங்கு",
    onion: "வெங்காயம்",
    commonQuestions: "பொதுவான கேள்விகள்:",
    expertTips: "நிபுணர் குறிப்புகள்:",
    askClearQuestions: "தெளிவான மற்றும் விரிவான கேள்விகளைக் கேளுங்கள்",
    provideCropInfo: "உங்கள் பயிர், மண் மற்றும் பகுதி தகவலை வழங்கவும்",
    describeSymptoms: "பிரச்சனையின் அறிகுறிகளை விரிவாக விவரிக்கவும்",
    mentionPreviousTreatments: "முன்பு முயற்சித்த சிகிச்சைகளைக் குறிப்பிடவும்",
    yellowLeaves: "என் பயிரின் இலைகள் ஏன் மஞ்சளாக மாறுகின்றன?",
    afterRain: "மழைக்குப் பிறகு என்ன செய்ய வேண்டும்?",
    organicFertilizer: "இயற்கை உரம் எப்படி தயாரிப்பது?",
    pestControl: "பூச்சி கட்டுப்பாட்டுக்கான வீட்டு வைத்தியம்",
    soilTesting: "மண் பரிசோதனை எப்படி செய்வது?",
    irrigationTiming: "நீர்ப்பாசனத்திற்கான சரியான நேரம் எது?",
  },

  te: {
    // App Title
    appTitle: "ప్రాజెక్ట్ కిసాన్",
    appSubtitle: "మీ AI-శక్తితో పనిచేసే వ్యవసాయ సహాయకుడు",
    appDescription: "AI ద్వారా శక్తివంతం చేయబడిన తెలివైన బహుభాషా వ్యవసాయ సహచరుడు",

    // Navigation
    back: "వెనుక",
    home: "హోమ్",

    // Main Features
    cropDiagnosis: "పంట వ్యాధి నిర్ధారణ",
    cropDiagnosisDesc: "AI తో తక్షణమే వ్యాధిని నిర్ధారించడానికి పంట ఫోటోలను అప్‌లోడ్ చేయండి",
    marketPrices: "మార్కెట్ ధరలు",
    marketPricesDesc: "ప్రస్తుత మార్కెట్ రేట్లు మరియు AI-శక్తితో పనిచేసే అమ్మకపు సలహా పొందండి",
    govSchemes: "ప్రభుత్వ పథకాలు",
    govSchemesDesc: "రైతుల కోసం అన్ని ప్రభుత్వ పథకాల వివరణాత్మక సమాచారం",
    askExpert: "నిపుణుడిని అడగండి",
    askExpertDesc: "వ్యవసాయ నిపుణులను నేరుగా ప్రశ్నలు అడిగి తక్షణ పరిష్కారాలను పొందండి",

    // Actions
    uploadPhoto: "ఫోటో అప్‌లోడ్ చేయండి",
    checkPrices: "ధరలను తనిఖీ చేయండి",
    viewSchemes: "పథకాలను చూడండి",
    askQuestion: "ప్రశ్న అడగండి",
    askByVoice: "వాయిస్ ద్వారా అడగండి",
    listening: "వింటోంది...",

    // Language
    selectLanguage: "భాషను ఎంచుకోండి",
    changeLanguage: "భాషను మార్చండి",
    language: "భాష",

    // Crops
    wheat: "గోధుమ",
    rice: "వరి",
    corn: "మొక్కజొన్న",
    soybean: "సోయాబీన్",
    cotton: "పత్తి",
    sugarcane: "చెరకు",
    potato: "బంగాళాదుంప",
    onion: "ఉల్లిపాయ",
    commonQuestions: "సాధారణ ప్రశ్నలు:",
    expertTips: "నిపుణుల చిట్కాలు:",
    askClearQuestions: "స్పష్టమైన మరియు వివరణాత్మక ప్రశ్నలు అడగండి",
    provideCropInfo: "మీ పంట, మట్టి మరియు ప్రాంత సమాచారం అందించండి",
    describeSymptoms: "సమస్య లక్షణాలను వివరంగా వివరించండి",
    mentionPreviousTreatments: "గతంలో ప్రయత్నించిన చికిత్సలను పేర్కొనండి",
    yellowLeaves: "నా పంట ఆకులు ఎందుకు పసుపు రంగులోకి మారుతున్నాయి?",
    afterRain: "వర్షం తర్వాత ఏమి చేయాలి?",
    organicFertilizer: "సేంద్రీయ ఎరువులు ఎలా తయారు చేయాలి?",
    pestControl: "కీటకాల నియంత్రణకు ఇంటి వైద్యం",
    soilTesting: "మట్టి పరీక్ష ఎలా చేయాలి?",
    irrigationTiming: "నీటిపారుదలకు సరైన సమయం ఎప్పుడు?",
  },

  // Add more languages as needed...
  mr: {
    appTitle: "प्रोजेक्ट किसान",
    appSubtitle: "तुमचा AI-चालित शेती सहाय्यक",
    selectLanguage: "भाषा निवडा",
    language: "भाषा",
    back: "मागे",
    home: "मुख्यपृष्ठ",
    commonQuestions: "सामान्य प्रश्न:",
    expertTips: "तज्ञांचे सुझाव:",
    askClearQuestions: "स्पष्ट आणि तपशीलवार प्रश्न विचारा",
    provideCropInfo: "तुमच्या पिकाची, मातीची आणि क्षेत्राची माहिती द्या",
    describeSymptoms: "समस्येची लक्षणे तपशीलाने सांगा",
    mentionPreviousTreatments: "आधी केलेल्या उपचारांचा उल्लेख करा",
    yellowLeaves: "माझ्या पिकाची पाने पिवळी का होत आहेत?",
    afterRain: "पावसानंतर काय करावे?",
    organicFertilizer: "सेंद्रिय खत कसे बनवावे?",
    pestControl: "कीड नियंत्रणासाठी घरगुती उपाय",
    soilTesting: "मातीची चाचणी कशी करावी?",
    irrigationTiming: "पाणी पुरवठ्याची योग्य वेळ कोणती?",
  },

  gu: {
    appTitle: "પ્રોજેક્ટ કિસાન",
    appSubtitle: "તમારો AI-સંચાલિત ખેતી સહાયક",
    selectLanguage: "ભાષા પસંદ કરો",
    language: "ભાષા",
    back: "પાછળ",
    home: "હોમ",
    commonQuestions: "સામાન્ય પ્રશ્નો:",
    expertTips: "નિષ્ણાતોની સલાહ:",
    askClearQuestions: "સ્પષ્ટ અને વિગતવાર પ્રશ્નો પૂછો",
    provideCropInfo: "તમારા પાક, માટી અને વિસ્તારની માહિતી આપો",
    describeSymptoms: "સમસ્યાના લક્ષણોનું વિગતવાર વર્ણન કરો",
    mentionPreviousTreatments: "અગાઉ કરેલા ઉપચારોનો ઉલ્લેખ કરો",
    yellowLeaves: "મારા પાકના પાંદડા શા માટે પીળા થઈ રહ્યા છે?",
    afterRain: "વરસાદ પછી શું કરવું?",
    organicFertilizer: "કાર્બનિક ખાતર કેવી રીતે બનાવવું?",
    pestControl: "જંતુ નિયંત્રણ માટે ઘરેલું ઉપાય",
    soilTesting: "માટીની તપાસ કેવી રીતે કરવી?",
    irrigationTiming: "સિંચાઈ માટે યોગ્ય સમય કયો છે?",
  },

  bn: {
    appTitle: "প্রজেক্ট কিষান",
    appSubtitle: "আপনার AI-চালিত কৃষি সহায়ক",
    selectLanguage: "ভাষা নির্বাচন করুন",
    language: "ভাষা",
    back: "পিছনে",
    home: "হোম",
    commonQuestions: "সাধারণ প্রশ্ন:",
    expertTips: "বিশেষজ্ঞদের পরামর্শ:",
    askClearQuestions: "স্পষ্ট এবং বিস্তারিত প্রশ্ন করুন",
    provideCropInfo: "আপনার ফসল, মাটি এবং এলাকার তথ্য দিন",
    describeSymptoms: "সমস্যার লক্ষণগুলি বিস্তারিতভাবে বর্ণনা করুন",
    mentionPreviousTreatments: "পূর্বে চেষ্টা করা চিকিৎসার উল্লেখ করুন",
    yellowLeaves: "আমার ফসলের পাতা কেন হলুদ হয়ে যাচ্ছে?",
    afterRain: "বৃষ্টির পর কী করতে হবে?",
    organicFertilizer: "জৈব সার কীভাবে তৈরি করবেন?",
    pestControl: "কীটপতঙ্গ নিয়ন্ত্রণের ঘরোয়া উপায়",
    soilTesting: "মাটি পরীক্ষা কীভাবে করবেন?",
    irrigationTiming: "সেচের সঠিক সময় কখন?",
  },

  pa: {
    appTitle: "ਪ੍ਰੋਜੈਕਟ ਕਿਸਾਨ",
    appSubtitle: "ਤੁਹਾਡਾ AI-ਸੰਚਾਲਿਤ ਖੇਤੀ ਸਹਾਇਕ",
    selectLanguage: "ਭਾਸ਼ਾ ਚੁਣੋ",
    language: "ਭਾਸ਼ਾ",
    back: "ਪਿੱਛੇ",
    home: "ਘਰ",
    commonQuestions: "ਆਮ ਸਵਾਲ:",
    expertTips: "ਮਾਹਿਰਾਂ ਦੇ ਸੁਝਾਅ:",
    askClearQuestions: "ਸਪੱਸ਼ਟ ਅਤੇ ਵਿਸਤ੍ਰਿਤ ਸਵਾਲ ਪੁੱਛੋ",
    provideCropInfo: "ਆਪਣੀ ਫਸਲ, ਮਿੱਟੀ ਅਤੇ ਖੇਤਰ ਦੀ ਜਾਣਕਾਰੀ ਦਿਓ",
    describeSymptoms: "ਸਮੱਸਿਆ ਦੇ ਲੱਛਣਾਂ ਦਾ ਵਿਸਤਾਰ ਨਾਲ ਵਰਣਨ ਕਰੋ",
    mentionPreviousTreatments: "ਪਹਿਲਾਂ ਕੀਤੇ ਇਲਾਜਾਂ ਦਾ ਜ਼ਿਕਰ ਕਰੋ",
    yellowLeaves: "ਮੇਰੀ ਫਸਲ ਦੇ ਪੱਤੇ ਪੀਲੇ ਕਿਉਂ ਹੋ ਰਹੇ ਹਨ?",
    afterRain: "ਬਰਸਾਤ ਤੋਂ ਬਾਅਦ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
    organicFertilizer: "ਜੈਵਿਕ ਖਾਦ ਕਿਵੇਂ ਬਣਾਈਏ?",
    pestControl: "ਕੀੜੇ ਨਿਯੰਤਰਣ ਲਈ ਘਰੇਲੂ ਉਪਾਅ",
    soilTesting: "ਮਿੱਟੀ ਦੀ ਜਾਂਚ ਕਿਵੇਂ ਕਰੀਏ?",
    irrigationTiming: "ਸਿੰਚਾਈ ਦਾ ਸਹੀ ਸਮਾਂ ਕੀ ਹੈ?",
  },

  or: {
    appTitle: "ପ୍ରୋଜେକ୍ଟ କିସାନ",
    appSubtitle: "ଆପଣଙ୍କର AI-ଚାଳିତ କୃଷି ସହାୟକ",
    selectLanguage: "ଭାଷା ବାଛନ୍ତୁ",
    language: "ଭାଷା",
    back: "ପଛକୁ",
    home: "ହୋମ",
    commonQuestions: "ସାଧାରଣ ପ୍ରଶ୍ନ:",
    expertTips: "ବିଶେଷଜ୍ଞଙ୍କ ପରାମର୍ଶ:",
    askClearQuestions: "ସ୍ପଷ୍ଟ ଏବଂ ବିସ୍ତୃତ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ",
    provideCropInfo: "ଆପଣଙ୍କ ଫସଲ, ମାଟି ଏବଂ ଅଞ୍ଚଳର ସୂଚନା ଦିଅନ୍ତୁ",
    describeSymptoms: "ସମସ୍ୟାର ଲକ୍ଷଣଗୁଡ଼ିକୁ ବିସ୍ତାରରେ ବର୍ଣ୍ଣନା କରନ୍ତୁ",
    mentionPreviousTreatments: "ପୂର୍ବରୁ ଚେଷ୍ଟା କରିଥିବା ଚିକିତ୍ସାର ଉଲ୍ଲେଖ କରନ୍ତୁ",
    yellowLeaves: "ମୋ ଫସଲର ପତ୍ର କାହିଁକି ହଳଦିଆ ହେଉଛି?",
    afterRain: "ବର୍ଷା ପରେ କଣ କରିବା ଉଚିତ?",
    organicFertilizer: "ଜୈବିକ ସାର କିପରି ତିଆରି କରିବେ?",
    pestControl: "କୀଟ ନିୟନ୍ତ୍ରଣ ପାଇଁ ଘରୋଇ ଉପାୟ",
    soilTesting: "ମାଟି ପରୀକ୍ଷା କିପରି କରିବେ?",
    irrigationTiming: "ଜଳସେଚନର ସଠିକ ସମୟ କେବେ?",
  },
} as const
