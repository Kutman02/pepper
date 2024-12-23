import styled from '@emotion/styled'; // Импортируем библиотеку для стилизации компонентов

// Обертка для всей страницы входа
export const LoginWrapper = styled.div(() => ({
	display: 'flex', // Используем flexbox для центрирования содержимого
	alignItems: 'center', // Вертикальное выравнивание по центру
	justifyContent: 'center', // Горизонтальное выравнивание по центру
	minHeight: '100vh', // Занимаем всю высоту экрана
}));

// Стили для формы (для ввода данных)
export const Form = styled.form(() => ({
	display: 'flex', // Используем flexbox
	flexDirection: 'column', // Элементы в форме будут располагаться в колонку
	alignItems: 'flex-start', // Элементы формы выравниваются по левому краю
}));

// Контейнер для регистрации (с внешним видом, отступами и размерами)
export const Register = styled.div(() => ({
	'@media (max-width: 600px)': {
		border: 'none', // Убираем рамку на маленьких экранах
		padding: '0', // Убираем отступы на маленьких экранах
	},
	border: '3px solid #e0e0e6', // Добавляем рамку для контента
	height: 440, // Высота контейнера
	borderRadius: 7, // Закругленные углы
	padding: 30, // Внутренние отступы
}));

// Стили для логотипа (центрируем логотип)
export const Logo = styled.div(() => ({
	display: 'flex', // Используем flexbox
	justifyContent: 'center', // Центрируем содержимое
}));

// Стили для описания, которое появляется выше формы
export const LoginDescription = styled.div(() => ({
	fontSize: 18, // Размер шрифта
	marginTop: 35, // Отступ сверху
	marginBottom: 35, // Отступ снизу
}));

// Стили для поля пароля (для отступа между полями)
export const Password = styled.div(() => ({
	marginTop: 25, // Отступ сверху
}));

// Контейнер для кнопки отправки формы
export const FormButton = styled.div(() => ({
	marginTop: 25, // Отступ сверху
}));
