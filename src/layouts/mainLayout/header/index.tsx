import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
import {
	HeaderContent,
	HeaderWrapper,
	Category,
	ListCategories,
	MenuButton,
	MobileMenu,
	LanguageSwitcher,
} from './styled';
import { routes } from '@src/constants/routes';
import { updateGlobalSlice } from '@src/store/globalSlice';
import { useTranslation } from 'react-i18next';

const BoxLogin = dynamic(() => import('./boxLogin'), { ssr: false });

const listCategory = [
	{ title: 'category.masalas', link: 'masalas' },
	{ title: 'category.chatMasalas', link: 'chat-masalas' },
	{ title: 'category.pepperPowder', link: 'pepper-Powder' },
	{ title: 'category.cookingEssentials', link: 'cooking-essentials' },
	{ title: 'category.refundOil', link: 'refund-oil' },
];

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для меню
	const { t, i18n } = useTranslation();
	const dispatch = useDispatch();

	useEffect(() => {
		const email = localStorage.getItem('email');
		const password = localStorage.getItem('password');

		if (email && password) {
			const cartList = localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList') || '') : '';
			dispatch(updateGlobalSlice({ cartTotal: cartList?.length, email: email, password: password }));
		}
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	// Функция для смены языка
	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang);
	};

	return (
		<HeaderContent>
			<HeaderWrapper>
				{/* Логотип */}
				{/* <div>
					<Link href='/'>
						<Image src={logo} alt='logo' />
						<span>Logo</span>
					</Link>
				</div> */}

				{/* Кнопка меню для мобильных устройств */}
				<MenuButton onClick={toggleMenu}>{isMenuOpen ? '✖' : '☰'}</MenuButton>

				{/* Категории */}
				<ListCategories>
					{listCategory.map((item, index) => (
						<Link href={routes.category(item.link)} key={index}>
							<Category>{t(item.title)}</Category>
						</Link>
					))}
				</ListCategories>

				{/* Мобильное меню */}
				{isMenuOpen && (
					<MobileMenu>
						{listCategory.map((item, index) => (
							<Link href={routes.category(item.link)} key={index}>
								<Category>{t(item.title)}</Category>
							</Link>
						))}
					</MobileMenu>
				)}

				{/* Переключатель языка */}
				<LanguageSwitcher>
					<button onClick={() => changeLanguage('en')}>EN</button>
					<button onClick={() => changeLanguage('ru')}>RU</button>
				</LanguageSwitcher>

				{/* Блок авторизации */}
				<BoxLogin />
			</HeaderWrapper>
		</HeaderContent>
	);
};

export default Header;
