"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { TrendingUp, ArrowLeft, Volume2, Loader2, Search } from "lucide-react"
import Link from "next/link"
import { getMarketPrices } from "@/app/actions/market"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "@/components/language-selector"

export default function MarketPage() {
  const [query, setQuery] = useState("")
  const [marketData, setMarketData] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { t, language } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) {
      setError(t("कृपया फसल का नाम दर्ज करें | Please enter crop name"))
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const result = await getMarketPrices(query)
      setMarketData(result)
    } catch (err) {
      setError(t("बाजार डेटा प्राप्त करने में त्रुटि | Error fetching market data"))
    } finally {
      setIsLoading(false)
    }
  }

  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "hi-IN"
      speechSynthesis.speak(utterance)
    }
  }

  const popularCrops = [
    "गेहूं | Wheat",
    "चावल | Rice",
    "मक्का | Corn",
    "सोयाबीन | Soybean",
    "कपास | Cotton",
    "गन्ना | Sugarcane",
    "आलू | Potato",
    "प्याज | Onion",
  ]

  return (
    <div className="min-h-screen bg-background antialiased flex flex-col">
      <div className="relative flex-1">
        <div className="mx-auto max-w-7xl py-6 md:px-8 lg:px-12">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/">
              <Button variant="outline" size="sm" className="mr-4 bg-transparent">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t("वापस | Back")}
              </Button>
            </Link>
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-blue-800">{t("बाजार भाव | Market Prices")}</h1>
            </div>
            <div className="flex gap-2">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Query Section */}
            <Card className="bg-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center text-blue-800">{t("फसल की जानकारी पूछें | Ask About Crop")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder={t("फसल का नाम दर्ज करें | Enter crop name")}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="w-full text-lg"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t("खोज रहे हैं... | Searching...")}
                      </>
                    ) : (
                      <>
                        <Search className="mr-2 h-4 w-4" />
                        {t("भाव देखें | Check Prices")}
                      </>
                    )}
                  </Button>
                </form>

                {/* Popular Crops */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t("लोकप्रिय फसलें | Popular Crops:")}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {popularCrops.map((crop, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => setQuery(crop.split(" | ")[1])}
                        className="text-xs"
                      >
                        {crop}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card className="bg-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center text-blue-800">{t("बाजार विश्लेषण | Market Analysis")}</CardTitle>
              </CardHeader>
              <CardContent>
                {error && (
                  <Alert className="mb-4 border-red-200 bg-red-50">
                    <AlertDescription className="text-red-800">{error}</AlertDescription>
                  </Alert>
                )}

                {marketData ? (
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-blue-800">{t("AI विश्लेषण | AI Analysis")}</h3>
                        <Button
                          onClick={() => speakText(marketData)}
                          size="sm"
                          variant="outline"
                          className="text-blue-600"
                        >
                          <Volume2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-gray-700 whitespace-pre-wrap">{marketData}</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <TrendingUp className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p>
                      {t("फसल का नाम दर्ज करने के बाद बाजार विश्लेषण यहाँ दिखेगा")}
                      <br />
                      {t("Market analysis will appear here after entering crop name")}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Market Tips */}
          <Card className="mt-6 bg-white/5 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-gray-800 mb-2">{t("बाजार सुझाव | Market Tips:")}</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• {t("सुबह जल्दी मंडी जाएं बेहतर भाव के लिए | Visit mandi early morning for better prices")}</li>
                <li>• {t("कई मंडियों के भाव की तुलना करें | Compare prices across multiple mandis")}</li>
                <li>• {t("फसल की गुणवत्ता बनाए रखें | Maintain crop quality")}</li>
                <li>• {t("मौसम और त्योहारों का प्रभाव समझें | Understand impact of weather and festivals")}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
