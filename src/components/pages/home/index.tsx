import Image, { StaticImageData } from 'next/image'; // Импортируем компонент Image от Next.js для работы с изображениями
import ProductSlide from '../../base/productsSlide'; // Импортируем компонент для отображения слайдов товаров
import { HomeDataApiResponse } from '@src/interfaces/home'; // Импортируем тип данных для ответа от API

// Определение типа для пропсов компонента HomeContent
type HomeContentProps = {
	data: HomeDataApiResponse; // Данные, которые передаются компоненту из API
};

// Тип для объектов маленьких баннеров (small banners)
type smallType = {
	alt: string; // Альтернативный текст для изображения
	link: StaticImageData; // Ссылка на изображение (тип для статических изображений)
};

// Основной компонент для отображения домашней страницы
const HomeContent = ({ data }: HomeContentProps) => {
	return (
		<div className='max-w-[1440px] mx-auto px-4'>
			{/* Широкоформатный баннер */}
			<div className='w-full'>
				<Image src={data.slider.link} alt={data.slider.alt} priority={true} className='w-full h-auto' />
			</div>

			{/* Слайд с лучшими предложениями */}
			<ProductSlide list={data.sliderProducts.bestOffer.list} title={data.sliderProducts.bestOffer.title} />

			{/* Средний баннер */}
			<div className='w-full'>
				<Image src={data.bannerMiddle.link} alt={data.bannerMiddle.alt} className='w-full h-auto' />
			</div>

			{/* Слайд с самыми продаваемыми */}
			<ProductSlide list={data.sliderProducts.bestSelling.list} title={data.sliderProducts.bestSelling.title} />

			{/* Нижние баннеры */}
			<div className='flex justify-center flex-wrap lg:flex-nowrap'>
				{/* Левая колонка с маленькими баннерами */}
				<div className='flex flex-col justify-between lg:mr-[70px] mx-5 lg:mx-0'>
					{data.bannerBottom.small.map((item: smallType, index: number) => (
						<div key={index} className='mt-5 first:mt-0 lg:mt-0'>
							<Image src={item.link} alt={item.alt} className='rounded-lg w-full h-auto' />
						</div>
					))}
				</div>

				{/* Правая колонка с средним баннером */}
				<div className='cursor-pointer mt-5 lg:mt-0'>
					<Image
						src={data.bannerBottom.medium.link}
						alt={data.bannerBottom.medium.alt}
						className='rounded-lg w-full h-auto'
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeContent; // Экспортируем компонент для использования в других частях приложения
