// Импортируем styled из библиотеки @emotion/styled для создания стилизованных компонентов
import styled from '@emotion/styled';

// Создаем компонент ButtonContainer, который представляет собой стилизованную кнопку
export const ButtonContainer = styled.button(({ styles }: any) => ({
	// Задаем ширину кнопки на основе переданного свойства styles.width
	width: styles.width,

	// Задаем высоту кнопки на основе переданного свойства styles.height
	height: styles.height,

	// Устанавливаем радиус скругления углов на основе свойства styles.radius
	borderRadius: styles.radius,

	// Указываем цвет границы кнопки на основе свойства styles.borderColor
	border: styles.borderColor,

	// Определяем цвет текста кнопки на основе свойства styles.color
	color: styles.color,

	// Задаем фоновый цвет кнопки на основе свойства styles.background
	background: styles.background,

	// Указываем состояние "неактивности" кнопки на основе свойства styles.disable
	disable: styles.disable,

	// Устанавливаем размер шрифта кнопки на основе свойства styles.fontSize
	fontSize: styles.fontSize,

	// Определяем стиль курсора, чтобы кнопка выглядела кликабельной
	cursor: 'pointer',

	// Используем шрифт, наследуемый от родителя
	fontFamily: 'inherit',
}));
