import styled from '@emotion/styled'; // Импортируем функцию styled из библиотеки Emotion для стилизации компонентов
import theme from '@styles/theme'; // Импортируем тему для использования цветов и других стилей

// Извлекаем черный и синий цвета из темы
const { black, blue } = theme.colors;

// Создаем компонент Wrapper с помощью styled.div
export const Wrapper = styled.div(() => ({
	flexWrap: 'wrap', // Делаем элементы оборачивающимися при переполнении
	display: 'flex', // Используем flexbox для выравнивания элементов
	justifyContent: 'center', // Выравнивание элементов по центру
	marginTop: 80, // Отступ сверху
}));

// Создаем компонент ProductsShoppingCart с помощью styled.div
export const ProductsShoppingCart = styled.div(() => ({
	'@media (max-width: 600px)': {
		// Медиа-запрос для экранов шириной до 600px
		marginRight: 0, // Убираем правый отступ
		width: '100%', // Устанавливаем ширину 100% для мобильных устройств
	},
	marginRight: 95, // Правый отступ для больших экранов
}));

// Создаем компонент CartTitle с помощью styled.h2
export const CartTitle = styled.h2(() => ({
	color: blue[500], // Устанавливаем синий цвет для заголовка из темы
}));

// Создаем компонент Form с помощью styled.div
export const Form = styled.div(() => ({
	'@media (max-width: 600px)': {
		// Медиа-запрос для экранов шириной до 600px
		width: '100%', // Ширина формы на маленьких экранах 100%
		padding: 10, // Внутренний отступ для мобильных устройств
	},
	display: 'flex', // Используем flexbox для выравнивания элементов
	flexDirection: 'column', // Размещаем элементы в колонку
	border: '3px solid #e0e0e6', // Устанавливаем границу для формы
	borderRadius: 7, // Радиус скругления углов формы
	width: 350, // Ширина формы на больших экранах
	padding: 20, // Внутренний отступ
}));

// Создаем компонент DescriptionForm с помощью styled.p
export const DescriptionForm = styled.p(() => ({
	fontSize: 18, // Размер шрифта для описания
	color: black[100], // Цвет текста для описания
}));

// Создаем компонент BuyButton с помощью styled.div
export const BuyButton = styled.div(() => ({
	display: 'flex', // Используем flexbox для выравнивания
	justifyContent: 'space-between', // Располагаем элементы с максимальным расстоянием
	marginTop: 35, // Отступ сверху
	alignItems: 'center', // Выравнивание по центру по вертикали
}));

// Создаем компонент FormInput с помощью styled.div
export const FormInput = styled.div(() => ({
	display: 'flex', // Используем flexbox для выравнивания
	flexDirection: 'column', // Размещаем элементы в колонку
	marginTop: 20, // Отступ сверху для каждого поля формы
}));

// Создаем компонент FormInputTitle с помощью styled.span
export const FormInputTitle = styled.span(() => ({
	fontSize: 18, // Размер шрифта для заголовков полей формы
	marginBottom: 10, // Отступ снизу для заголовка
	color: blue[500], // Синий цвет для заголовков полей формы
}));
