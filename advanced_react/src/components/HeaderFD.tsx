import {Button} from "./Button.tsx";
import {useContext} from "react";
import CartContext from "../context/CartContext.tsx";
import UserProgressContext from "../context/UserProgressContext.tsx";

export const HeaderFD = () => {

    const {items: cart} = useContext(CartContext);
    const {showCart} = useContext(UserProgressContext)

    return <header id="main-header">
        <div id={"title"}><img src="/logo_food_deliver.jpg" alt="Food delivery logo"/>
            <h1 style={{color: 'white'}}>Food Delivery</h1>
        </div>
        <nav>
            <Button textOnly={true} disabled={false} onClick={showCart}>
                Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
            </Button>
        </nav>
    </header>
}