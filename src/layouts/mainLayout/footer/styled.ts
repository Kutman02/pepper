// Импортируем стилизованные компоненты из библиотеки @emotion/styled
import styled from '@emotion/styled';
// Импортируем объект темы с цветами и другими стилями
import theme from '@styles/theme';

// Извлекаем нужные цвета из темы
const { black, blue } = theme.colors;

// Стили для футера, который будет иметь голубой фон, выравнивание элементов по центру и отступ сверху
export const FooterContent = styled.footer(() => ({
	background: 'rgb(117, 200, 255)', // голубой фон
	display: 'flex', // используем flexbox для выравнивания элементов
	alignItems: 'center', // выравнивание по вертикали
	justifyContent: 'space-evenly', // распределение элементов по горизонтали с равными промежутками
	marginTop: '100px', // отступ сверху
}));

// Стили для обертки футера с учетом темы (например, для ширины контейнера)
export const FooterWrapper = styled.div(() => ({
	...theme.wrapper, // применяем стили из темы для обертки
	position: 'relative', // позиционирование относительно родительского элемента
	padding: '14px 20px', // внутренние отступы
}));

// Стили для блока с логотипом, который будет расположен выше футера
export const DivLogo = styled.div(() => ({
	position: 'absolute', // абсолютное позиционирование
	top: '-24px', // смещаем вверх на 24px
}));

// Стили для контейнера с содержимым футера
export const DivContent = styled.div(() => ({
	display: 'flex', // используем flexbox
	justifyContent: 'space-evenly', // распределение элементов по горизонтали с равными промежутками
	alignItems: 'center', // выравнивание элементов по центру

	// Медиа-запрос для экранов с шириной менее 600px
	'@media (max-width: 600px)': {
		flexDirection: 'column', // меняем направление элементов на вертикальное
		alignItems: 'flex-start', // выравнивание по левому краю
	},
}));

// Стили для обертки содержимого, добавляем отступы слева и справа
export const DivContentWrapper = styled.div(() => ({
	margin: '0 10px', // отступы по бокам
}));

// Стили для параграфа в футере, устанавливаем максимальную ширину и цвет текста
export const PContent = styled.p(() => ({
	maxWidth: '340px', // ограничиваем максимальную ширину
	color: black[100], // цвет текста из темы
}));

// Стили для блока с информацией о нас, выравнивание элементов по горизонтали
export const DivContentUs = styled.div(() => ({
	display: 'flex', // используем flexbox
	justifyContent: 'flex-start', // выравнивание по левому краю
	alignItems: 'center', // выравнивание по центру вертикально
	marginTop: 10, // отступ сверху
}));

// Стили для заголовка футера, устанавливаем цвет из темы
export const FooterTitle = styled.h1(() => ({
	color: blue[500], // цвет заголовка из темы
}));

// Неверный компонент, так как для изображений нужно использовать <img> вместо styled.image
export const icon = styled.image(() => ({
	display: 'flex', // используем flexbox
	justifyContent: 'flex-start', // выравнивание по левому краю
	alignItems: 'center', // выравнивание по центру вертикально
}));

// Стили для спана с текстом "о нас", добавляем отступ слева
export const SpanContentUs = styled.span(() => ({
	marginLeft: 10, // отступ слева
	color: black[100], // цвет текста из темы
}));
