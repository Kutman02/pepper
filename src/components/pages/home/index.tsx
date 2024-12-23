import Image, { StaticImageData } from 'next/image'; // Импортируем компонент Image от Next.js для работы с изображениями
import ProductSlide from '../../base/productsSlide'; // Импортируем компонент для отображения слайдов товаров
import { BannerFullWidth, DivBanners, DivBannersLeft, DivBannersRight, HomeWrapper } from './styled'; // Импортируем стилизованные компоненты
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
		<HomeWrapper>
			{/* Отображение широкоформатного баннера */}
			<BannerFullWidth>
				<Image src={data.slider.link} alt={data.slider.alt} priority={true} />
			</BannerFullWidth>

			{/* Слайд с лучшими предложениями товаров */}
			<ProductSlide list={data.sliderProducts.bestOffer.list} title={data.sliderProducts.bestOffer.title} />

			{/* Отображение другого широкоформатного баннера */}
			<BannerFullWidth>
				<Image src={data.bannerMiddle.link} alt={data.bannerMiddle.alt} />
			</BannerFullWidth>

			{/* Слайд с самыми продаваемыми товарами */}
			<ProductSlide list={data.sliderProducts.bestSelling.list} title={data.sliderProducts.bestSelling.title} />

			{/* Контейнер для баннеров внизу страницы */}
			<DivBanners>
				{/* Левая часть с маленькими баннерами */}
				<DivBannersLeft>
					{data.bannerBottom.small.map((item: smallType, index: number) => (
						// Отображение каждого маленького баннера
						<Image key={index} src={item.link} alt={item.alt} />
					))}
				</DivBannersLeft>

				{/* Правая часть с средним баннером */}
				<DivBannersRight>
					<Image src={data.bannerBottom.medium.link} alt={data.bannerBottom.medium.alt} />
				</DivBannersRight>
			</DivBanners>
		</HomeWrapper>
	);
};

export default HomeContent; // Экспортируем компонент для использования в других частях приложения
