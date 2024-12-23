// Импортируем необходимые модули
import styled from '@emotion/styled'; // Для стилизованных компонентов
import theme from '@styles/theme'; // Импортируем тему с цветами

const { red, black, blue } = theme.colors; // Деструктурируем цвета из темы

// Стилизованный компонент для обертки каждого товара в корзине
export const Wrapper = styled.div(() => ({
	display: 'flex', // Используем flexbox для распределения элементов
	border: '3px solid #e0e0e6', // Граница с цветом #e0e0e6
	borderRadius: 7, // Скругление углов
	justifyContent: 'space-between', // Размещение элементов с промежутками между ними
	padding: 9, // Отступы внутри компонента
	marginTop: 20, // Отступ сверху
	width: 520, // Ширина компонента

	// Стили для изображения внутри Wrapper
	'& img': {
		cursor: 'pointer', // Устанавливаем указатель мыши как "pointer", когда наводим на изображение
	},

	// Адаптивный стиль для экранов с шириной менее 600px
	'@media (max-width: 600px)': {
		width: '100%', // Ширина компонента будет 100% на маленьких экранах
	},
}));

// Стилизованный компонент для контейнера товара
export const OrderedProduct = styled.div(() => ({
	display: 'flex', // Используем flexbox для размещения элементов
	alignItems: 'center', // Выравнивание элементов по вертикали
}));

// Стилизованный компонент для отображения названия товара
export const ProductName = styled.span(() => ({
	fontSize: 20, // Размер шрифта
	color: black[100], // Цвет текста из темы
}));

// Стилизованный компонент для контейнера деталей товара
export const OrderedProductDetails = styled.div(() => ({
	display: 'flex', // Используем flexbox для размещения элементов
	flexDirection: 'column', // Располагаем элементы по вертикали
}));

// Стилизованный компонент для блока с ценой товара
export const PriceProduct = styled.div(() => ({
	display: 'flex', // Используем flexbox
	marginTop: 10, // Отступ сверху
}));

// Стилизованный компонент для текста "Итого"
export const Total = styled.span(() => ({
	fontSize: 18, // Размер шрифта
	marginRight: 8, // Отступ справа
	color: blue[500], // Цвет текста из темы
}));

// Стилизованный компонент для отображения цены товара
export const Price = styled.span(() => ({
	fontSize: 18, // Размер шрифта
	color: red[400], // Цвет текста из темы
}));

// Стилизованный компонент для счетчика количества товара
export const ProductCounter = styled.div(() => ({
	width: 100, // Ширина контейнера
	display: 'flex', // Используем flexbox
	justifyContent: 'center', // Центрируем элементы по горизонтали
	alignItems: 'center', // Центрируем элементы по вертикали
	border: '3px solid #e0e0e6', // Граница контейнера
	borderRadius: 7, // Скругление углов
	marginTop: 30, // Отступ сверху
}));

// Стилизованный компонент для отображения количества товара
export const CounterNumber = styled.span(() => ({
	color: red[400], // Цвет текста из темы
}));
