// Импортируем необходимые библиотеки и компоненты
import React, { useState, useEffect } from 'react'; // Для работы с состоянием и эффектами
import Link from 'next/link'; // Для создания ссылок с возможностью навигации
import { useDispatch } from 'react-redux'; // Для работы с Redux и отправки действий
import dynamic from 'next/dynamic'; // Для динамической загрузки компонентов
import {
	HeaderContent,
	HeaderWrapper,
	Category,
	ListCategories,
	MenuButton,
	MobileMenu,
	LanguageSwitcher,
} from './styled'; // Стилизованные компоненты для оформления
import { routes } from '@src/constants/routes'; // Константы маршрутов для навигации
import { updateGlobalSlice } from '@src/store/globalSlice'; // Действие для обновления состояния в Redux
import { useTranslation } from 'react-i18next'; // Для локализации (переводов)

// Динамически загружаем компонент BoxLogin, чтобы он не загружался на сервере
const BoxLogin = dynamic(() => import('./boxLogin'), { ssr: false });

// Список категорий товаров
const listCategory = [
	{ title: 'category.masalas', link: 'masalas' },
	{ title: 'category.chatMasalas', link: 'chat-masalas' },
	{ title: 'category.pepperPowder', link: 'pepper-Powder' },
	{ title: 'category.cookingEssentials', link: 'cooking-essentials' },
	{ title: 'category.refundOil', link: 'refund-oil' },
];

const Header = () => {
	// Состояние для управления открытием/закрытием мобильного меню
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// Состояние для строки поиска (пока не используется, но можно добавить функциональность)
	const [searchTerm] = useState('');
	// Локализация
	const { t, i18n } = useTranslation();
	// Для отправки действий в Redux
	const dispatch = useDispatch();

	// Используем useEffect, чтобы при первом рендере загрузить данные из localStorage
	useEffect(() => {
		const email = localStorage.getItem('email');
		const password = localStorage.getItem('password');

		if (email && password) {
			// Загружаем cartList из localStorage, если оно есть, и обновляем состояние в Redux
			const cartList = localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList') || '') : '';
			dispatch(updateGlobalSlice({ cartTotal: cartList?.length, email: email, password: password }));
		}
	}, []); // Пустой массив зависимостей означает, что эффект выполнится только при монтировании компонента

	// Функция для переключения состояния мобильного меню
	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	// Функция для смены языка
	const changeLanguage = (lang: string) => {
		i18n.changeLanguage(lang);
	};

	// Фильтрация категорий по строке поиска
	const filteredCategories = listCategory.filter(
		(item) => t(item.title).toLowerCase().includes(searchTerm.toLowerCase()), // Применяем фильтрацию с учетом перевода
	);

	return (
		<HeaderContent>
			<HeaderWrapper>
				{/* Кнопка для открытия/закрытия мобильного меню */}
				<MenuButton onClick={toggleMenu}>{isMenuOpen ? '✖' : '☰'}</MenuButton>

				{/* Список категорий */}
				<ListCategories>
					{filteredCategories.map((item, index) => (
						<Link href={routes.category(item.link)} key={index}>
							<Category>{t(item.title)}</Category>
						</Link>
					))}
				</ListCategories>

				{/* Мобильное меню */}
				{isMenuOpen && (
					<MobileMenu>
						{/* Переключатель языка */}
						<LanguageSwitcher>
							<button onClick={() => changeLanguage('en')}>EN</button>
							<button onClick={() => changeLanguage('ru')}>RU</button>
						</LanguageSwitcher>
						{/* Отображаем отфильтрованные категории */}
						{filteredCategories.map((item, index) => (
							<Link href={routes.category(item.link)} key={index}>
								<Category>{t(item.title)}</Category>
							</Link>
						))}
					</MobileMenu>
				)}

				{/* Блок для отображения данных о пользователе (например, входа/регистрации) */}
				<BoxLogin />
			</HeaderWrapper>
		</HeaderContent>
	);
};

export default Header;
