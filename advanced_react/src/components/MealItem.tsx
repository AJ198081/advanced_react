import {Meal, MEALS_SERVICE_URL} from "../service/client/MealClient.ts";
import {currencyFormatter} from "../utilities/currencyFormatter.ts";
import {Button} from "./Button.tsx";
import {useContext} from "react";
import CartContext from "../context/CartContext.tsx";

export const MealItem = (meal: Meal) => {

    const {addItem} = useContext(CartContext);

    function handleAddMealToCart(meal: Meal) {
        addItem(meal);
    }

    return <li className={"meal-item"}>
        <article>
            <img src={`${MEALS_SERVICE_URL}/${meal.image}`} alt={meal.name}/>
            <div>
                <h3>{meal.name}</h3>
                <p className={"meal-item-price"}>{currencyFormatter(meal.price)}</p>
                <p className={"meal-item-description"}>{meal.description}</p>
            </div>
            <p className={"meal-item-actions"}>
                <Button textOnly={false} onClick={() => handleAddMealToCart(meal)}>Add to cart</Button>
            </p>
        </article>
    </li>;
}