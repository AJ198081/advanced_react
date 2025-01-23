import ModalFD, {DialogRef} from "./ModalFD.tsx";
import {useContext, useEffect, useRef} from "react";
import CartContext from "../context/CartContext.tsx";
import {currencyFormatter} from "../utilities/currencyFormatter.ts";
import {Button} from "./Button.tsx";
import UserProgressContext from "../context/UserProgressContext.tsx";
import {CartItemComponent} from "./CartItemComponent.tsx";

export const Cart = () => {

    const {items} = useContext(CartContext);
    const {progress, hideCart, showCheckout} = useContext(UserProgressContext);

    const dialogRef = useRef<DialogRef>(null);

    const cartTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (progress === 'cart') {
        dialogRef.current?.openModal();
    } else {
        dialogRef.current?.closeModal();
    }

    useEffect(() => {
        const currentDialog = dialogRef.current;
        if (progress === 'cart') {
            currentDialog?.openModal();
        } else {
            currentDialog?.closeModal();
        }

        return () => {
            currentDialog?.closeModal();
        }
    }, [progress]);


    return <ModalFD className={"cart"} ref={dialogRef}>
        <h2>Your cart</h2>
        <ul>
            {items.map(item => (
                <CartItemComponent item={item} key={item.id}/>
            ))}
        </ul>
        <p className="cart-total">{currencyFormatter(cartTotal)}</p>
        <p className={'modal-actions'}>
            <Button textOnly={true} onClick={() => hideCart()}>Close</Button>
            {items.length > 0 && <Button textOnly={false} onClick={showCheckout}>Checkout</Button>}
        </p>
    </ModalFD>;
}