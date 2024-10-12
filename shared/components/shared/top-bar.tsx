import { cn } from '@/shared/lib/utils'
import { Category } from '@prisma/client'
import Categories from './categories'
import { Container } from './container'
import SortPopup from './sort-popup'

interface Props {
	categories: Category[]
	className?: string
}

export const TopBar: React.FC<Props> = ({ className, categories }) => {
	return (
		<div
			className={cn(
				'sticky top-0 bg-white shadow-lg shadow-black/5 z-10 p-6',
				className
			)}
		>
			<Container className='flex items-center justify-between'>
				<Categories items={categories} />
				<SortPopup />
			</Container>
		</div>
	)
}

export default TopBar
