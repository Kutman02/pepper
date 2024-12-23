import Image, { StaticImageData } from 'next/image'; // Импортируем компонент Image из Next.js для отображения изображений и тип StaticImageData для работы с изображениями
import { Wrapper, OrderedProductDetails, OrderedProductName, Price, PriceProduct, Total } from './styled'; // Импортируем стилизованные компоненты из файла styled.ts

// Тип для массива продуктов (в заказе)
type OrderType = {
	products: []; // Список продуктов
};

// Тип для каждого продукта в заказе
type OrderedProductType = {
	category: string; // Категория продукта
	description: []; // Описание продукта (массив)
	id: string; // Уникальный идентификатор продукта
	images: StaticImageData[]; // Массив изображений продукта
	price: number; // Цена за единицу продукта
	score: number; // Оценка продукта
	summery: string; // Краткое описание
	title: string; // Название продукта
	total: number; // Общее количество этого продукта в заказе
};

// Компонент, который отображает заказы с продуктами
const OrderedProduct = ({ products }: OrderType) => {
	return (
		<>
			{/* Проходим по всем продуктам в заказе и отображаем их */}
			{products.map((item: OrderedProductType, index: number) => (
				<Wrapper key={index}>
					{/* Отображаем изображение первого изображения продукта (item.images[0]) */}
					<Image src={item.images[0]} alt='image' width={150} height={150} />

					{/* Отображаем детали продукта */}
					<OrderedProductDetails>
						{/* Название продукта */}
						<OrderedProductName>{item.title}</OrderedProductName>

						{/* Блок с ценой */}
						<PriceProduct>
							{/* Текст "Total" */}
							<Total>Total:</Total>
							{/* Цена за единицу продукта */}
							<Price> {item.total}</Price>
						</PriceProduct>

						{/* Блок с общей ценой (цена за единицу умноженная на количество) */}
						<PriceProduct>
							{/* Текст "TotalPrice" */}
							<Total>TotalPrice:</Total>
							{/* Общая стоимость этого продукта в заказе */}
							<Price> {`${item.price * item.total}`}</Price>
						</PriceProduct>
					</OrderedProductDetails>
				</Wrapper>
			))}
		</>
	);
};

export default OrderedProduct;
