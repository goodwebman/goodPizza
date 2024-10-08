import {
	Container,
	GroupVariants,
	ProductImage,
	Title,
} from '@/components/shared'

import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'

export default async function ProductPage({
	params: { id },
}: {
	params: { id: string } // просто такая некрасивая типизация для передачи параметров в компонент
}) {
	const product = await prisma.product.findFirst({
		// работаем с базой данных с помощью prisma
		where: { id: Number(id) },
	})

	if (!product) {
		return notFound()
	}
	return (
		<Container className='flex flex-col my-10 mt-24'>
			<div className='flex flex-1'>
				<ProductImage imageUrl={product.imageUrl} size={20} className='' />

				<div className='w-[490px] bg-[#f7f6f5] p-7'>
					<Title
						text={product.name}
						size='md'
						className='font-extrabold mb-1'
					/>

					<p className='text-gray-400'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum rem
						distinctio in deserunt? Adipisci vitae consectetur expedita ab
						dignissimos unde corporis sunt tempora illo? Laudantium doloribus
						debitis esse laborum quo.
					</p>

					<GroupVariants
						items={[
							{
								name: 'Маленькая',
								value: '1',
							},
							{
								name: 'Средняя',
								value: '2',
							},
							{
								name: 'Большая',
								value: '3',
							},
						]}
					/>
				</div>
			</div>
		</Container>
	)
}
