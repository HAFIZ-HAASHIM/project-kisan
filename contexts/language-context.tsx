"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type LanguageCode, translations } from "@/lib/languages"

interface LanguageContextType {
  language: LanguageCode
  setLanguage: (lang: LanguageCode) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("preferred-language") as LanguageCode
    if (savedLanguage && translations[savedLanguage]) {
      setLanguageState(savedLanguage)
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split("-")[0] as LanguageCode
      if (translations[browserLang]) {
        setLanguageState(browserLang)
      }
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang)
    localStorage.setItem("preferred-language", lang)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    // Fallback to English if translation not found
    if (!value && language !== "en") {
      let fallback: any = translations.en
      for (const k of keys) {
        fallback = fallback?.[k]
      }
      return fallback || key
    }

    return value || key
  }

  if (!mounted) {
    return null
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
