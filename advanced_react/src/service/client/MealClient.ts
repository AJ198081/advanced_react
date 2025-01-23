
export interface Meal {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export const MEALS_SERVICE_URL = 'http://localhost:8080/meals';
export const getAllMeals = async (): Promise<Meal[]> => {

        const response = await fetch(MEALS_SERVICE_URL, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Error fetching meals');
        }

        return await response.json() as Promise<Meal[]>;
};