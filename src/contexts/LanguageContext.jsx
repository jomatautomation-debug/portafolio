import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext()

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider')
    }
    return context
}

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'es'
    })

    useEffect(() => {
        localStorage.setItem('language', language)
    }, [language])

    // Translation helper function
    const t = (key) => {
        const keys = key.split('.')
        let value = translations[language]

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k]
            } else {
                return key // Return key if translation not found
            }
        }

        return value || key
    }

    const changeLanguage = (lang) => {
        if (['es', 'en', 'fr', 'pt'].includes(lang)) {
            setLanguage(lang)
        }
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}
