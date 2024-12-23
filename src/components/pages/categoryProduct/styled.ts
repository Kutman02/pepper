import styled from '@emotion/styled';
import theme from '@styles/theme';

// Деструктурируем цвета из темы, чтобы использовать их в стилях
const { black } = theme.colors;

// Компонент Wrapper — общий контейнер для всех элементов страницы
export const Wrapper = styled.div(() => ({
	display: 'flex', // Располагаем элементы в строку
	justifyContent: 'space-between', // Распределяем элементы с максимальным пространством между ними
	marginTop: 60, // Отступ сверху
	alignItems: 'flex-start', // Выравниваем элементы по верхнему краю
	flexWrap: 'wrap', // Разрешаем элементам оборачиваться на новые строки, если не помещаются

	'@media (max-width: 768px)': {
		// Для экранов шириной до 768px (мобильные устройства)
		flexDirection: 'column', // Переводим элементы в колонку
		alignItems: 'center', // Выравниваем элементы по центру
		marginTop: 30, // Уменьшаем отступ сверху на мобильных устройствах
	},
}));

// Компонент для контента товаров
export const ProductContent = styled.div(() => ({
	width: '70%', // Ширина компонента 70% от родительского
	maxWidth: '1000px', // Максимальная ширина — 1000px

	'@media (max-width: 768px)': {
		width: '100%', // На мобильных устройствах растягиваем на 100%
	},
}));

// Компонент для фильтрации товаров
export const FilterProducts = styled.div(() => ({
	width: '100%', // Ширина компонента 100% от родительского
	maxWidth: '1000px', // Максимальная ширина — 1000px
	borderBottom: '3px solid #e0e0e6', // Нижняя граница для разделения секций
	display: 'flex', // Располагаем элементы в строку
	alignItems: 'center', // Выравниваем элементы по центру вертикально
	justifyContent: 'space-between', // Распределяем элементы с максимальным пространством
	padding: '10px 0', // Отступы сверху и снизу

	'@media (max-width: 768px)': {
		// На мобильных устройствах
		flexDirection: 'column', // Переводим элементы в колонку
		alignItems: 'flex-start', // Выравниваем элементы по левому краю
		gap: '10px', // Отступы между элементами
	},
}));

// Компонент для отображения списка товаров
export const Products = styled.div(() => ({
	display: 'flex', // Располагаем товары в строку
	justifyContent: 'center', // Выравниваем товары по центру
	flexWrap: 'wrap', // Разрешаем товарам оборачиваться на новые строки
	gap: '20px', // Промежутки между товарами

	'@media (max-width: 768px)': {
		// На мобильных экранах
		gap: '10px', // Уменьшаем промежутки между товарами
	},
}));

// Компонент для боковой панели
export const Sidebar = styled.div(() => ({
	display: 'flex', // Располагаем элементы в колонку
	flexDirection: 'column',
	justifyContent: 'space-between', // Пространство между элементами
	width: '25%', // Ширина боковой панели 25% от родительского контейнера
	maxWidth: '300px', // Максимальная ширина боковой панели

	'@media (max-width: 768px)': {
		// На мобильных устройствах
		width: '100%', // Растягиваем на весь экран
		marginTop: '20px', // Отступ сверху
	},
}));

// Компонент для поиска
export const Search = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column', // Располагаем элементы в колонку
	marginBottom: '20px', // Отступ снизу
}));

// Компонент для фильтра по цене
export const PriceRange = styled.div(() => ({
	width: '100%', // Делаем компонент адаптивным
	marginTop: 20, // Отступ сверху
}));

// Компонент для фильтра по категориям
export const CategoryFilter = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column', // Элементы располагать в колонку

	'& a': {
		textDecoration: 'none', // Убираем подчеркивание у ссылок
		marginTop: 20, // Отступ сверху
		color: black[100], // Цвет текста
		borderBottom: '3px solid #e0e0e6', // Нижняя граница у ссылок
		paddingBottom: 7, // Отступ снизу
		fontSize: '14px', // Размер шрифта

		'@media (max-width: 768px)': {
			// Для мобильных устройств
			fontSize: '12px', // Уменьшаем размер шрифта
		},
	},
}));
