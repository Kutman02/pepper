import styled from '@emotion/styled'; // Импортируем библиотеку styled-components для создания стилизованных компонентов
import theme from '@styles/theme'; // Импортируем тему с цветами из проекта

// Извлекаем цвета из темы для использования в стилях
const { black, blue, red } = theme.colors;

// Стили для компонента CartContent, который оборачивает весь контент заказов
export const CartContent = styled.div(() => ({
	minHeight: 600, // Минимальная высота блока 600px
	width: '100%', // Ширина 100% от родительского контейнера
	maxWidth: 700, // Максимальная ширина 700px
	borderRadius: 7, // Радиус скругления углов
	border: '3px solid #e0e0e6', // Граница с цветом
	padding: 20, // Внутренний отступ

	'@media (max-width: 992px)': {
		// Для экранов шириной менее 992px
		marginTop: 30, // Отступ сверху 30px
	},

	'@media (max-width: 600px)': {
		// Для экранов шириной менее 600px
		marginTop: 0, // Убираем отступ сверху
		border: 'none', // Убираем границу
		padding: '20px 0', // Изменяем внутренние отступы
	},
}));

// Стили для компонента Wrapper, который используется для обертывания каждого заказа
export const Wrapper = styled.div(() => ({
	display: 'flex', // Используем flexbox для расположения дочерних элементов
	border: '3px solid #e0e0e6', // Граница заказа
	borderRadius: 7, // Скругление углов
	justifyContent: 'space-between', // Располагаем элементы по краям
	padding: 9, // Внутренний отступ
	marginTop: 20, // Отступ сверху
}));

// Стили для компонента OrderedProductWrapper, который будет оборачивать детали продукта
export const OrderedProductWrapper = styled.div(() => ({
	flexDirection: 'column', // Элементы будут располагаться вертикально
}));

// Стили для компонента OrderedProduct, который представляет собой один продукт в заказе
export const OrderedProduct = styled.div(() => ({
	display: 'flex', // Используем flexbox для выравнивания элементов
	alignItems: 'center', // Выравниваем элементы по центру по вертикали
}));

// Стили для компонента OrderedProductDetails, который отображает подробности о продукте
export const OrderedProductDetails = styled.div(() => ({
	display: 'flex', // Используем flexbox
	flexDirection: 'column', // Элементы будут располагаться по вертикали
}));

// Стили для имени продукта в заказе
export const OrderedProductName = styled.span(() => ({
	fontSize: 20, // Размер шрифта 20px
	color: black[100], // Цвет текста из темы
}));

// Стили для блока с ценой продукта
export const PriceProduct = styled.div(() => ({
	marginTop: 20, // Отступ сверху
}));

// Стили для текста "Total", который будет показывать общую сумму
export const Total = styled.span(() => ({
	fontSize: 18, // Размер шрифта 18px
	marginRight: 8, // Отступ справа 8px
	color: blue[500], // Цвет текста из темы
}));

// Стили для отображения конкретной цены продукта
export const Price = styled.span(() => ({
	fontSize: 18, // Размер шрифта 18px
	color: red[400], // Цвет текста из темы
}));
