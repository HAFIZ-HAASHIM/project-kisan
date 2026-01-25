# Project Kisan - Google-Only API Integration

## 🚀 Getting Started

### 1. Environment Setup

Create a `.env.local` file in your project root:


# Copy from .env.example
cp .env.example .env.local


### 2. Required API Keys

#### Google AI API (Required)
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add to `.env.local`: `GOOGLE_AI_API_KEY=your_key_here`

#### Firebase Project
1. Visit [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Add to `.env.local`:
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_key
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   

#### Google Maps API
1. Sign up at [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Google Maps API
3. Add to `.env.local`: `GOOGLE_MAPS_API_KEY=your_maps_api_key`

### 3. Installation

# Install dependencies
npm install

# Firebase setup
npm install -g firebase-tools
firebase login
firebase init

### 4. Run Development Server

npm run dev
# or
yarn dev

## 📡 API Endpoints

### Crop Diagnosis
- **POST** `/api/diagnosis`
- **Body**: FormData with image file and language
- **Response**: AI-powered crop diagnosis using Gemini Vision

### Market Prices
- **POST** `/api/market`
- **Body**: `{ query: "crop_name", language: "en" }`
- **Response**: Real market data + AI analysis using Gemini API

### Government Schemes
- **POST** `/api/schemes`
- **Body**: `{ query: "scheme_name", language: "en" }`
- **Response**: Scheme information + eligibility from Firebase Firestore

### Weather Advice
- **POST** `/api/weather`
- **Body**: `{ lat: 12.34, lon: 56.78, language: "en" }`
- **Response**: Weather-based farming advice using Google Maps API

## 🔧 Production Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Add environment variables in Vercel dashboard
3. Deploy automatically

### Firebase Hosting
# Build and deploy
npm run build
firebase deploy

## 🛡️ Security Features

- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Input Validation**: All inputs sanitized
- **Error Handling**: Graceful error responses
- **API Key Protection**: Server-side only
- **Firebase Rules**: Secure database access
- **Data Encryption**: All data encrypted in transit and at rest

## 📊 Monitoring

- Query logging in Firebase Firestore
- Error tracking using Cloud Monitoring
- Usage analytics from Firebase Analytics
- Performance monitoring

## 🔄 API Integration Status

✅ **Implemented:**
- Google Gemini AI for crop diagnosis
- Google Gemini Pro for expert advice
- Real market data integration
- Government schemes database using Firebase Firestore
- Weather-based recommendations using Google Maps API
- Multi-language support using Google Translate
- Rate limiting and security

🚧 **Coming Soon:**
- Firebase Auth: User profiles and history
- Vertex AI: Custom agricultural models
- Firebase Functions: Serverless backend
- Google Cloud Translation: Real-time translation
- Firebase Messaging: Push notifications

## 💰 Cost Optimization

**Free Tier Limits**:
- Gemini API: 15 requests/minute
- Firebase: 1GB storage, 50K reads/day
- Maps API: $200 monthly credit

**Production Scaling**:
- Pay-per-use pricing
- Automatic scaling
- Built-in caching to reduce costs

## 🔒 Security & Privacy

- **API Keys**: Server-side only, never exposed
- **Firebase Rules**: Secure database access
- **Rate Limiting**: Prevent abuse
- **Data Encryption**: All data encrypted in transit and at rest

## 📊 Monitoring & Analytics

- **Firebase Analytics**: User behavior tracking
- **Cloud Monitoring**: API usage and performance
- **Error Reporting**: Automatic error tracking
- **Custom Dashboards**: Agricultural insights

## 🚀 Deployment

**Vercel (Recommended)**:
# Deploy to Vercel
vercel --prod

# Environment variables in Vercel dashboard

**Firebase Hosting**:
# Build and deploy
npm run build
firebase deploy

## 📈 Advantages of Google-Only Approach

1. **Unified Billing**: Single Google Cloud account
2. **Better Integration**: Services work seamlessly together
3. **Consistent Performance**: Optimized for Google infrastructure
4. **Advanced AI**: Access to latest Gemini models
5. **Scalability**: Auto-scaling across all services
6. **Security**: Enterprise-grade security across all services
7. **Support**: Single point of contact for all services

## 🎯 Next Steps

1. Set up Google Cloud Project
2. Enable required APIs
3. Configure Firebase
4. Add API keys to environment
5. Deploy and test

For detailed setup instructions, visit: [Setup Guide](https://docs.projectkisan.com/google-setup)
# project-kisan
Project-Kisan is an AI-powered agentic system designed to assist farmers with smart, context-aware agricultural guidance. Built for Google Agentic AI Day, it uses autonomous AI agents to provide insights, recommendations, and decision support for improving farm productivity and sustainability.

