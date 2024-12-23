// Импортируем необходимые библиотеки и компоненты
import styled from '@emotion/styled';
import { green } from '@mui/material/colors'; // Цвет из библиотеки MUI
import theme from '@styles/theme'; // Импортируем тему

// Деструктурируем цвета из темы
const { black, red, blue } = theme.colors;

// Стилизованный компонент для основного контейнера секции продуктов
export const Products = styled.div(() => ({
	'@media (max-width: 600px)': {
		overflow: 'scroll', // Включаем горизонтальную прокрутку на маленьких экранах
		justifyContent: 'flex-start', // Выравниваем элементы по началу на маленьких экранах
	},
	display: 'flex', // Устанавливаем контейнер как flex
	justifyContent: 'center', // Центрируем контент по горизонтали
}));

// Стилизованный компонент для контейнера отдельного продукта
export const Product = styled.div(() => ({
	display: 'flex', // Устанавливаем flex-контейнер
	flexDirection: 'column', // Располагаем дочерние элементы по вертикали
	alignItems: 'center', // Центрируем дочерние элементы по горизонтали
	'& a': {
		display: 'flex', // Ссылку также делаем flex-контейнером
		flexDirection: 'column', // Элементы ссылки располагаются в колонку
		alignItems: 'center', // Центрируем элементы ссылки
		textDecoration: 'none', // Убираем подчеркивание у ссылки
	},
}));

// Стилизованный компонент для заголовка секции продуктов
export const Title = styled.div(() => ({
	display: 'flex', // Устанавливаем flex для заголовка
	justifyContent: 'center', // Центрируем заголовок по горизонтали
	marginBottom: '75px', // Отступ снизу
	color: blue[500], // Используем синий цвет из темы
	fontSize: 18, // Размер шрифта
	fontWeight: 'bold', // Жирный шрифт
}));

// Стилизованный компонент для контейнера с контентом
export const Content = styled.div(() => ({
	margin: '60px 0px 80px 0px', // Отступы сверху и снизу
}));

// Стилизованный компонент для заголовка продукта
export const ProductTitle = styled.span(() => ({
	color: black[100], // Черный цвет текста из темы
	fontSize: 18, // Размер шрифта
}));

// Стилизованный компонент для цены продукта
export const ProductPrice = styled.span(() => ({
	margin: '10px 0px 15px 0px', // Отступы сверху и снизу
	color: red[400], // Красный цвет для цены
	fontSize: 18, // Размер шрифта
	'&:hover': {
		backgroundColor: green[700], // Изменение фона на зеленый при наведении
	},
}));
