import styled from '@emotion/styled';
import theme from '@styles/theme';

const { black } = theme.colors;

export const Wrapper = styled.div(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	marginTop: 60,
	alignItems: 'flex-start',
	flexWrap: 'wrap', // Для адаптации на маленьких экранах

	'@media (max-width: 768px)': {
		flexDirection: 'column', // Перестраиваем в колонку
		alignItems: 'center',
		marginTop: 30,
	},
}));

export const ProductContent = styled.div(() => ({
	width: '70%', // Используем процент вместо фиксированного размера
	maxWidth: '1000px',

	'@media (max-width: 768px)': {
		width: '100%', // На маленьких экранах растягиваем на 100%
	},
}));

export const FilterProducts = styled.div(() => ({
	width: '100%',
	maxWidth: '1000px',
	borderBottom: '3px solid #e0e0e6',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '10px 0',

	'@media (max-width: 768px)': {
		flexDirection: 'column', // В столбец на мобильных устройствах
		alignItems: 'flex-start',
		gap: '10px',
	},
}));

export const Products = styled.div(() => ({
	display: 'flex',
	justifyContent: 'center',
	flexWrap: 'wrap',
	gap: '20px', // Добавляем промежутки между товарами

	'@media (max-width: 768px)': {
		gap: '10px', // Меньше промежутки на маленьких экранах
	},
}));

export const Sidebar = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	width: '25%', // Задаем ширину боковой панели
	maxWidth: '300px',

	'@media (max-width: 768px)': {
		width: '100%', // Растягиваем на весь экран
		marginTop: '20px',
	},
}));

export const Search = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
	marginBottom: '20px', // Добавляем отступы между элементами
}));

export const PriceRange = styled.div(() => ({
	width: '100%', // Делаем адаптивным
	marginTop: 20,
}));

export const CategoryFilter = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',

	'& a': {
		textDecoration: 'none',
		marginTop: 20,
		color: black[100],
		borderBottom: '3px solid #e0e0e6',
		paddingBottom: 7,
		fontSize: '14px',

		'@media (max-width: 768px)': {
			fontSize: '12px', // Меньше текст на мобильных устройствах
		},
	},
	
}));

