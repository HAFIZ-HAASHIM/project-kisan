"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Languages, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { languages, type LanguageCode } from "@/lib/languages"

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (langCode: LanguageCode) => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 bg-background/80 backdrop-blur-sm border-2 hover:scale-110 transition-all duration-200"
      >
        <Languages className="h-4 w-4 mr-2" />
        {languages[language].flag} {languages[language].nativeName}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center gap-2">
                <Languages className="h-5 w-5" />
                {t("selectLanguage")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 max-h-96 overflow-y-auto">
                {Object.entries(languages).map(([code, lang]) => (
                  <Button
                    key={code}
                    variant={language === code ? "default" : "outline"}
                    className="w-full justify-between text-left h-auto py-3"
                    onClick={() => handleLanguageChange(code as LanguageCode)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{lang.flag}</span>
                      <div>
                        <div className="font-medium">{lang.nativeName}</div>
                        <div className="text-sm text-muted-foreground">{lang.name}</div>
                      </div>
                    </div>
                    {language === code && <Check className="h-4 w-4" />}
                  </Button>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 bg-transparent" onClick={() => setIsOpen(false)}>
                {t("back")}
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
