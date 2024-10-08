import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import './globals.css'

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
})


export default function GodLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${nunito.variable} antialiased`}>
				{children} {/* children - это страницы */}
			</body>
		</html>
	)
}
