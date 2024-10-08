import {
	Container,
	Filters,
	ProductGroupList,
	Title,
	TopBar,
} from '@/components/shared'
import { prisma } from '@/prisma/prisma-client'

export default async function Home() {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					ingredients: true,
					items: true,
				},
			},
		},
	})

	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>
			<TopBar categories={categories.filter((categories) => categories.products.length > 0)} />

			<Container className='mt-10 pb-14'>
				<section className='flex gap-[80px]'>
					<div className='w-[250px]'>
						<Filters />
					</div>

					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							{categories.map(
								category =>
									category.products.length > 0 && (
										<ProductGroupList
											key={category.id}
											categoryId={category.id}
											title={category.name}
											items={category.products}
										/>
									)
							)}
						</div>
					</div>
				</section>
			</Container>
		</>
	)
}
