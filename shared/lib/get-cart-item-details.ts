import { Ingredient } from '@prisma/client'
import { mapPizzaType, PizzaSize, PizzaType, } from '../constans/pizza'
import { _ingredients } from '@/prisma/constants'

export const getCartItemDetails = (
    pizzaType: PizzaType,
    pizzaSize: PizzaSize,
    Ingredient: Ingredient[]
): string => {
    const details = []

    if(pizzaSize && pizzaType) {
        const typeNamme = mapPizzaType[pizzaType]
        details.push(`${typeNamme} ${pizzaSize} см`)
    }

    if(_ingredients) {
        details.push(_ingredients.map(ingredient => ingredient.name))
    }

    return details.join(', ') 

} 