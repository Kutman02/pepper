import type { AppProps } from 'next/app';
import MainLayout from '@src/layouts/mainLayout';
import '@src/styles/globals.css';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const App = ({ Component, pageProps }: AppProps) => {
	const { i18n } = useTranslation();

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language);
	};

	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	);
};

export function WrappedApp() {
	return (
		<Suspense fallback='...Load'>
			<App />
		</Suspense>
	);
}

export default App;
