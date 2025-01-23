import {HeaderFD} from "./components/HeaderFD.tsx";
import {Meals} from "./components/Meals.tsx";
import {CartContextProvider} from "./context/CartContext.tsx";
import {Cart} from "./components/Cart.tsx";
import {UserProgressContextProvider} from "./context/UserProgressContext.tsx";
import {Checkout} from "./components/Checkout.tsx";

export const AppFoodDelivery = () => {
    return <CartContextProvider>
        <UserProgressContextProvider>
            <HeaderFD/>
            <Meals/>
            <Cart />
            <Checkout />
        </UserProgressContextProvider>
    </CartContextProvider>;
}