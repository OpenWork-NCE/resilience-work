"use client"

import * as React from "react"
import { Languages } from "lucide-react"
import { useRouter, usePathname } from "@/i18n/routing"
import { useLocale } from "next-intl"

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()
  const [isOpen, setIsOpen] = React.useState(false)

  const handleLocaleChange = (locale: "en" | "fr") => {
    router.replace(pathname, { locale })
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md border border-muted bg-background hover:bg-muted transition-colors flex items-center gap-2"
        aria-label="Switch language"
      >
        <Languages className="h-5 w-5" />
        <span className="text-sm font-medium uppercase">{currentLocale}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-md border border-muted bg-background shadow-lg z-50">
          <div className="py-1">
            <button
              onClick={() => handleLocaleChange("en")}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-muted ${
                currentLocale === "en" ? "bg-muted font-bold" : ""
              }`}
            >
              English
            </button>
            <button
              onClick={() => handleLocaleChange("fr")}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-muted ${
                currentLocale === "fr" ? "bg-muted font-bold" : ""
              }`}
            >
              Français
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
