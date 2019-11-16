import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { i18nAboutMe } from './i18n-about-me'
import { i18nSkills } from './i18n-skills'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        'about-me': i18nAboutMe.en,
        skills: i18nSkills.en,
      },

      pl: {
        'about-me': i18nAboutMe.pl,
        skills: i18nSkills.pl,
      },
    },

    keySeparator: '.',

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['navigator'],
    },
  })

export default i18n
