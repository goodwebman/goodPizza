
import {
	Container,
	Filters,
	ProductGroupList,
	Title,
	TopBar,
} from '@/components/shared'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>
			<TopBar />

			<Container className='mt-10 pb-14'>
				<section className='flex gap-[80px]'>
					<div className='w-[250px]'>
						<Filters />
					</div>

					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductGroupList
								title='Пиццы'
								items={[
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
										items: [{ price: 550 }],
									},
								]}
								categoryId={1}
							/>

							<ProductGroupList
								title='Комбо'
								items={[
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
										items: [{ price: 550 }],
									},
									{
										id: 1,
										name: 'Чизбургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
										items: [{ price: 550 }],
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</section>
			</Container>
		</>
	)
}
