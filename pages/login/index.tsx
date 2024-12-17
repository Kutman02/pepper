import LoginPage from '@src/components/pages/login';
import Head from 'next/head';

const Login = () => {
	return (
		<>
			<Head>
				<title>Логин</title>
			</Head>

			<LoginPage />
		</>
	);
};

export default Login;
