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

type ProductData = {
	id: string;
	images: string[];
	title: string;
	summery: string;
	price: number;
	description: Array<{ title: string; content: string }>;
};

// Основной компонент для отображения контента страницы товара
const ProductContent = ({ data }: { data: ProductData }) => {
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
			<div className='max-w-7xl mx-auto px-4 py-8'>
				<div className='flex flex-col lg:flex-row gap-8'>
					{/* Изображения продукта */}
					<div className='flex-1 space-y-6'>
						{/* Иконки */}
						<div className='flex justify-end gap-4 mb-4'>
							<button className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
								<Image src={interest} alt='interest' width={18} height={18} />
							</button>
							<button className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
								<Image src={share} alt='share' width={18} height={18} />
							</button>
						</div>

						{/* Основное изображение */}
						<div className='flex justify-center'>
							<Image src={data.images[0]} alt='product' width={300} height={300} className='rounded-lg' />
						</div>

						{/* Галерея */}
						<div className='flex gap-4 overflow-x-auto pb-2'>
							{data.images.map((item, index) => (
								<div key={index} className='flex-shrink-0'>
									<Image
										src={item}
										alt='product thumbnail'
										width={100}
										height={100}
										className='rounded-md hover:opacity-80 transition-opacity cursor-pointer'
									/>
								</div>
							))}
						</div>
					</div>

					{/* Информация о продукте */}
					<div className='flex-1 space-y-6'>
						<h1 className='text-2xl font-medium text-gray-900'>{data.title}</h1>

						<div>
							<Image src={score} alt='score' />
						</div>

						<p className='text-gray-600'>{data.summery}</p>

						<div className='space-y-2'>
							<span className='text-gray-500'>{t('productContent.price')}</span>
							<div className='text-2xl font-bold text-primary'>{`${data.price} сом`}</div>
						</div>

						<div className='pt-4'>
							<Button onClick={handleBuy} className='w-full max-w-[335px] h-[50px]'>
								{t('productContent.buyNow')}
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Компонент вкладок с подробным описанием товара */}
			<ProductTabs data={data.description} />
		</>
	);
};

export default ProductContent;
