import {ReactNode} from "react";
import {Meal} from "../service/client/MealClient.ts";
import {MealItem} from "./MealItem.tsx";
import {useHttp} from "../utilities/hooks/useHttp.ts";

export const Meals = (): ReactNode => {


    // const {error, data: fetchedData} = useFetch({backendFetchFunction: getAllMeals, initialValue: [] as Meal[]});

    const {responseData, error} = useHttp<Meal[]>({
        url: 'http://localhost:3000/meals',
        config: {method: 'GET'}
    });


    return <ul id={"meals"}>
        {error === null && responseData !== null && responseData.map(meal => (
            <MealItem key={meal.id} {...meal} />
        ))}
    </ul>;
}