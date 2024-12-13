import { useTranslation } from 'react-i18next';

const Custom404 = () => {
	const { t } = useTranslation();

	// Проверка на использование переменной t
	return <h1>{t('404page')}</h1>;
};

export default Custom404;


//const Custom404 = () => {
	//return <h1>Page Not Found</h1>;
//};
//export default Custom404;