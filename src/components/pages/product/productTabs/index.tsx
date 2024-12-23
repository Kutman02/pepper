import React from 'react'; // Импортируем React для работы с компонентами
import { DescriptionTabs, Tab, Tabs, Wrapper } from './styled'; // Импортируем стилизованные компоненты
import { useTranslation } from 'react-i18next'; // Импортируем хук для работы с переводами

// Определяем тип данных для вкладок
type ProductTabsType = {
	content: string; // Содержимое вкладки
	title: string; // Заголовок вкладки
};

const ProductTabs = ({ data }: any) => {
	// Принимаем данные как пропс
	const { t } = useTranslation(); // Инициализируем хук для переводов

	return (
		<Wrapper>
			{' '}
			{/* Окружает все в стилизованный контейнер */}
			<Tabs>
				{' '}
				{/* Стилизованная обертка для вкладок */}
				<Tab>{t('productContent.productDescription')}</Tab> {/* Текст для вкладки, переведенный на нужный язык */}
			</Tabs>
			<DescriptionTabs>
				{' '}
				{/* Стилизованная обертка для контента вкладки */}
				{data.map(
					(
						item: ProductTabsType,
						index: number, // Перебираем данные и отображаем каждую вкладку
					) => (
						<React.Fragment key={index}>
							{' '}
							{/* Оборачиваем контент вкладки в React.Fragment, чтобы избежать лишних DOM-узлов */}
							<h3>{item.title}</h3> {/* Заголовок вкладки */}
							<p>{item.content}</p> {/* Содержимое вкладки */}
						</React.Fragment>
					),
				)}
			</DescriptionTabs>
		</Wrapper>
	);
};

export default ProductTabs; // Экспортируем компонент для использования в других частях приложения
