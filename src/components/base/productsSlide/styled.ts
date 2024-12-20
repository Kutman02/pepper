import styled from '@emotion/styled';
import { green } from '@mui/material/colors';
import theme from '@styles/theme';

const { black, red, blue } = theme.colors;

// Стилизованный компонент для основного контейнера секции продуктов
export const Products = styled.div(() => ({
	'@media (max-width: 600px)': {
		overflow: 'scroll', // Включает горизонтальную прокрутку на меньших экранах
		justifyContent: 'flex-start', // Выравнивает контент по началу на маленьких экранах
	},
	display: 'flex', // Делает контейнер flex-контейнером
	justifyContent: 'center', // Центрирует контент по горизонтали
}));

// Стилизованный компонент для контейнера отдельного продукта
export const Product = styled.div(() => ({
	display: 'flex', // Указывает, что контейнер использует flexbox
	flexDirection: 'column', // Располагает дочерние элементы в колонку
	alignItems: 'center', // Центрирует дочерние элементы по горизонтали
	'& a': {
		display: 'flex', // Делает ссылку flex-контейнером
		flexDirection: 'column', // Располагает дочерние элементы в колонку
		alignItems: 'center', // Центрирует дочерние элементы по горизонтали
		textDecoration: 'none', // Убирает подчеркивание у ссылок
	},
}));

// Стилизованный компонент для заголовка секции продуктов
export const Title = styled.div(() => ({
	display: 'flex', // Делает контейнер flex-контейнером
	justifyContent: 'center', // Центрирует заголовок по горизонтали
	marginBottom: '75px', // Добавляет отступ снизу
	color: blue[500], // Применяет синий цвет из темы
	fontSize: 18, // Устанавливает размер шрифта
	fontWeight: 'bold', // Делает текст жирным
}));

// Стилизованный компонент для контейнера с контентом
export const Content = styled.div(() => ({
	margin: '60px 0px 80px 0px', // Добавляет отступы сверху и снизу
}));

// Стилизованный компонент для заголовка продукта
export const ProductTitle = styled.span(() => ({
	color: black[100], // Применяет черный цвет из темы
	fontSize: 18, // Устанавливает размер шрифта
}));

// Стилизованный компонент для цены продукта
export const ProductPrice = styled.span(() => ({
	margin: '10px 0px 15px 0px', // Добавляет вертикальные отступы
	color: red[400], // Применяет красный цвет из темы
	fontSize: 18, // Устанавливает размер шрифта
	'&:hover': {
		backgroundColor: green[700], // Изменяет цвет кнопки при наведении
	},
}));
