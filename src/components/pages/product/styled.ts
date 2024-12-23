import styled from '@emotion/styled'; // Импортируем styled-components для создания стилизованных компонентов
import theme from '@styles/theme'; // Импортируем объект с темой для использования цветов и других настроек

const { black, blue, red } = theme.colors; // Извлекаем цвета из объекта темы для использования в компонентах

// Основной контейнер для страницы с продуктом
export const Wrapper = styled.div(() => ({
	display: 'flex', // Выравнивание элементов с помощью flexbox
	marginTop: 90, // Отступ сверху
	justifyContent: 'center', // Центрирование по горизонтали

	// Адаптивные стили для экрана шириной до 768px
	'@media (max-width: 768px)': {
		flexWrap: 'wrap', // Если экран маленький, элементы будут оборачиваться
	},

	// Адаптивные стили для экрана шириной до 600px
	'@media (max-width: 600px)': {
		marginTop: 50, // Уменьшаем верхний отступ
	},
}));

// Стилизованный контейнер для информации о товаре
export const Product = styled.div(() => ({
	borderLeft: '5px solid #e0e0e6', // Левый бордер с серым цветом
	padding: '0px 0px 20px 20px', // Отступы внутри контейнера

	// Адаптивные стили для экрана шириной до 600px
	'@media (max-width: 600px)': {
		marginTop: 40, // Увеличиваем верхний отступ для маленьких экранов
	},
}));

// Название товара
export const ProductName = styled.h2(() => ({
	color: black[100], // Цвет текста - черный (из темы)
}));

// Контейнер для изображения товара
export const AlbumImage = styled.div(() => ({
	position: 'relative', // Устанавливаем относительное позиционирование для наложения иконок
	marginRight: 20, // Отступ справа
	paddingRight: 80, // Отступ справа для обеспечения места для иконок

	// Адаптивные стили для экрана шириной до 768px
	'@media (max-width: 768px)': {
		marginRight: 10, // Уменьшаем правый отступ для маленьких экранов
		paddingRight: 0, // Убираем отступ справа
	},
}));

// Контейнер для иконок товара (например, "избранное" или "поделиться")
export const IconProduct = styled.div(() => ({
	position: 'absolute', // Абсолютное позиционирование иконок в правом верхнем углу
	display: 'flex', // Flexbox для выравнивания иконок по вертикали
	flexDirection: 'column', // Выравнивание иконок по вертикали
	right: 0, // Прикрепляем к правому краю
	filter: 'invert(0%) sepia(4%) saturate(2%) hue-rotate(270deg) brightness(60%) contrast(100%)', // Применяем эффект для иконок
}));

// Галерея изображений товара (миниатюры)
export const ImagesProduct = styled.div(() => ({
	display: 'flex', // Flexbox для выравнивания миниатюр по горизонтали
	justifyContent: 'center', // Центрируем изображения
}));

// Контейнер для иконки "поделиться"
export const Share = styled.div(() => ({
	marginTop: 15, // Отступ сверху для иконки "поделиться"
}));

// Описание товара
export const Description = styled.p(() => ({
	maxWidth: 530, // Ограничиваем максимальную ширину описания
	color: black[100], // Цвет текста - черный (из темы)
	marginTop: 25, // Отступ сверху
}));

// Контейнер для цены товара
export const ProductPrice = styled.div(() => ({
	marginTop: 100, // Отступ сверху для блока с ценой
	fontSize: 18, // Размер шрифта
}));

// Компонент для отображения текста "Цена"
export const Price = styled.span(() => ({
	color: blue[500], // Цвет текста - синий (из темы)
	marginRight: 10, // Отступ справа
}));

// Компонент для отображения суммы цены
export const Amount = styled.span(() => ({
	color: red[400], // Цвет текста - красный (из темы)
}));

// Контейнер для кнопки "Купить"
export const ButtonBuy = styled.div(() => ({
	marginTop: 20, // Отступ сверху для кнопки

	// Вложенные стили для кнопки
	'& button': {
		maxWidth: 335, // Максимальная ширина кнопки
		width: '100%', // Ширина кнопки 100% от родительского контейнера
	},
}));
