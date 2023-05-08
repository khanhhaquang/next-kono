import Head from 'next/head';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
	variable: '--roboto-font',
	weight: ['100', '300', '400', '500', '700', '900'],
	subsets: ['latin'],
});

export const metadata = {
	title: 'Konomi Network',
	description: 'New Konomi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<Head>
				<link rel='shortcut icon' href='/favicon.ico' />
			</Head>
			<body className={roboto.variable}>{children}</body>
		</html>
	);
}
