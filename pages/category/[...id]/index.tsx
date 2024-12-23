// Импортируем необходимые типы и компоненты для страницы
import type { GetServerSideProps } from 'next'; // Для получения данных на сервере перед рендером страницы
import Head from 'next/head'; // Для работы с <head> документа, например, для тега <title>
import CategoryProduct from '@src/components/pages/categoryProduct'; // Компонент для отображения продуктов в категории
import { getCategoryData } from '@src/api/category'; // Функция для получения данных категории с API

// Типизация для данных категории
type CategoryType = {
	data: {
		data: []; // Массив продуктов в категории
		status: number; // Статус ответа API (например, 200 - успешно)
	};
};

const Category = (props: CategoryType) => {
	return (
		<>
			{/* Компонент Head для добавления мета-данных в <head> документа */}
			<Head>
				<title>Приправы</title> {/* Заголовок страницы */}
			</Head>

			{/* Отображаем компонент с продуктами категории, передавая данные */}
			<CategoryProduct data={props.data.data} />
		</>
	);
};

// Функция для получения данных на сервере перед рендером страницы
export const getServerSideProps: GetServerSideProps = async (context: any) => {
	// Получаем идентификатор категории из параметров URL
	const id = context.query.id;

	// Запрашиваем данные категории с помощью API
	const response = await getCategoryData(id[0]);

	// Возвращаем данные в пропсах, чтобы они были переданы в компонент
	return { props: { data: response } };
};

export default Category;
