// Google-Only API Configuration
export const GOOGLE_API_CONFIG = {
  // Google AI APIs
  GEMINI_API_KEY: process.env.GOOGLE_AI_API_KEY || "",
  VERTEX_AI_PROJECT_ID: process.env.GOOGLE_CLOUD_PROJECT_ID || "",
  VERTEX_AI_LOCATION: process.env.VERTEX_AI_LOCATION || "us-central1",

  // Firebase Configuration
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || "",
  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || "",
  FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || "",
  FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET || "",

  // Google Cloud Services
  GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY || "",
  GOOGLE_TRANSLATE_API_KEY: process.env.GOOGLE_TRANSLATE_API_KEY || "",

  // AI Models
  GEMINI_PRO_MODEL: "gemini-1.5-pro-latest",
  GEMINI_VISION_MODEL: "gemini-1.5-pro-vision-latest",
  VERTEX_AI_MODEL: "gemini-1.5-pro",

  // Rate Limiting
  RATE_LIMIT_REQUESTS: 100,
  RATE_LIMIT_WINDOW: 15 * 60 * 1000, // 15 minutes
}

export const GOOGLE_API_ENDPOINTS = {
  CROP_DIAGNOSIS: "/api/google/diagnosis",
  MARKET_PRICES: "/api/google/market",
  GOVERNMENT_SCHEMES: "/api/google/schemes",
  ASK_EXPERT: "/api/google/expert",
  WEATHER: "/api/google/weather",
  TRANSLATE: "/api/google/translate",
  LOCATION: "/api/google/location",
}
