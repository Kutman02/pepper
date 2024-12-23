// Импортируем библиотеку @emotion/styled для создания стилизованных компонентов
import styled from '@emotion/styled';

// Создаем стилизованный компонент InputContainer
export const InputContainer = styled.input(({ styles }: any) => ({
	// Устанавливаем ширину поля ввода, используя переданное значение styles.width
	width: styles.width,

	// Устанавливаем высоту поля ввода, используя переданное значение styles.height
	height: styles.height,

	// Задаем радиус скругления углов поля ввода, используя переданное значение styles.radius
	borderRadius: styles.radius,

	// Устанавливаем цвет и стиль границы поля ввода, используя переданное значение styles.borderColor
	border: styles.borderColor,

	// Убираем стандартный контур при фокусе
	outline: 'none',
}));
