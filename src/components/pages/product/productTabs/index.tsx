import React from 'react';
import { DescriptionTabs, Tab, Tabs, Wrapper } from './styled';
import { useTranslation } from 'react-i18next';

type ProductTabsType = {
	content: string;
	title: string;
};

const ProductTabs = ({ data }: any) => {
	const { t } = useTranslation();
	return (
		<Wrapper>
			<Tabs>
				<Tab>{t('productContent.productDescription')}</Tab>
			</Tabs>
			<DescriptionTabs>
				{data.map((item: ProductTabsType, index: number) => (
					<React.Fragment key={index}>
						<h3>{item.title}</h3>
						<p>{item.content}</p>
					</React.Fragment>
				))}
			</DescriptionTabs>
		</Wrapper>
	);
};

export default ProductTabs;
