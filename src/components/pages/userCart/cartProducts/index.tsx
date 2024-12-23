// Импорт необходимых модулей и компонентов
import Image, { StaticImageData } from 'next/image'; // Компонент Image от Next.js для оптимизированного отображения изображений
import { useDispatch } from 'react-redux'; // Хук для отправки действий в хранилище Redux
import close from 'public/icons/close.png'; // Импорт изображения для кнопки "Закрыть"
import Button from '../../../base/button'; // Компонент Button (кнопка)
import { postCartChange } from '@src/api/cart'; // API-запрос для изменения корзины
import { cloneList } from '@src/utils'; // Утилита для клонирования списка
import { updateGlobalSlice } from '@src/store/globalSlice'; // Действие для обновления глобального состояния Redux
import { useTranslation } from 'react-i18next'; // Хук для работы с переводами (i18n)
import {
	CounterNumber, // Стилизованный компонент для отображения количества
	OrderedProduct, // Стилизованный компонент для обертки товара
	OrderedProductDetails, // Стилизованный компонент для обертки деталей товара
	Price, // Стилизованный компонент для отображения цены
	ProductCounter, // Стилизованный компонент для счетчика товара
	ProductName, // Стилизованный компонент для отображения названия товара
	PriceProduct, // Стилизованный компонент для блока с ценой и итоговой суммой
	Wrapper, // Стилизованный компонент для обертки каждого товара
	Total, // Стилизованный компонент для текста "Итого"
} from './styled';

// Типизация пропсов компонента CartProducts
type ProductSlideProps = {
	cartList?: any; // Список товаров в корзине
	setCartList?: any; // Функция для обновления состояния списка товаров
};

// Типизация для каждого товара в корзине
type CartListType = {
	category: string; // Категория товара
	description: []; // Описание товара
	id: string; // Уникальный идентификатор товара
	images: StaticImageData[]; // Массив изображений товара
	price: number; // Цена одного товара
	score: number; // Оценка товара
	summery: string; // Краткое описание товара
	title: string; // Название товара
	total: number; // Количество товара в корзине
};

// Компонент CartProducts для отображения товаров в корзине
const CartProducts = ({ cartList, setCartList }: ProductSlideProps) => {
	const { t } = useTranslation(); // Хук для работы с переводами
	const dispatch = useDispatch(); // Хук для отправки действий в Redux

	// Функция для увеличения количества товара
	const increment = async (id: string) => {
		const response = await postCartChange(id, 1); // Запрос к API для увеличения количества товара на 1
		if (response.status === 200) {
			// Если запрос успешен
			const index = cartList.findIndex((item: CartListType) => item.id === id); // Находим индекс товара по его id
			const listCloned = cloneList(cartList); // Клонируем список товаров, чтобы не мутировать оригинальный
			listCloned[index].total += 1; // Увеличиваем количество товара
			setCartList(listCloned); // Обновляем список товаров в состоянии
		}
	};

	// Функция для уменьшения количества товара
	const decrement = async (id: string) => {
		const response = await postCartChange(id, -1); // Запрос к API для уменьшения количества товара на 1
		if (response.status === 200) {
			// Если запрос успешен
			const index = cartList.findIndex((item: CartListType) => item.id === id); // Находим индекс товара
			const listCloned = cloneList(cartList); // Клонируем список товаров
			listCloned[index].total -= 1; // Уменьшаем количество товара
			setCartList(listCloned); // Обновляем список товаров в состоянии
		}
	};

	// Функция для удаления товара из корзины
	const deleteItem = async (id: string) => {
		const response = await postCartChange(id, 0); // Запрос к API для удаления товара из корзины
		if (response.status === 200) {
			// Если запрос успешен
			const cartListDelete = JSON.parse(localStorage.getItem('cartList') || '[]'); // Получаем обновленный список корзины из localStorage
			const index = cartList.findIndex((item: CartListType) => item.id === id); // Находим индекс товара
			const listCloned = cloneList(cartList); // Клонируем список товаров
			listCloned.splice(index, 1); // Удаляем товар из списка
			setCartList(listCloned); // Обновляем список товаров в состоянии
			dispatch(updateGlobalSlice({ cartTotal: cartListDelete?.length })); // Обновляем общее количество товаров в глобальном состоянии Redux
		}
	};

	// JSX-рендеринг для каждого товара в корзине
	return (
		<>
			{cartList.map(
				(
					item: CartListType,
					index: number, // Проходим по каждому товару в корзине
				) => (
					<Wrapper key={index}>
						{' '}
						{/* Обертка для каждого товара */}
						<OrderedProduct>
							<Image src={item.images[0]} alt='image' width={150} height={150} /> {/* Изображение товара */}
							<OrderedProductDetails>
								<ProductName>{item.title}</ProductName> {/* Название товара */}
								<ProductCounter>
									<Button
										borderColor={'none'}
										width={40}
										height={35}
										onClick={() => (item.total > 1 ? decrement(item.id) : '')}>
										- {/* Кнопка для уменьшения количества */}
									</Button>
									<CounterNumber>{item.total}</CounterNumber> {/* Отображение текущего количества товара */}
									<Button borderColor={'none'} width={40} height={35} onClick={() => increment(item.id)}>
										+ {/* Кнопка для увеличения количества */}
									</Button>
								</ProductCounter>
								<PriceProduct>
									<Total>{t('totalt')}</Total> {/* Отображение текста "Итого" */}
									<Price>{`${item.price * item.total} сом`}</Price> {/* Отображение итоговой суммы за товар */}
								</PriceProduct>
							</OrderedProductDetails>
						</OrderedProduct>
						<Image src={close} alt='close' onClick={() => deleteItem(item.id)} /> {/* Картинка для кнопки "Удалить" */}
					</Wrapper>
				),
			)}
		</>
	);
};

export default CartProducts; // Экспорт компонента для использования в других частях приложения
