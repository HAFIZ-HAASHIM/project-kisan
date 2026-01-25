"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FileText, ArrowLeft, Volume2, Loader2, Search } from "lucide-react"
import Link from "next/link"
import { getSchemeInfo } from "@/app/actions/schemes"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "@/components/language-selector"

export default function SchemesPage() {
  const [query, setQuery] = useState("")
  const [schemeData, setSchemeData] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) {
      setError(t("schemes.error_empty_query"))
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const result = await getSchemeInfo(query)
      setSchemeData(result)
    } catch (err) {
      setError(t("schemes.error_fetching_info"))
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

  const popularSchemes = [
    "PM-KISAN",
    "Crop Insurance",
    "KCC (Kisan Credit Card)",
    "Soil Health Card",
    "Pradhan Mantri Fasal Bima Yojana",
    "Kisan Samman Nidhi",
    "Organic Farming",
    "Drip Irrigation",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 backdrop-blur-md p-4">
      <div className="max-w-4xl mx-auto py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Link href="/">
              <Button variant="outline" size="sm" className="mr-4 bg-transparent text-gray-800 dark:text-gray-200">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t("schemes.back")}
              </Button>
            </Link>
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
              <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-200">{t("schemes.title")}</h1>
            </div>
          </div>
          <div className="flex gap-4">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Query Section */}
          <Card className="bg-white dark:bg-gray-900 shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-center text-xl font-semibold text-purple-800 dark:text-purple-200">
                {t("schemes.ask_about")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder={t("schemes.enter_scheme_name")}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full text-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t("schemes.searching")}
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      {t("schemes.get_info")}
                    </>
                  )}
                </Button>
              </form>

              {/* Popular Schemes */}
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">{t("schemes.popular_schemes")}:</h3>
                <div className="grid grid-cols-1 gap-2">
                  {popularSchemes.map((scheme, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setQuery(scheme)}
                      className="text-xs text-left justify-start text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {scheme}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="bg-white dark:bg-gray-900 shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-center text-xl font-semibold text-purple-800 dark:text-purple-200">
                {t("schemes.scheme_details")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert className="mb-4 border-red-200 bg-red-50">
                  <AlertDescription className="text-red-800">{error}</AlertDescription>
                </Alert>
              )}

              {schemeData ? (
                <div className="space-y-4">
                  <div className="bg-purple-50 dark:bg-gray-800 p-5 rounded-lg border border-purple-200 dark:border-gray-700">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-purple-800 dark:text-purple-200">{t("schemes.ai_analysis")}</h3>
                      <Button
                        onClick={() => speakText(schemeData)}
                        size="sm"
                        variant="outline"
                        className="text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-700"
                      >
                        <Volume2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{schemeData}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 dark:text-gray-400 py-10">
                  <FileText className="h-16 w-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
                  <p>{t("schemes.info_appears_here")}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Important Links */}
        <Card className="mt-8 bg-white dark:bg-gray-900 shadow-xl border-0">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">{t("schemes.important_links")}:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t("schemes.application_portals")}:
                </h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• PM-KISAN: pmkisan.gov.in</li>
                  <li>• Crop Insurance: pmfby.gov.in</li>
                  <li>• KCC: kcc.gov.in</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">{t("schemes.helpline")}:</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• PM-KISAN: 155261</li>
                  <li>• Kisan Call Center: 1800-180-1551</li>
                  <li>• Crop Insurance: 1800-200-7710</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
