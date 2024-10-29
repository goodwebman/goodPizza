'use client'

import { Dialog, DialogContent } from '@/shared/components/ui/dialog'
import { cn } from '@/shared/lib/utils'

import React from 'react'

import { IProduct } from '@/@types/prisma'
import { useCartStore } from '@/shared/store'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { ChoosePizzaForm } from '../choose-pizza-form'
import { ChooseProductForm } from '../choose-product-form'

interface Props {
	className?: string
	product: IProduct
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
	const router = useRouter()
	const firstItem = product.items[0]
	const isPizzaForm = Boolean(product.items[0].pizzaType)
	const addCartItem = useCartStore(state => state.addCartItem)

	const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
		try {

			const itemId = productItemId ?? firstItem.id;

			await addCartItem({
				productItemId: itemId,
				ingredients: ingredients,
                
			})

			toast.success(product.name + ' добавлена в корзину');
			router.back()
		} catch (err) {
			toast.error('Не удалось добавить пиццу в корзину')
			console.error(err)
		}
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
						onSubmit={onSubmit}
					/>
				) : (
					<ChooseProductForm
						imageUrl={product.imageUrl}
						name={product.name}
						price={firstItem.price}
						onSubmit={onSubmit}
					/>
				)}
			</DialogContent>
		</Dialog>
	)
}
