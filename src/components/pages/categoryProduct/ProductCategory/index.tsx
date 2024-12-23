import { useDispatch, useSelector } from 'react-redux'; // Импортируем хук для работы с Redux
import { useRouter } from 'next/router'; // Импортируем хук для работы с маршрутизацией
import Image from 'next/image'; // Компонент для работы с изображениями
import Link from 'next/link'; // Компонент для создания ссылок
import loading from 'public/images/loading.gif'; // Изображение для состояния загрузки
import interest from 'public/icons/interest.png'; // Иконка интереса товара
import score from 'public/icons/score.png'; // Иконка оценки товара
import { routes } from '@src/constants/routes'; // Импортируем маршруты из констант
import Button from '@src/components/base/button'; // Импортируем компонент кнопки
import { updateGlobalSlice } from '@src/store/globalSlice'; // Импортируем экшен для обновления состояния Redux
import { postCartChange } from '@src/api/cart'; // Импортируем API-запрос для изменения корзины
import { ListProducts } from '@src/interfaces/listProducts'; // Импортируем тип для списка продуктов
import { Product, ProductFavorites, ProductName, ProductPrice, Score } from './styled'; // Импортируем стилизованные компоненты
import { useTranslation } from 'react-i18next'; // Хук для работы с переводами

type ProductSlideProps = {
	title?: string; // Опциональный пропс для заголовка
	list?: []; // Опциональный пропс для списка товаров
};

// Компонент для отображения категории товаров
const ProductCategory = ({ list }: ProductSlideProps) => {
	const { t } = useTranslation(); // Инициализация хука для перевода
	const router = useRouter(); // Инициализация хука маршрутизации
	const dispatch = useDispatch(); // Хук для работы с dispatch в Redux
	const email = useSelector((state: any) => state.globalSlice.data.email); // Извлекаем email из состояния Redux
	const password = useSelector((state: any) => state.globalSlice.data.password); // Извлекаем пароль из состояния Redux

	// Функция для добавления товара в корзину
	const handleBuy = async (id: string) => {
		// Проверяем, авторизован ли пользователь
		if (!email && !password) {
			router.push(routes.login); // Если нет, перенаправляем на страницу логина
			return;
		}

		// Отправляем запрос на добавление товара в корзину
		const response = await postCartChange(id, 1);

		// Проверяем успешность запроса
		if (response.status === 200) {
			// Обновляем состояние корзины в Redux
			dispatch(updateGlobalSlice({ cartTotal: response.cartTotal }));
			alert(t('itemAddedToCart')); // Показываем сообщение о добавлении товара в корзину
		} else {
			alert(t('errorAddingToCart')); // Показываем сообщение об ошибке
			// router.push(routes.cart); // Можно раскомментировать, если хотите перенаправить на корзину
		}
	};

	return (
		<>
			{list ? (
				// Если список товаров существует, отображаем каждый товар
				list.map((item: ListProducts, index: number) => (
					<Product key={index}>
						<Link href={routes.product(item.id)}>
							<Image src={item.images[0]} alt='image' width={225} height={225} /> {/* Изображение товара */}
							<ProductName>{item.title}</ProductName> {/* Название товара */}
							<ProductFavorites>
								<Score>
									<Image src={score} alt='score' width={70} height={17} /> {/* Оценка товара */}
								</Score>
								<Image src={interest} alt='interest' width={18} height={18} /> {/* Иконка интереса товара */}
							</ProductFavorites>
							<ProductPrice>{`${item.price} сом`}</ProductPrice> {/* Цена товара */}
						</Link>
						<Button onClick={() => handleBuy(item.id)}>{t('addToCart')}</Button> {/* Кнопка добавления в корзину */}
					</Product>
				))
			) : (
				// Если список товаров не загружен, отображаем индикатор загрузки
				<Image src={loading} alt='loading' />
			)}
		</>
	);
};

export default ProductCategory; // Экспортируем компонент
