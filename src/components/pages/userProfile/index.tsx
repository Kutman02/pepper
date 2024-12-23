import Image from 'next/image'; // Импортируем компонент Image из Next.js для работы с изображениями
import { useRouter } from 'next/router'; // Хук для работы с маршрутизацией в Next.js
import { useDispatch, useSelector } from 'react-redux'; // Хуки для работы с Redux (для отправки действий и получения данных из состояния)
import edit from 'public/icons/edit.png'; // Импортируем иконку редактирования
import profile from 'public/images/profile.png'; // Импортируем изображение профиля
import cart from 'public/icons/cart.png'; // Импортируем иконку корзины
import exit from 'public/icons/exit.png'; // Импортируем иконку выхода
import { routes } from '@src/constants/routes'; // Импортируем маршруты приложения
import { updateGlobalSlice } from '../../../store/globalSlice'; // Импортируем действие для обновления глобального состояния
import OrderedProducts from './orderedProducts'; // Компонент для отображения заказов пользователя
import { useTranslation } from 'react-i18next'; // Хук для работы с многоязычностью

// Импортируем стилизованные компоненты
import {
	Account,
	AccountContent,
	ActiveFever,
	CartProfile,
	Exit,
	ExitText,
	Fever,
	OrderText,
	Orders,
	User,
	UserInformation,
	Wrapper,
} from './styled';

// Основной компонент профиля пользователя
const UserProfile = () => {
	const { t } = useTranslation(); // Получаем функцию для перевода текста
	const email = useSelector((state: any) => state.globalSlice.data.email); // Получаем email из глобального состояния
	const dispatch = useDispatch(); // Получаем функцию для отправки действий в Redux
	const router = useRouter(); // Получаем объект маршрутизатора Next.js

	// Функция для выхода из системы
	const handleLogOut = () => {
		localStorage.clear(); // Очищаем localStorage
		dispatch(updateGlobalSlice({ email: null, password: null })); // Очищаем данные пользователя в глобальном состоянии
		router.push(routes.home); // Перенаправляем пользователя на главную страницу
	};

	return (
		<Wrapper>
			<CartProfile>
				{' '}
				{/* Контейнер для информации о пользователе и действий */}
				<Account>
					{' '}
					{/* Контейнер для данных аккаунта */}
					<AccountContent>
						{' '}
						{/* Контейнер для содержимого аккаунта */}
						<Image src={profile} alt='account' /> {/* Изображение профиля пользователя */}
						<UserInformation>
							<User>{t('userProfile.user')}</User> {/* Заголовок с переводом для слова "Пользователь" */}
							<span>{email}</span> {/* Отображаем email пользователя */}
						</UserInformation>
					</AccountContent>
					<Image src={edit} alt='edit' /> {/* Картинка редактирования аккаунта */}
				</Account>
				<Fever>
					{' '}
					{/* Контейнер для заказов и выхода */}
					<ActiveFever></ActiveFever> {/* Стилизация активного состояния */}
					<Orders>
						<Image src={cart} alt='cart' width={20} height={20} /> {/* Иконка корзины */}
						<OrderText>{t('userProfile.orders')}</OrderText> {/* Текст с переводом "Заказы" */}
					</Orders>
				</Fever>
				<Fever>
					<Exit onClick={handleLogOut}>
						{' '}
						{/* Кнопка выхода */}
						<Image src={exit} alt='exit' width={20} height={20} /> {/* Иконка выхода */}
						<ExitText>{t('userProfile.exit')}</ExitText> {/* Текст кнопки с переводом "Выйти" */}
					</Exit>
				</Fever>
			</CartProfile>
			<OrderedProducts /> {/* Компонент для отображения заказов пользователя */}
		</Wrapper>
	);
};

export default UserProfile; // Экспортируем компонент для использования в других частях приложения
