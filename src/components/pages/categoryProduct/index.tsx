import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import filter from 'public/icons/filter.png';
import Input from '@src/components/base/input';
import ProductCategory from './ProductCategory';
import { routes } from '@src/constants/routes';
import {
	CategoryFilter,
	FilterProducts,
	PriceRange,
	ProductContent,
	Products,
	Search,
	Sidebar,
	Wrapper,
} from './styled';

type CategoryProductType = {
	data: [];
};

const CategoryProduct = ({ data }: CategoryProductType) => {
	const { t } = useTranslation();

	const listCategory = [
		{ title: t('category.masalas'), link: 'masalas' },
		{ title: t('category.chatMasalas'), link: 'chat-masalas' },
		{ title: t('category.pepperPowder'), link: 'pepper-Powder' },
		{ title: t('category.cookingEssentials'), link: 'cooking-essentials' },
		{ title: t('category.refundOil'), link: 'refund-oil' },
	];
	return (
		<Wrapper>
			<ProductContent>
				<FilterProducts>
					<p>
						{t('FilterProducts.Showing')} {data.length} {t('FilterProducts.of')} {data.length}{' '}
						{t('FilterProducts.product')}
					</p>
					<div>
						<span>{t('FilterProducts.filter')}</span>
						<Image src={filter} alt='filter' width={18} height={18} />
					</div>
				</FilterProducts>

				<Products>
					<ProductCategory list={data} />
				</Products>
			</ProductContent>

			<Sidebar>
				<Search>
					<span>{t('FilterProducts.searcht')}</span>
					<Input borderColor={'2px solid #cb1213'} />
				</Search>

				<div>
					<span>{t('FilterProducts.priceRanget')}</span>

					<PriceRange />
				</div>

				<div>
					<span>{t('FilterProducts.categoryt')}</span>
					<CategoryFilter>
						{listCategory.map((item, index) => (
							<Link href={routes.category(item.link)} key={index}>
								<span key={index}>{item.title}</span>
							</Link>
						))}
					</CategoryFilter>
				</div>
			</Sidebar>
		</Wrapper>
	);
};

export default CategoryProduct;
