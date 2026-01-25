"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Camera, Upload, ArrowLeft, Volume2, Loader2 } from "lucide-react"
import Link from "next/link"
import { diagnoseCrop } from "@/app/actions/diagnosis"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "@/components/language-selector"

export default function DiagnosisPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [diagnosis, setDiagnosis] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { t, language } = useLanguage()

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
      setDiagnosis(null)
      setError(null)
    }
  }

  const handleSubmit = async () => {
    if (!selectedFile) {
      setError(t("selectImageFirst"))
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("image", selectedFile)

      const result = await diagnoseCrop(formData)
      setDiagnosis(result)
    } catch (err) {
      setError(t("diagnosisError"))
    } finally {
      setIsLoading(false)
    }
  }

  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = `${language}-IN`
      speechSynthesis.speak(utterance)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500 p-4">
      <ThemeToggle />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Link href="/">
            <Button variant="outline" size="sm" className="mr-4 bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("back")}
            </Button>
          </Link>
          <div className="flex items-center">
            <Camera className="h-8 w-8 text-green-600 mr-3" />
            <h1 className="text-3xl font-bold text-green-800">{t("cropDiagnosis")}</h1>
          </div>
          <LanguageSelector />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Upload Section */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-green-800">{t("uploadCropPhoto")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center">
                {preview ? (
                  <div className="space-y-4">
                    <img
                      src={preview || "/placeholder.svg"}
                      alt="Selected crop"
                      className="max-w-full h-64 object-contain mx-auto rounded-lg"
                    />
                    <p className="text-sm text-gray-600">{selectedFile?.name}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="h-16 w-16 text-green-400 mx-auto" />
                    <p className="text-gray-600">
                      {t("dragOrUpload")}
                      <br />
                      {t("dragOrUploadEnglish")}
                    </p>
                  </div>
                )}
              </div>

              <Input type="file" accept="image/*" onChange={handleFileSelect} className="w-full" />

              <Button
                onClick={handleSubmit}
                disabled={!selectedFile || isLoading}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("analyzing")}
                  </>
                ) : (
                  t("diagnose")
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-green-800">{t("diagnosisResults")}</CardTitle>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert className="mb-4 border-red-200 bg-red-50">
                  <AlertDescription className="text-red-800">{error}</AlertDescription>
                </Alert>
              )}

              {diagnosis ? (
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-green-800">{t("aiAnalysis")}</h3>
                      <Button
                        onClick={() => speakText(diagnosis)}
                        size="sm"
                        variant="outline"
                        className="text-green-600"
                      >
                        <Volume2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-gray-700 whitespace-pre-wrap">{diagnosis}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <Camera className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p>
                    {t("diagnosisWillAppear")}
                    <br />
                    {t("diagnosisWillAppearEnglish")}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="mt-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-gray-800 mb-2">{t("instructions")}:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• {t("instruction1")}</li>
              <li>• {t("instruction2")}</li>
              <li>• {t("instruction3")}</li>
              <li>• {t("instruction4")}</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
