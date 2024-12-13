import Image from 'next/image';
import { useEffect, useState } from 'react';
import accepted from 'public/icons/accepted.png';
import { getMyOrders } from '@src/api/order';
import OrderedProduct from './orderedProduct';
import { Wrapper, OrderedProductWrapper, CartContent } from './styled';
import { useTranslation } from 'react-i18next';

type OrderType = {
	country: string;
	postalCode: string;
	products: [];
	state: string;
};

const OrderedProducts = () => {
	const [orders, setOrders] = useState([]);
	const { t } = useTranslation();
	const getCart = async () => {
		const response = await getMyOrders();
		setOrders(response.data);
	};

	useEffect(() => {
		getCart();
	}, []);

	if (!orders.length) return <h3>{t('profilet.thereisNoOrder')}</h3>;

	return (
		<CartContent>
			{orders.map((item: OrderType, index: number) => (
				<Wrapper key={index}>
					<OrderedProductWrapper>
						<span>
							{t('profilet.orderNumber')}
							{index + 1}
						</span>

						<OrderedProduct products={item.products} />
					</OrderedProductWrapper>

					<Image src={accepted} alt='accepted' />
				</Wrapper>
			))}
		</CartContent>
	);
};

export default OrderedProducts;
