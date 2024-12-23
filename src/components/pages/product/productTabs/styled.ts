import styled from '@emotion/styled'; // Импортируем функцию styled из библиотеки Emotion для стилизации компонентов
import theme from '@styles/theme'; // Импортируем тему для использования цветов и других стилей

// Извлекаем красный цвет из темы
const { red } = theme.colors;

// Создаем компонент Wrapper с помощью styled.div
export const Wrapper = styled.div(() => ({
	marginTop: 180, // Отступ сверху для компонента
}));

// Создаем компонент Tabs с помощью styled.div
export const Tabs = styled.div(() => ({
	display: 'flex', // Используем flexbox для выравнивания элементов в строку
	justifyContent: 'flex-start', // Выравнивание по левому краю
}));

// Создаем компонент Tab с помощью styled.span
export const Tab = styled.span(() => ({
	fontWeight: 'bold', // Устанавливаем жирный шрифт
	fontSize: 18, // Устанавливаем размер шрифта
	cursor: 'pointer', // Устанавливаем курсор в виде указателя для интерактивности
	color: red[400], // Устанавливаем цвет текста, используя красный из темы
}));

// Создаем компонент DescriptionTabs с помощью styled.div
export const DescriptionTabs = styled.div(() => ({
	'@media (max-width: 600px)': {
		// Медиа-запрос для экранов шириной до 600px
		width: '100%', // Ширина будет 100% на маленьких экранах
	},
	border: '3px solid #e0e0e6', // Устанавливаем границу для компонента
	borderRadius: 7, // Устанавливаем радиус скругления углов
	height: 500, // Устанавливаем высоту компонента
	marginTop: 20, // Отступ сверху
	padding: 15, // Внутренние отступы
	overflow: 'scroll', // Добавляем прокрутку при необходимости
}));
