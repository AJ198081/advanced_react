import {createContext, ReactNode, useCallback, useState} from 'react';
import {Meal} from "../service/client/MealClient.ts";

export interface CartContext {
    items: CartItem[],
    addItem: (item: Meal) => void,
    removeItem: (item: CartItem) => void,
}

export interface CartItem extends Meal {
    quantity: number,
}

const defaultCartContext: CartContext = {
    items: [] as CartItem[],
    addItem: () => {
    },
    removeItem: () => {
    }
}

const CartContext = createContext<CartContext>(defaultCartContext);

export const CartContextProvider = ({children}: { children: ReactNode }) => {

    const [items, setItems] = useState<CartItem[]>([]);
    const addItem = useCallback((meal: Meal) => {
        setItems(prevCartItems => {
            const existingItemIndex = prevCartItems.findIndex(cartItem => cartItem.id === meal.id);

            if (existingItemIndex !== -1) {
                const existingCartItem = prevCartItems[existingItemIndex];
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1
                };

                return prevCartItems.map((item, index) => index === existingItemIndex ? updatedItem : item);

            } else {
                return [...prevCartItems, {...meal, quantity: 1} as CartItem];
            }
        });
    }, []);

    const removeItem = useCallback((item: CartItem) => {

        setItems(prevState => prevState.map(cartItem => cartItem.id === item.id ? {
            ...cartItem,
            quantity: cartItem.quantity - 1
        } : cartItem));
    }, []);

    return <CartContext.Provider value={{items, addItem, removeItem}}>{children}</CartContext.Provider>
};

export default CartContext;

