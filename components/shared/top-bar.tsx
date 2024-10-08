import { cn } from '@/lib/utils'
import { Container } from './container'
import Categories from './categories'
import SortPopup from './sort-popup'
import { Category } from '@prisma/client'

interface Props {
    categories: Category[]
	className?: string
}

export const TopBar: React.FC<Props> = ({ className, categories }) => {
	return (
		<div className={cn('sticky top-0 bg-white shadow-lg shadow-black/5 z-10 p-6', className)}>
            <Container className='flex items-center justify-between'>
                <Categories items={categories} />
                <SortPopup />  
            </Container>
        </div>
	)
}

export default TopBar