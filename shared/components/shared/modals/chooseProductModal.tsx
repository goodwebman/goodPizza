'use client'

import { Dialog, DialogContent } from '@/shared/components/ui/dialog'
import { cn } from '@/shared/lib/utils'

import React from 'react'

import { IProduct } from '@/@types/prisma'
import { useRouter } from 'next/navigation'
import { ChoosePizzaForm } from '../choose-pizza-form'
import { ChooseProductForm } from '../choose-product-form'
import { useCartStore } from '@/shared/store'

interface Props {
	className?: string
	product: IProduct
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
	const router = useRouter()
	const firstItem = product.items[0]
	const isPizzaForm = Boolean(product.items[0].pizzaType)
	const addCartItem = useCartStore(state => state.addCartItem)

	const onAddProduct = () => {
		addCartItem({
			productItemId: firstItem.id
		})
	}

	const onAddPizza = (productItemId: number, ingredients: number[]) => {
		addCartItem({
			productItemId,
			ingredients,
		})
    }

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					'p-Title>Choose Product</Title>1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
					className
				)}
			>
				{isPizzaForm ? (
					<ChoosePizzaForm
						imageUrl={product.imageUrl}
						name={product.name}
						ingredients={product.ingredients}
						items={product.items}
					/>
				) : (
					<ChooseProductForm
						imageUrl={product.imageUrl}
						name={product.name}
						price={product.id}
					/>
				)}
			</DialogContent>
		</Dialog>
	)
}
