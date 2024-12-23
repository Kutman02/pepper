import styled from '@emotion/styled'; // Импортируем styled компонент из библиотеки Emotion для стилизации

// Wrapper — оборачивающий контейнер, который центрирует содержимое и задает отступ сверху
export const Wrapper = styled.div(() => ({
	display: 'flex', // Используем flexbox для компоновки элементов
	justifyContent: 'center', // Выравнивание по центру по горизонтали
	marginTop: 80, // Отступ сверху

	// Медиа-запрос для экранов шириной до 992px (планшеты и маленькие экраны)
	'@media (max-width: 992px)': {
		alignItems: 'center', // Выравнивание по центру по вертикали
		flexDirection: 'column', // Расположение элементов в колонку
	},
}));

// CartProfile — контейнер для информации о пользователе (например, для профиля)
export const CartProfile = styled.div(() => ({
	width: 400, // Ширина блока
	height: 400, // Высота блока
	borderRadius: 7, // Скругление углов
	border: '3px solid #e0e0e6', // Граница блока
	marginRight: 50, // Отступ справа
	padding: 20, // Внутренний отступ

	// Медиа-запрос для экранов до 992px
	'@media (max-width: 992px)': {
		marginRight: '0', // Убираем правый отступ
	},

	// Медиа-запрос для экранов до 600px (мобильные устройства)
	'@media (max-width: 600px)': {
		height: 'auto', // Автоматическая высота на мобильных устройствах
		width: '100%', // Ширина 100% на мобильных устройствах
	},
}));

// Account — блок с данными аккаунта, с разделительной линией снизу
export const Account = styled.div(() => ({
	borderBottom: '3px solid #e0e0e6', // Граница снизу
	display: 'flex', // Используем flexbox для выравнивания элементов
	justifyContent: 'space-between', // Элементы располагаются по краям
	paddingBottom: 20, // Внутренний отступ снизу
	alignItems: 'center', // Выравнивание по центру по вертикали
}));

// AccountContent — контейнер для контента аккаунта (например, фото профиля)
export const AccountContent = styled.div(() => ({
	display: 'flex', // Используем flexbox для размещения элементов
	overflow: 'hidden', // Обрезаем элементы, которые выходят за пределы контейнера
}));

// UserInformation — блок с информацией о пользователе (например, имя и email)
export const UserInformation = styled.div(() => ({
	display: 'flex', // Используем flexbox
	flexDirection: 'column', // Размещаем элементы в колонку
	marginLeft: 15, // Отступ слева
}));

// User — текстовое поле для имени пользователя
export const User = styled.span(() => ({
	fontSize: 18, // Размер шрифта
}));

// Fever — контейнер для активного состояния (например, кнопка заказа)
export const Fever = styled.div(() => ({
	position: 'relative', // Относительное позиционирование для возможности абсолютного позиционирования вложенных элементов
	cursor: 'pointer', // Курсор в виде руки при наведении
	'&:hover': {
		backgroundColor: '#f2f2f2', // Цвет фона при наведении
	},
}));

// ActiveFever — индикатор активного состояния (например, активная кнопка или задание)
export const ActiveFever = styled.div(() => ({
	position: 'absolute', // Абсолютное позиционирование
	borderLeft: '4px solid #fa4564', // Левый бордер с цветом
	height: 55, // Высота индикатора
	borderRadius: '5px 0 0 5px', // Скругленные углы слева
	top: '3px', // Отступ сверху
	left: '-20px', // Отступ слева
}));

// Orders — блок для заказов с иконкой и текстом
export const Orders = styled.div(() => ({
	display: 'flex', // Используем flexbox для выравнивания элементов
	alignItems: 'center', // Выравнивание по центру по вертикали
	paddingTop: 20, // Отступ сверху
	borderBottom: '3px solid #e0e0e6', // Граница снизу
	paddingBottom: 20, // Отступ снизу
}));

// OrderText — текст для отображения информации о заказах
export const OrderText = styled.span(() => ({
	marginLeft: 10, // Отступ слева от иконки
	fontSize: 18, // Размер шрифта
}));

// Exit — контейнер для кнопки выхода
export const Exit = styled.div(() => ({
	display: 'flex', // Используем flexbox
	alignItems: 'center', // Выравнивание по центру по вертикали
	paddingTop: 20, // Отступ сверху
	borderBottom: '3px solid #e0e0e6', // Граница снизу
	paddingBottom: 20, // Отступ снизу
	cursor: 'pointer', // Курсор в виде руки при наведении
}));

// ExitText — текст для кнопки выхода
export const ExitText = styled.div(() => ({
	marginLeft: 10, // Отступ слева от иконки
	fontSize: 18, // Размер шрифта
}));
