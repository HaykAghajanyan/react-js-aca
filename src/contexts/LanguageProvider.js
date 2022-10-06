import {createContext, useCallback, useContext, useState} from "react";

const LanguageContext = createContext(null)

const translations = {
    en: {
        'hello': 'hello',
        'world': 'world',
    },
    ru: {
        'hello': 'привет',
        'world': 'мир',
    }
}

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('en')

    const t = useCallback(word => {
        return translations[language][word] || word
    }, [language])

    const providerObj = {
        t,
        language,
        setLanguage,
    }

    return (
        <LanguageContext.Provider value={providerObj}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)

export default LanguageProvider
