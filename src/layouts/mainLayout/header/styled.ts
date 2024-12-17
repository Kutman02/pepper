import styled from '@emotion/styled';
import theme from '@styles/theme';

const { black } = theme.colors;

export const HeaderContent = styled.header(() => ({
	width: '100%',
	height: '80px',
	background: 'white',
	boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
	position: 'fixed',
	zIndex: 99,
}));

export const HeaderWrapper = styled.div(() => ({
	...theme.wrapper,
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
}));

export const ListCategories = styled.div(() => ({
	display: 'flex',
	justifyContent: 'center',
	fontSize: 20,
	padding: '0 10px',
	overflow: 'hidden',

	'& a': {
		whiteSpace: 'pre',
		textDecoration: 'none',
		color: black[100],
	},

	'@media (max-width: 600px)': {
		display: 'none',
	},
}));

export const MobileMenu = styled.div(() => ({
	position: 'absolute',
	top: '80px',
	left: 0,
	width: '100%',
	background: 'white',
	boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
	padding: '10px 0',
	display: 'flex',
	flexDirection: 'column',

	'& a': {
		padding: '10px 20px',
		textDecoration: 'none',
		color: black[100],
		borderBottom: '1px solid #eaeaea',
	},
}));

export const MenuButton = styled.button(() => ({
	background: 'none',
	border: 'none',
	fontSize: '24px',
	cursor: 'pointer',
	display: 'none',
	marginLeft: 'auto',

	'@media (max-width: 600px)': {
		display: 'block',
	},
}));

export const Category = styled.span(() => ({
	cursor: 'pointer',
	marginRight: 40,
}));

export const LanguageSwitcher = styled.div(() => ({
	display: 'flex',
	gap: '10px',
	marginLeft: 'auto',

	'& button': {
		background: 'none',
		border: '1px solid #ccc',
		padding: '5px 10px',
		cursor: 'pointer',
		borderRadius: '4px',
		fontSize: '14px',
		transition: 'all 0.3s',

		'&:hover': {
			background: '#f0f0f0',
		},
	},

	'@media (max-width: 600px)': {
		marginLeft: 0,
	},
}));
