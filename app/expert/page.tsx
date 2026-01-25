"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Sprout, ArrowLeft, Volume2, Loader2, Send, Mic, MicOff } from "lucide-react"
import Link from "next/link"
import { askExpert } from "@/app/actions/expert"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "@/components/language-selector"

export default function ExpertPage() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isListening, setIsListening] = useState(false)

  const { t } = useLanguage()

  // Get common questions from translations
  const commonQuestions = [
    t("yellowLeaves"),
    t("afterRain"),
    t("organicFertilizer"),
    t("pestControl"),
    t("soilTesting"),
    t("irrigationTiming"),
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) {
      setError(t("कृपया अपना सवाल दर्ज करें | Please enter your question"))
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const result = await askExpert(question)
      setAnswer(result)
    } catch (err) {
      setError(t("विशेषज्ञ से संपर्क करने में त्रुटि | Error contacting expert"))
    } finally {
      setIsLoading(false)
    }
  }

  const startVoiceRecognition = () => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
      const recognition = new SpeechRecognition()

      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = "hi-IN"

      recognition.onstart = () => {
        setIsListening(true)
      }

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setQuestion(transcript)
        setIsListening(false)
      }

      recognition.onerror = () => {
        setIsListening(false)
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      recognition.start()
    } else {
      alert("Voice recognition not supported in this browser")
    }
  }

  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "hi-IN"
      speechSynthesis.speak(utterance)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 dark:from-zinc-900 dark:to-zinc-700 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Link href="/">
              <Button variant="outline" size="sm" className="mr-4 bg-transparent">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t("वापस | Back")}
              </Button>
            </Link>
            <div className="flex items-center">
              <Sprout className="h-8 w-8 text-orange-600 dark:text-orange-500 mr-3" />
              <h1 className="text-3xl font-bold text-orange-800 dark:text-orange-200">
                {t("विशेषज्ञ से पूछें | Ask Expert")}
              </h1>
            </div>
          </div>
          <div className="flex gap-4">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Question Section */}
          <Card className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border dark:border-zinc-700 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-orange-800 dark:text-orange-200 text-lg">
                {t("अपना सवाल पूछें | Ask Your Question")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Textarea
                    placeholder={t("अपना कृषि संबंधी सवाल यहाँ लिखें... | Write your agriculture question here...")}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full min-h-[120px] text-lg bg-white dark:bg-zinc-800 border dark:border-zinc-700 text-zinc-900 dark:text-zinc-100"
                  />
                  <Button
                    type="button"
                    onClick={startVoiceRecognition}
                    disabled={isListening}
                    className={`absolute bottom-2 right-2 ${isListening ? "bg-red-500 hover:bg-red-600" : "bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"} text-white`}
                    size="sm"
                  >
                    {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </Button>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t("विशेषज्ञ से पूछ रहे हैं... | Asking Expert...")}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {t("सवाल भेजें | Send Question")}
                    </>
                  )}
                </Button>
              </form>

              {/* Common Questions */}
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("commonQuestions")}</h3>
                <div className="space-y-2">
                  {commonQuestions.map((q, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setQuestion(q)}
                      className="w-full text-left justify-start text-sm dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                    >
                      {q}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Answer Section */}
          <Card className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border dark:border-zinc-700 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-orange-800 dark:text-orange-200 text-lg">
                {t("विशेषज्ञ का जवाब | Expert's Answer")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert className="mb-4 border-red-200 bg-red-50">
                  <AlertDescription className="text-red-800">{error}</AlertDescription>
                </Alert>
              )}

              {answer ? (
                <div className="space-y-4">
                  <div className="bg-orange-50 dark:bg-zinc-800 p-4 rounded-lg border border-orange-200 dark:border-zinc-700">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-orange-800 dark:text-orange-200">
                        {t("कृषि विशेषज्ञ | Agriculture Expert")}
                      </h3>
                      <Button
                        onClick={() => speakText(answer)}
                        size="sm"
                        variant="outline"
                        className="text-orange-600 dark:text-orange-400 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                      >
                        <Volume2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{answer}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                  <Sprout className="h-16 w-16 text-gray-300 dark:text-zinc-600 mx-auto mb-4" />
                  <p>
                    {t("सवाल पूछने के बाद विशेषज्ञ का जवाब यहाँ दिखेगा")}
                    <br />
                    {t("Expert's answer will appear here after asking question")}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Expert Tips */}
        <Card className="mt-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border dark:border-zinc-700 shadow-lg">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("expertTips")}:</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• {t("askClearQuestions")}</li>
              <li>• {t("provideCropInfo")}</li>
              <li>• {t("describeSymptoms")}</li>
              <li>• {t("mentionPreviousTreatments")}</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
