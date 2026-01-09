import { useLanguage } from '../contexts/LanguageContext'
import es from '../translations/es.json'
import en from '../translations/en.json'

const translations = { es, en }

export const useTranslation = () => {
    const { language } = useLanguage()

    const t = (key) => {
        const keys = key.split('.')
        let value = translations[language]

        for (const k of keys) {
            value = value?.[k]
        }

        return value || key
    }

    return { t, language }
}
