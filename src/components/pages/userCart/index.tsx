import { ChangeEvent, useState } from 'react'; // Импортируем хуки для работы с состоянием и событиями
import { useRouter } from 'next/router'; // Хук для работы с маршрутизацией в Next.js
import { useDispatch } from 'react-redux'; // Хук для отправки действий в Redux store
import CartProducts from '@src/components/pages/userCart/cartProducts'; // Компонент для отображения списка товаров в корзине
import { updateGlobalSlice } from '@src/store/globalSlice'; // Действие для обновления глобального состояния
import Input from '@src/components/base/input'; // Компонент для ввода данных
import Button from '@src/components/base/button'; // Компонент кнопки
import { postNewOrder } from '@src/api/order'; // API-запрос для создания нового заказа
import { routes } from '@src/constants/routes'; // Список маршрутов в приложении
import { useTranslation } from 'react-i18next'; // Хук для работы с многоязычностью

// Импортируем стилизованные компоненты
import {
	BuyButton,
	CartTitle,
	DescriptionForm,
	Form,
	FormInput,
	FormInputTitle,
	ProductsShoppingCart,
	Wrapper,
} from './styled';

// Определяем типы пропсов для компонента
type UserCartType = {
	cartList?: any; // Список товаров в корзине
	setCartList?: any; // Функция для обновления списка товаров в корзине
};

// Основной компонент корзины пользователя
const UserCart = ({ cartList, setCartList }: UserCartType) => {
	const { t } = useTranslation(); // Получаем функцию перевода
	const dispatch = useDispatch(); // Получаем функцию для отправки действий в Redux

	// Состояние для значений ввода (страна, штат, почтовый код)
	const [inputValues, setInputValues] = useState({
		country: '', // Страна
		state: '', // Штат
		postalCode: '', // Почтовый код
	});

	const router = useRouter(); // Получаем объект маршрутизатора Next.js

	// Обработчик изменения значений ввода
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target; // Получаем имя и значение поля

		// Обновляем состояние с новыми значениями
		setInputValues((prev) => {
			return {
				...prev, // Сохраняем старые значения
				[name]: value, // Обновляем только измененное поле
			};
		});
	};

	// Обработчик отправки формы
	const handleSubmitForm = async () => {
		// Отправляем запрос на создание нового заказа
		const response = await postNewOrder(inputValues.country, inputValues.state, inputValues.postalCode);

		// Если заказ успешно создан, перенаправляем пользователя в профиль и очищаем корзину
		if (response.status === 201) {
			router.push(routes.profile); // Перенаправляем на страницу профиля
			dispatch(updateGlobalSlice({ cartTotal: null })); // Очищаем данные корзины в глобальном состоянии
		}
	};

	return (
		<>
			{/* Если в корзине есть товары */}
			{cartList.length ? (
				<Wrapper>
					{' '}
					{/* Стилизованный контейнер */}
					<ProductsShoppingCart>
						{' '}
						{/* Секция для отображения товаров в корзине */}
						<CartTitle>{t('userCart.Products')}</CartTitle> {/* Заголовок секции с переводом */}
						<CartProducts cartList={cartList} setCartList={setCartList} />{' '}
						{/* Компонент для отображения списка товаров */}
					</ProductsShoppingCart>
					{/* Секция для ввода данных для оформления заказа */}
					<div>
						<CartTitle>{t('userCart.orderSummary')}</CartTitle> {/* Заголовок секции с переводом */}
						<Form>
							{' '}
							{/* Форма для ввода данных */}
							<DescriptionForm>{t('userCart.orderSummarytitle')}</DescriptionForm> {/* Описание формы с переводом */}
							{/* Поле для ввода страны */}
							<FormInput>
								<FormInputTitle>{t('userCart.country')}</FormInputTitle> {/* Заголовок поля с переводом */}
								<Input
									width='100%'
									height={50}
									name='country'
									value={inputValues.country}
									onChange={handleChange}
								/>{' '}
								{/* Поле ввода */}
							</FormInput>
							{/* Поле для ввода штата */}
							<FormInput>
								<FormInputTitle>{t('userCart.state')}</FormInputTitle> {/* Заголовок поля с переводом */}
								<Input width='100%' height={50} name='state' value={inputValues.state} onChange={handleChange} />{' '}
								{/* Поле ввода */}
							</FormInput>
							{/* Поле для ввода почтового кода */}
							<FormInput>
								<FormInputTitle>{t('userCart.postalCode')}</FormInputTitle> {/* Заголовок поля с переводом */}
								<Input
									width='100%'
									height={50}
									name='postalCode'
									value={inputValues.postalCode}
									onChange={handleChange} // Обработчик изменения
								/>
							</FormInput>
							{/* Кнопка для продолжения покупок или оформления заказа */}
							<BuyButton>
								<Button width={145} onClick={handleSubmitForm}>
									{t('userCart.continueShopping')}
								</Button>
							</BuyButton>
						</Form>
					</div>
				</Wrapper>
			) : (
				<span>{t('userCart.shoppingBasketIsEmpty')}</span> // Если корзина пуста, отображаем сообщение
			)}
		</>
	);
};

export default UserCart; // Экспортируем компонент для использования в других частях приложения
