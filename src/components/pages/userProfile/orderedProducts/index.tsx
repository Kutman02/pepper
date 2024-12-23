import Image from 'next/image'; // Импортируем компонент Image из Next.js для работы с изображениями
import { useEffect, useState } from 'react'; // useState для управления состоянием, useEffect для побочных эффектов
import accepted from 'public/icons/accepted.png'; // Импортируем изображение "accepted" для отображения состояния заказа
import { getMyOrders } from '@src/api/order'; // Импортируем функцию для получения заказов пользователя
import OrderedProduct from './orderedProduct'; // Импортируем компонент для отображения товаров в заказе
import { Wrapper, OrderedProductWrapper, CartContent } from './styled'; // Импортируем стилизованные компоненты
import { useTranslation } from 'react-i18next'; // Для поддержки многоязычности

// Тип для данных заказа, описывающий структуру заказа
type OrderType = {
	country: string;
	postalCode: string;
	products: []; // Массив продуктов в заказе
	state: string;
};

const OrderedProducts = () => {
	const [orders, setOrders] = useState([]); // Состояние для хранения списка заказов
	const { t } = useTranslation(); // Хук для перевода текста

	// Функция для получения заказов с API
	const getCart = async () => {
		const response = await getMyOrders(); // Получаем заказы с помощью API
		setOrders(response.data); // Обновляем состояние заказов
	};

	// useEffect для загрузки заказов при монтировании компонента
	useEffect(() => {
		getCart(); // Загружаем заказы
	}, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании

	// Если заказов нет, отображаем сообщение
	if (!orders.length) return <h3>{t('profilet.thereisNoOrder')}</h3>;

	return (
		<CartContent>
			{/* Для каждого заказа отображаем его данные */}
			{orders.map((item: OrderType, index: number) => (
				<Wrapper key={index}>
					{' '}
					{/* Оборачиваем каждый заказ в Wrapper */}
					<OrderedProductWrapper>
						<span>
							{/* Отображаем номер заказа, начиная с 1 */}
							{t('profilet.orderNumber')}
							{index + 1}
						</span>

						{/* Компонент для отображения продуктов в заказе */}
						<OrderedProduct products={item.products} />
					</OrderedProductWrapper>
					{/* Изображение "accepted", показывающее успешное принятие заказа */}
					<Image src={accepted} alt='accepted' />
				</Wrapper>
			))}
		</CartContent>
	);
};

export default OrderedProducts;
