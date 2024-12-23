import styled from '@emotion/styled';
import theme from '@styles/theme'; // Импортируем объект с темой для использования цветов и других параметров

const { black } = theme.colors; // Извлекаем черный цвет из темы

// Стили для контейнера хедера
export const HeaderContent = styled.header(() => ({
	width: '100%', // Хедер растягивается на всю ширину
	height: '80px', // Высота хедера
	background: 'white', // Белый фон
	boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)', // Тень для хедера
	position: 'fixed', // Хедер фиксирован в верхней части страницы
	zIndex: 99, // Устанавливаем высокий z-index, чтобы хедер всегда был поверх других элементов
}));

// Стили для обертки внутри хедера
export const HeaderWrapper = styled.div(() => ({
	...theme.wrapper, // Применяем обертку из темы (например, для центрирования содержимого)
	height: '100%', // Высота обертки равна 100% от высоты хедера
	display: 'flex', // Используем flexbox для распределения элементов
	alignItems: 'center', // Центрируем элементы по вертикали
	justifyContent: 'space-between', // Разделяем элементы на максимальное расстояние
	position: 'relative', // Позиционируем для правильного отображения кнопки меню
}));

// Стили для списка категорий
export const ListCategories = styled.div(() => ({
	display: 'flex', // Используем flexbox для размещения категорий в ряд
	justifyContent: 'center', // Центрируем категории по горизонтали
	fontSize: 20, // Устанавливаем размер шрифта
	padding: '0 10px', // Добавляем отступы по бокам
	overflow: 'hidden', // Прячем переполненные элементы

	'& a': {
		whiteSpace: 'pre', // Предотвращаем перенос строк в ссылках
		textDecoration: 'none', // Убираем подчеркивание из ссылок
		color: black[100], // Устанавливаем цвет текста для ссылок
	},

	// Мобильная адаптация - скрываем категории на экранах с шириной меньше 600px
	'@media (max-width: 600px)': {
		display: 'none',
	},
}));

// Стили для мобильного меню
export const MobileMenu = styled.div(() => ({
	position: 'absolute', // Абсолютное позиционирование для мобильного меню
	top: '80px', // Меню появляется сразу под хедером
	left: 0, // Меню растягивается на всю ширину экрана
	width: '100%', // Ширина на 100%
	background: 'white', // Белый фон для меню
	boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)', // Тень для меню
	padding: '10px 0', // Отступы внутри меню
	display: 'flex', // Используем flexbox для вертикального расположения
	flexDirection: 'column', // Элементы меню располагаются столбцом

	'& a': {
		padding: '10px 20px', // Отступы внутри ссылок
		textDecoration: 'none', // Убираем подчеркивание у ссылок
		color: black[100], // Цвет текста
		borderBottom: '1px solid rgb(172, 86, 86)', // Добавляем границу между элементами меню
	},
}));

// Стили для кнопки меню на мобильных устройствах
export const MenuButton = styled.button(() => ({
	background: 'none', // Без фона
	border: 'none', // Без границы
	fontSize: '30px', // Размер шрифта для иконки
	cursor: 'pointer', // Указатель мыши при наведении
	display: 'none', // Скрыто на экранах больше 600px
	// Для мобильных устройств - отображаем кнопку
	'@media (max-width: 600px)': {
		display: 'block', // Показываем кнопку
	},
}));

// Стили для категорий в списке
export const Category = styled.span(() => ({
	cursor: 'pointer', // Указатель мыши при наведении
	marginRight: 40, // Отступ между категориями
}));

// Стили для переключателя языка
export const LanguageSwitcher = styled.div(() => ({
	display: 'flex', // Используем flexbox для размещения кнопок переключателя
	gap: '0px', // Без промежутков между кнопками
	marginLeft: 'auto', // Перемещаем переключатель на правую сторону

	// Стили для кнопок переключателя языка
	'& button': {
		margin: '15px', // Отступы для кнопок
		background: 'none', // Без фона
		border: '1px solid #ccc', // Светлая граница
		padding: '5px 10px', // Отступы внутри кнопок
		cursor: 'pointer', // Указатель мыши при наведении
		borderRadius: '41px', // Округлые углы
		fontSize: '14px', // Размер шрифта для кнопок
		transition: 'all 0.3s', // Плавный переход для всех изменений

		// Эффект наведения на кнопки
		'&:hover': {
			background: '#f0f0f0', // Изменение фона при наведении
		},
	},

	// Для мобильных устройств - убираем отступ слева
	'@media (max-width: 600px)': {
		marginLeft: 0,
	},
}));
