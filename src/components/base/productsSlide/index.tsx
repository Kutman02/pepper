// Импортируем необходимые библиотеки и компоненты
import { useDispatch, useSelector } from 'react-redux';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import loading from 'public/images/loading.gif'; // Логотип или анимация загрузки
import { routes } from '@src/constants/routes'; // Импорт маршрутов
import Button from '../button'; // Импорт компонента кнопки
import { postCartChange } from '@src/api/cart'; // API запрос для изменения корзины
import { updateGlobalSlice } from '@src/store/globalSlice'; // Диспатч для обновления глобального состояния
import { Products, Product, Title, Content, ProductPrice, ProductTitle } from './styled'; // Стили
import { useTranslation } from 'react-i18next'; // Библиотека для перевода

// Определяем типы пропсов для компонента ProductSlide
type ProductSlideProps = {
	title?: string; // Заголовок слайдера продуктов (опционально)
	list: {
		// Список продуктов
		id: string;
		images: StaticImageData; // Данные изображения
		title: string; // Название продукта
		price: number; // Цена продукта
	}[];
};

// Тип для отдельного продукта в списке
type ListType = {
	id: string;
	price: number;
	images: any; // Данные изображений
	title: string; // Название продукта
};

// Компонент слайдера продуктов
const ProductSlide = ({ title, list }: ProductSlideProps) => {
	const { t } = useTranslation(); // Используем hook для перевода
	const router = useRouter(); // Получаем доступ к маршрутизатору
	const dispatch = useDispatch(); // Диспатч для изменения глобального состояния
	const email = useSelector((state: any) => state.globalSlice.data.email); // Получаем email из глобального состояния
	const password = useSelector((state: any) => state.globalSlice.data.password); // Получаем пароль из глобального состояния

	// Функция для добавления продукта в корзину
	const handleBuy = async (id: string) => {
		if (!email && !password) {
			// Если пользователь не авторизован, перенаправляем на страницу логина
			router.push(routes.login);
			return;
		}

		const response = await postCartChange(id, 1); // Отправляем запрос для добавления в корзину

		if (response.status === 200) {
			// Если запрос успешен, обновляем данные корзины в глобальном состоянии
			dispatch(updateGlobalSlice({ cartTotal: response.cartTotal }));

			// Перенаправляем пользователя в корзину
			//router.push(routes.cart);
		}
	};

	return (
		<Content>
			{/* Заголовок слайдера */}
			<Title>
				<span>{title ? title : <Image src={loading} alt='loading' />}</span>
			</Title>

			{/* Список продуктов */}
			<Products>
				{list ? (
					// Если есть продукты, отображаем их
					list.map((item: ListType, index: number) => (
						<Product key={index}>
							<Link href={routes.product(item.id)}>
								{/* Ссылка на страницу продукта */}
								<Image src={item.images[0]} alt='image' width={225} height={225} />

								{/* Название и цена продукта */}
								<ProductTitle>{item.title}</ProductTitle>
								<ProductPrice>{`${item.price} сом`}</ProductPrice>
							</Link>
							<Button onClick={() => handleBuy(item.id)}>{t('addToCart')}</Button> {/* Кнопка добавления в корзину */}
						</Product>
					))
				) : (
					<></> // Если продуктов нет, ничего не отображаем
				)}
			</Products>
		</Content>
	);
};

// Экспортируем компонент для использования в других частях приложения
export default ProductSlide;
