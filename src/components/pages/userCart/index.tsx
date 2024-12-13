import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import CartProducts from '@src/components/pages/userCart/cartProducts';
import { updateGlobalSlice } from '@src/store/globalSlice';
import Input from '@src/components/base/input';
import Button from '@src/components/base/button';
import { postNewOrder } from '@src/api/order';
import { routes } from '@src/constants/routes';
import { useTranslation } from 'react-i18next';
import {
	BuyButton,
	CartTitle,
	DescriptionForm,
	Form,
	FormInput,
	FormInputTitle,
	ProductsShoppingCart,
	Wrapper,
} from './styled';

type UserCartType = {
	cartList?: any;
	setCartList?: any;
};

const UserCart = ({ cartList, setCartList }: UserCartType) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const [inputValues, setInputValues] = useState({
		country: '',
		state: '',
		postalCode: '',
	});
	const router = useRouter();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setInputValues((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const handleSubmitForm = async () => {
		const response = await postNewOrder(inputValues.country, inputValues.state, inputValues.postalCode);

		if (response.status === 201) {
			router.push(routes.profile);
			dispatch(updateGlobalSlice({ cartTotal: null }));
		}
	};

	return (
		<>
			{cartList.length ? (
				<Wrapper>
					<ProductsShoppingCart>
						<CartTitle>{t('userCart.Products')}</CartTitle>

						<CartProducts cartList={cartList} setCartList={setCartList} />
					</ProductsShoppingCart>

					<div>
						<CartTitle>{t('userCart.orderSummary')}</CartTitle>
						<Form>
							<DescriptionForm>{t('userCart.orderSummarytitle')}</DescriptionForm>

							<FormInput>
								<FormInputTitle>{t('userCart.country')}</FormInputTitle>
								<Input width='100%' height={50} name='country' value={inputValues.country} onChange={handleChange} />
							</FormInput>

							<FormInput>
								<FormInputTitle>{t('userCart.state')}</FormInputTitle>
								<Input width='100%' height={50} name='state' value={inputValues.state} onChange={handleChange} />
							</FormInput>

							<FormInput>
								<FormInputTitle>{t('userCart.postalCode')}</FormInputTitle>
								<Input
									width='100%'
									height={50}
									name='postalCode'
									value={inputValues.postalCode}
									onChange={handleChange}
								/>
							</FormInput>

							<BuyButton>
								<Button width={145} onClick={handleSubmitForm}>
									{t('userCart.continueShopping')}
								</Button>
							</BuyButton>
						</Form>
					</div>
				</Wrapper>
			) : (
				<span>{t('userCart.shoppingBasketIsEmpty')}</span>
			)}
		</>
	);
};

export default UserCart;
