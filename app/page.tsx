"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mic, MicOff, Camera, TrendingUp, FileText, Sprout, Sparkles, Users, Award } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t, language } = useLanguage()
  const [isListening, setIsListening] = useState(false)
  const [voiceText, setVoiceText] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const startVoiceRecognition = () => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
      const recognition = new SpeechRecognition()

      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = `${language}-IN`

      recognition.onstart = () => {
        setIsListening(true)
      }

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setVoiceText(transcript)
        setIsListening(false)

        // Route based on voice command (works in any language)
        const lowerTranscript = transcript.toLowerCase()
        if (
          lowerTranscript.includes("crop") ||
          lowerTranscript.includes("फसल") ||
          lowerTranscript.includes("ಬೆಳೆ") ||
          lowerTranscript.includes("பயிர்")
        ) {
          window.location.href = "/diagnosis"
        } else if (
          lowerTranscript.includes("market") ||
          lowerTranscript.includes("बाजार") ||
          lowerTranscript.includes("ಮಾರುಕಟ್ಟೆ") ||
          lowerTranscript.includes("சந்தை")
        ) {
          window.location.href = "/market"
        } else if (
          lowerTranscript.includes("scheme") ||
          lowerTranscript.includes("योजना") ||
          lowerTranscript.includes("ಯೋಜನೆ") ||
          lowerTranscript.includes("திட்டம்")
        ) {
          window.location.href = "/schemes"
        }
      }

      recognition.onerror = () => {
        setIsListening(false)
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      recognition.start()
    } else {
      alert(t("voiceNotSupported"))
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      <LanguageSelector />
      <ThemeToggle />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 dark:from-green-600/10 dark:to-blue-600/10 blur-3xl -z-10" />

          <div className="flex items-center justify-center mb-6 relative">
            <div className="relative">
              <Sprout className="h-16 w-16 text-emerald-600 dark:text-emerald-400 mr-4 animate-pulse" />
              <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-500 animate-bounce" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
                {t("appTitle")}
              </h1>
              <Badge variant="secondary" className="mt-2 text-sm font-medium">
                AI-Powered • Multilingual • Voice-First
              </Badge>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            {t("appSubtitle")}
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Users className="h-4 w-4" />
              <span>10,000+ {t("farmers")}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Award className="h-4 w-4" />
              <span>{t("aiPowered")}</span>
            </div>
          </div>

          {/* Enhanced Voice Control */}
          <div className="mb-8">
            <Button
              onClick={startVoiceRecognition}
              disabled={isListening}
              size="lg"
              className={`${
                isListening
                  ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 animate-pulse"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              } text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
            >
              {isListening ? (
                <>
                  <MicOff className="mr-3 h-6 w-6 animate-pulse" />
                  {t("listening")}
                </>
              ) : (
                <>
                  <Mic className="mr-3 h-6 w-6" />
                  {t("askByVoice")}
                </>
              )}
            </Button>
            {voiceText && (
              <div className="mt-4 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t("youSaid")}: "{voiceText}"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {/* Crop Diagnosis */}
          <Card className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 dark:from-emerald-400/5 dark:to-green-400/5" />
            <Link href="/diagnosis">
              <CardHeader className="text-center relative z-10">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/50 dark:to-green-900/50 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <Camera className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-xl text-emerald-800 dark:text-emerald-300 mb-2">
                  {t("cropDiagnosis")}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">{t("cropDiagnosisDesc")}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-200">
                  {t("uploadPhoto")}
                </Button>
              </CardContent>
            </Link>
          </Card>

          {/* Market Prices */}
          <Card className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-400/5 dark:to-cyan-400/5" />
            <Link href="/market">
              <CardHeader className="text-center relative z-10">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl text-blue-800 dark:text-blue-300 mb-2">{t("marketPrices")}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{t("marketPricesDesc")}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-200">
                  {t("checkPrices")}
                </Button>
              </CardContent>
            </Link>
          </Card>

          {/* Government Schemes */}
          <Card className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-400/5 dark:to-pink-400/5" />
            <Link href="/schemes">
              <CardHeader className="text-center relative z-10">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl text-purple-800 dark:text-purple-300 mb-2">{t("govSchemes")}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{t("govSchemesDesc")}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-200">
                  {t("viewSchemes")}
                </Button>
              </CardContent>
            </Link>
          </Card>

          {/* Ask Expert */}
          <Card className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-orange-400/5 dark:to-red-400/5" />
            <Link href="/expert">
              <CardHeader className="text-center relative z-10">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <Sprout className="h-12 w-12 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-xl text-orange-800 dark:text-orange-300 mb-2">{t("askExpert")}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{t("askExpertDesc")}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-200">
                  {t("askQuestion")}
                </Button>
              </CardContent>
            </Link>
          </Card>
        </div>

        {/* Features Highlight */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("aiPoweredAnalysis")}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t("aiAnalysisDesc")}</p>
          </div>

          <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mic className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("voiceFirstInterface")}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t("voiceInterfaceDesc")}</p>
          </div>

          <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("farmerFriendly")}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t("farmerFriendlyDesc")}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-200/50 dark:border-gray-700/50">
          <p className="text-gray-600 dark:text-gray-400 mb-2">{t("madeWithLove")}</p>
          <p className="text-sm text-gray-500 dark:text-gray-500">{t("empoweringAgriculture")}</p>
        </div>
      </div>
    </div>
  )
}
