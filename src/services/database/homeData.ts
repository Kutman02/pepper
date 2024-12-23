// Импортируем изображения баннеров с указанного пути
import banner1 from 'public/images/baner1.png'; // Главное изображение слайдера
import banner2 from 'public/images/baner2.png'; // Баннер в центре
import banner3 from 'public/images/baner3.png'; // Маленький баннер внизу
import banner4 from 'public/images/baner4.png'; // Маленький баннер внизу
import banner5 from 'public/images/baner5.png'; // Средний баннер внизу

// Импортируем данные о продуктах из файла products
import { productsData } from './products';

// Экспортируем объект homeData, который содержит все данные для главной страницы
export const homeData = {
	// Секция с главным слайдером
	slider: {
		link: banner1, // Ссылка на изображение для слайдера
		alt: 'main slider', // Текстовое описание изображения для доступности
	},

	// Секция с баннером в середине страницы
	bannerMiddle: {
		link: banner2, // Ссылка на изображение для центрального баннера
		alt: 'banner middle', // Текстовое описание изображения
	},

	// Секция с баннерами внизу страницы
	bannerBottom: {
		medium: {
			link: banner5, // Ссылка на изображение среднего баннера
			alt: 'banner bottom medium', // Текстовое описание изображения
		},
		small: [
			{
				link: banner3, // Ссылка на маленький баннер 1
				alt: 'banner bottom small 1', // Текстовое описание для маленького баннера 1
			},
			{
				link: banner4, // Ссылка на маленький баннер 2
				alt: 'banner bottom small 2', // Текстовое описание для маленького баннера 2
			},
		],
	},

	// Секция с продуктами на главной странице
	sliderProducts: {
		// Раздел "Лучшее предложение"
		bestOffer: {
			title: 'Best Offer Products', // Заголовок для раздела "Лучшее предложение"
			list: [
				// Список продуктов, включенных в раздел
				productsData[18], // Продукт из списка productsData с индексом 18
				productsData[13], // Продукт с индексом 13
				productsData[20], // Продукт с индексом 20
				productsData[6], // Продукт с индексом 6
			],
		},

		// Раздел "Лучшие продажи"
		bestSelling: {
			title: 'Best Selling Products', // Заголовок для раздела "Лучшие продажи"
			list: [
				// Список продуктов, включенных в раздел
				productsData[17], // Продукт с индексом 17
				productsData[15], // Продукт с индексом 15
				productsData[27], // Продукт с индексом 27
				productsData[10], // Продукт с индексом 10
			],
		},
	},
};
