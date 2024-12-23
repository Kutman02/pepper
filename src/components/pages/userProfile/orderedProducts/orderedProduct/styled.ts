import styled from '@emotion/styled'; // Импортируем библиотеку для стилизации компонентов
import theme from '@styles/theme'; // Импортируем тему для цветов

// Извлекаем цвета из темы
const { black, blue, red } = theme.colors;

// Основной контейнер для обертки каждого продукта
export const Wrapper = styled.div(() => ({
	display: 'flex', // Используем flexbox для выравнивания элементов
	alignItems: 'center', // Выравнивание по вертикали
}));

// Контейнер для деталей продукта (название, цена и т. д.)
export const OrderedProductDetails = styled.div(() => ({
	display: 'flex', // Выравнивание элементов по горизонтали
	flexDirection: 'column', // Расположение элементов в колонку (вертикально)
}));

// Название продукта
export const OrderedProductName = styled.span(() => ({
	fontSize: 20, // Размер шрифта 20px
	color: black[100], // Цвет текста (черный, с оттенком)
}));

// Контейнер для отображения цены и общего количества
export const PriceProduct = styled.div(() => ({
	marginTop: 20, // Отступ сверху между блоками
}));

// Текст "Total" для обозначения общей стоимости
export const Total = styled.span(() => ({
	fontSize: 18, // Размер шрифта 18px
	marginRight: 8, // Отступ справа от текста "Total"
	color: blue[500], // Цвет текста с оттенком синего
}));

// Цена продукта или общая стоимость
export const Price = styled.span(() => ({
	fontSize: 18, // Размер шрифта 18px
	color: red[400], // Цвет текста с оттенком красного для выделения
}));
