import { useEffect, useState, ChangeEvent, FormEvent } from 'react'; // Импортируем хуки для работы с состоянием и событиями
//import Image from 'next/image'; // Импорт изображения (закомментировано)
import { useRouter } from 'next/router'; // Импортируем хук для работы с роутингом
import { useDispatch } from 'react-redux'; // Импортируем хук для работы с Redux
//import logo from 'public/images/logo.png'; // Логотип (закомментирован)
import Button from '@src/components/base/button'; // Импорт кнопки
import Input from '@src/components/base/input'; // Импорт компонента ввода
import { postAuth } from '@src/api/auth'; // Импорт функции для аутентификации
import { routes } from '@src/constants/routes'; // Импорт маршрутов
import { updateGlobalSlice } from '../../../store/globalSlice'; // Импорт функции для обновления состояния в Redux
import { useTranslation } from 'react-i18next'; // Импорт хука для работы с переводами
import { Form, FormButton, LoginDescription, LoginWrapper, Password, Register } from './style'; // Импорт стилей

const LoginPage = () => {
	const dispatch = useDispatch(); // Получаем функцию dispatch для отправки действий в Redux
	const [inputValues, setInputValues] = useState({
		email: '', // Состояние для хранения значения email
		password: '', // Состояние для хранения значения пароля
	});
	const router = useRouter(); // Получаем объект router для навигации по страницам

	// Обработчик изменения значений в инпутах
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target; // Получаем имя и значение из поля ввода

		setInputValues((prev) => {
			return {
				...prev, // Сохраняем старые значения
				[name]: value, // Обновляем значение для текущего поля (email или password)
			};
		});
	};

	const { t } = useTranslation(); // Получаем функцию перевода для интернационализации

	// Функция для отправки формы (аутентификация)
	const handleSubmitForm = async () => {
		const response = await postAuth(inputValues.email, inputValues.password); // Отправляем запрос на аутентификацию

		if (response.status === 201) {
			// Если аутентификация успешна
			dispatch(updateGlobalSlice(inputValues)); // Обновляем состояние в Redux с данными пользователя
			router.push(routes.home); // Переходим на главную страницу
		}
	};

	// Функция для предотвращения стандартного поведения формы (перезагрузки страницы)
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // Останавливаем перезагрузку при сабмите
	};

	// Проверяем, есть ли данные в localStorage (если пользователь уже вошел)
	useEffect(() => {
		const email = localStorage.getItem('email');
		const password = localStorage.getItem('password');

		if (email && password) {
			// Если email и пароль есть в localStorage
			router.push(routes.home); // Переходим на главную страницу
		}
	}, []); // useEffect с пустым массивом зависимостей, чтобы запустился один раз при монтировании компонента

	return (
		<LoginWrapper>
			{' '}
			{/* Обертка для всего контента страницы */}
			<Register>
				{' '}
				{/* Контейнер для формы регистрации */}
				{/* <Logo> */}
				{/* <Image src={logo} alt='logo' /> */}
				{/* </Logo> */} {/* Логотип (закомментирован) */}
				<LoginDescription>
					{' '}
					{/* Описание для пользователя */}
					{/* <p>Hello !</p> */}
					<p>{t('pleaseEnterYourNameAndEmail')}</p> {/* Текст, который переводится с помощью i18n */}
				</LoginDescription>
				<Form onSubmit={handleSubmit}>
					{' '}
					{/* Форма для ввода email и пароля */}
					<Input
						width={'335px'}
						height={'50px'}
						placeholder={t('email')} // Placeholder с переводом
						name='email'
						value={inputValues.email} // Значение из состояния
						onChange={handleChange} // Обработчик изменения
					/>
					<Password>
						{' '}
						{/* Контейнер для поля пароля */}
						<Input
							width={'335px'}
							height={'50px'}
							name='password'
							placeholder={t('password')} // Placeholder с переводом
							type={'password'} // Скрытый текст в поле ввода
							value={inputValues.password} // Значение из состояния
							onChange={handleChange} // Обработчик изменения
						/>
					</Password>
					<FormButton>
						{' '}
						{/* Контейнер для кнопки */}
						<Button width={'335px'} height={'50px'} onClick={handleSubmitForm}>
							{t('login')}
						</Button>
					</FormButton>
				</Form>
			</Register>
		</LoginWrapper>
	);
};

export default LoginPage;
