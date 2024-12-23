import Image from 'next/image'; // Импортируем компонент Image для отображения изображений в Next.js
import { useRouter } from 'next/router'; // Импортируем useRouter для навигации между страницами
import { useDispatch, useSelector } from 'react-redux'; // Импортируем хук useDispatch для отправки действий в Redux, useSelector для получения данных из Redux
import Button from '@src/components/base/button'; // Импортируем компонент кнопки
import { routes } from '@src/constants/routes'; // Импортируем константы с путями маршрутов
import { postCartChange } from '@src/api/cart'; // Импортируем функцию для добавления товара в корзину
import score from 'public/icons/score.png'; // Импортируем иконку для рейтинга товара
import share from 'public/icons/share.png'; // Импортируем иконку для кнопки "поделиться"
import interest from 'public/icons/interest.png'; // Импортируем иконку для добавления в избранное
import ProductTabs from './productTabs'; // Импортируем компонент вкладок для отображения описания товара
import { updateGlobalSlice } from '../../../store/globalSlice'; // Импортируем экшн для обновления состояния корзины
import { useTranslation } from 'react-i18next'; // Импортируем хук для перевода текста
import {
	AlbumImage,
	Description,
	Amount,
	Product,
	Wrapper,
	Price,
	ButtonBuy,
	IconProduct,
	Share,
	ProductName,
	ProductPrice,
	ImagesProduct,
} from './styled'; // Импортируем все стилизованные компоненты

// Основной компонент для отображения контента страницы товара
const ProductContent = ({ data }: any) => {
	const { t } = useTranslation(); // Инициализация хука для перевода
	const router = useRouter(); // Хук для работы с маршрутом
	const dispatch = useDispatch(); // Хук для отправки экшенов в Redux
	const email = useSelector((state: any) => state.globalSlice.data.email); // Получаем email из глобального состояния
	const password = useSelector((state: any) => state.globalSlice.data.password); // Получаем пароль из глобального состояния

	// Функция для добавления товара в корзину
	const handleBuy = async () => {
		if (!email && !password) {
			// Если пользователь не авторизован, перенаправляем на страницу входа
			router.push(routes.login);
			return;
		}

		// Отправляем запрос на добавление товара в корзину
		const response = await postCartChange(data.id, 1);

		if (response.status === 200) {
			// Если товар добавлен в корзину, обновляем состояние и перенаправляем на страницу корзины
			dispatch(updateGlobalSlice({ cartTotal: response.cartTotal }));
			router.push(routes.cart);
		}
	};

	return (
		<>
			<Wrapper>
				<AlbumImage>
					{/* Иконки для добавления в избранное и поделиться */}
					<IconProduct>
						<Image src={interest} alt='interest' width={18} height={18} />
						<Share>
							<Image src={share} alt='share' width={18} height={18} />
						</Share>
					</IconProduct>

					{/* Основное изображение товара */}
					<Image src={data.images[0]} alt='image' width={300} height={300} />

					{/* Галерея изображений товара */}
					<ImagesProduct>
						{data.images.map((item: string, index: number) => (
							<Image src={item} alt='image' width={100} height={100} key={index} />
						))}
					</ImagesProduct>
				</AlbumImage>

				<Product>
					{/* Название товара */}
					<ProductName>{data.title}</ProductName>

					{/* Рейтинг товара */}
					<Image src={score} alt='score' />

					{/* Описание товара */}
					<Description>{data.summery}</Description>

					{/* Цена товара */}
					<ProductPrice>
						<Price>{t('productContent.price')}</Price>
						<Amount>{` ${data.price} сом`}</Amount>
					</ProductPrice>

					{/* Кнопка для добавления товара в корзину */}
					<ButtonBuy>
						<Button width={'335px'} height={'50px'} onClick={handleBuy}>
							{t('productContent.buyNow')}
						</Button>
					</ButtonBuy>
				</Product>
			</Wrapper>

			{/* Компонент вкладок с подробным описанием товара */}
			<ProductTabs data={data.description} />
		</>
	);
};

export default ProductContent;
