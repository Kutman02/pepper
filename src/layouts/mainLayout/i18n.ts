import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from '/pages/locales/en/translation.json';
import ruTranslation from '/pages/locales/ru/translation.json';

// Инициализация i18next
i18n
	.use(LanguageDetector) // Определение языка пользователя
	.use(initReactI18next) // Интеграция с React
	.init({
		fallbackLng: 'en', // Язык по умолчанию
		debug: true, // Включает логирование
		interpolation: {
			escapeValue: false, // Безопасность для React (XSS)
		},
		resources: {
			en: {
				translation: enTranslation, // Перевод для английского языка
			},
			ru: {
				translation: ruTranslation, // Перевод для русского языка
			},
		},
	});

export default i18n;
