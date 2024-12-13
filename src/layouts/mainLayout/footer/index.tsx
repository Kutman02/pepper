import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/logo.png';
import mail from 'public/icons/mail.png';
import phone from 'public/icons/phone.png';
import { useTranslation } from 'react-i18next';
import {
	DivContent,
	DivContentUs,
	DivLogo,
	FooterContent,
	FooterTitle,
	FooterWrapper,
	PContent,
	SpanContentUs,
	DivContentWrapper,
} from './styled';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<FooterContent>
			<FooterWrapper>
				<DivLogo>
					<Link href='/'>
						<Image src={logo} alt='logo' />
					</Link>
				</DivLogo>

				<DivContent>
					<DivContentWrapper>
						<FooterTitle>{t('footert.aboutUs')}</FooterTitle>
						<PContent>{t('footert.aboutUsTitle')}</PContent>
					</DivContentWrapper>

					<DivContentWrapper>
						<FooterTitle>{t('footert.contactUs')}</FooterTitle>

						<DivContentUs>
							<Image src={mail} alt='mail' />
							<SpanContentUs>Kutmank9@gmail.com</SpanContentUs>
						</DivContentUs>

						<DivContentUs>
							<Image src={phone} alt='phone' />
							<SpanContentUs>0703601025</SpanContentUs>
						</DivContentUs>
					</DivContentWrapper>
				</DivContent>
			</FooterWrapper>
		</FooterContent>
	);
};
export default Footer;
