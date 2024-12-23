// Импортируем типы и компоненты для настройки приложения Next.js
import type { AppProps } from 'next/app'; // Типизация для пропсов приложения
import MainLayout from '@src/layouts/mainLayout'; // Главный макет (layout) для всех страниц
import '@src/styles/globals.css'; // Импортируем глобальные стили
import { Suspense } from 'react'; // Компонент Suspense для асинхронных операций, например, загрузки данных

// Основной компонент приложения
const App = ({ Component, pageProps, router }: AppProps) => {
	// Хук для изменения языка (временно закомментирован)
	// const { i18n } = useTranslation();

	// Функция для изменения языка (временно закомментирована)
	// const changeLanguage = (language: string) => {
	// 	i18n.changeLanguage(language);
	// };

	// Возвращаем главный макет и передаем компонент страницы с пропсами
	return (
		<MainLayout>
			{/* Компонент текущей страницы */}
			<Component {...pageProps} router={router} />
		</MainLayout>
	);
};

// Обертка для компонента приложения с использованием Suspense
// Suspense нужен для отображения запасного контента, пока основной контент не загрузится
export function WrappedApp(appProps: AppProps) {
	return (
		<Suspense fallback='...Load'>
			{/* Отображаем приложение внутри Suspense */}
			<App {...appProps} />
		</Suspense>
	);
}

// Экспортируем WrappedApp как основной компонент для Next.js
export default WrappedApp;
