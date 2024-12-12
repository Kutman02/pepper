import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
import logo from 'public/images/logo.png';
import { HeaderContent, HeaderWrapper, Category, ListCategories } from './styled';
import { routes } from '@src/constants/routes';
import { useEffect } from 'react';
import { updateGlobalSlice } from '@src/store/globalSlice';
import { useTranslation } from 'react-i18next'; // Добавил импорт useTranslation

const BoxLogin = dynamic(() => import('./boxLogin'), {
	ssr: false,
});

const listCategory = [
	{ title: 'category.masalas', link: 'Masalas' },
	{ title: 'category.chatMasalas', link: 'chat-masalas' },
	{ title: 'category.pepperPowder', link: 'pepper-Powder' },
	{ title: 'category.cookingEssentials', link: 'cooking-essentials' },
	{ title: 'category.refundOil', link: 'refund-oil' },
];

const Header = () => {
	const dispatch = useDispatch();

	// Подключаем перевод
	const { t, i18n } = useTranslation();

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language); // Меняем язык
	};

	useEffect(() => {
		const email = localStorage.getItem('email');
		const password = localStorage.getItem('password');

		if (email && password) {
			const cartList = localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList') || '') : '';

			dispatch(updateGlobalSlice({ cartTotal: cartList?.length, email: email, password: password }));
		}
	}, []);

	return (
		<HeaderContent>
			<HeaderWrapper>
				{/* Логотип */}
				<div>
					<Link href='/'>
						<Image src={logo} alt='logo' />
					</Link>
				</div>
				{/* Переключатель языка */}
				<div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
					<button onClick={() => changeLanguage('en')} style={{ cursor: 'pointer' }}>
						{t('english')}
					</button>
					<button onClick={() => changeLanguage('ru')} style={{ cursor: 'pointer' }}>
						{t('russian')}
					</button>
				</div>
				{/* Категории */}
				<ListCategories>
					{listCategory.map((item, index) => (
						<Link href={routes.category(item.link)} key={index}>
							<Category key={index}>{t(item.title)}</Category>
						</Link>
					))}
				</ListCategories>

				{/* Блок авторизации */}
				<BoxLogin />
			</HeaderWrapper>
		</HeaderContent>
	);
};

export default Header;
