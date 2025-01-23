import {currencyFormatter} from "../utilities/currencyFormatter.ts";
import CartContext, {CartItem} from "../context/CartContext.tsx";
import {useContext} from "react";


interface CartItemProps {
    item: CartItem,
}

export const CartItemComponent = ({item}: CartItemProps) => {

    const {addItem, removeItem} = useContext(CartContext);

    return item.quantity > 0
        ? <li className={"cart-item"}>
            <p>{item.name} - {item.quantity} x {currencyFormatter(item.price)}</p>
            <p className={"cart-item-actions"}>
                <button onClick={() => removeItem(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addItem(item)}>+</button>
            </p>
        </li>
        : null;
}