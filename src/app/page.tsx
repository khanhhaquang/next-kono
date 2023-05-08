import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function AvatarDemo() {
	return (
		<Avatar>
			<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	);
}
export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			Konomi Network
			<AvatarDemo />
		</main>
	);
}
