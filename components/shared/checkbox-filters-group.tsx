'use client'

import React, { useState } from 'react'
import { Input, Skeleton } from '../ui'
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox'

type Item = FilterChecboxProps

interface Props {
	title: string
	items: Item[]
	defaultItems?: Item[]
	loading?: boolean
	limit?: number
	searchInputPlaceholder?: string
	onClickCheckbox?: (id: string) => void
	defaultValue?: string[]
	selected?: Set<string>
	className?: string
	name?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = 'Поиск...',
	className,
	loading,
	onClickCheckbox,
	selected,
	defaultValue,
	name
}) => {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	const list = showAll
		? items.filter(item =>
				item.text.toLowerCase().includes(searchValue.toLowerCase())
		  )
		: (defaultItems || items).slice(0, limit)

	const onChangeSearchInput = (value: string) => {
		setSearchValue(value)
	}

	if (loading) {
		return (
			<div className={className}>
				<p className='font-bold mb-3'>{title}</p>

				{...Array(limit)
					.fill(0)
					.map((_, index) => (
						<Skeleton key={index} className='h-6 mb-4 rounded-[8px]' />
					))}

				<Skeleton className=' w-28 h-6 mb-4 rounded-[8px]' />
			</div>
		)
	}

	return (
		<div className={className}>
			<p className='font-bold mb-3'>{title}</p>

			{showAll && (
				<div className='mb-5'>
					<Input
						placeholder={searchInputPlaceholder}
						className='bg-gray-50 border-none'
						onChange={e => onChangeSearchInput(e.target.value)}
					/>
				</div>
			)}

			<div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
				{list.map((item, index) => (
					<FilterCheckbox
						key={index}
						value={item.value}
						text={item.text}
						endAdornment={item.endAdornment}
						checked={selected?.has(item.value)}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
						name={name}
					/>
				))}
			</div>
			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button
						onClick={() => setShowAll(!showAll)}
						className='text-primary mt-3'
					>
						{showAll ? 'Скрыть' : '+ Показать все'}
					</button>
				</div>
			)}
		</div>
	)
}
