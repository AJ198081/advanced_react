import {Place} from "../../components/Places.tsx";

export async function fetchAvailablePlaces(): Promise<Place[]> {
    const response = await fetch('http://localhost:3000/places');
    const resData = await response.json() as { places: Place[]};

    if (!response.ok) {
        throw new Error('Failed to fetch places');
    }

    return resData.places;
}

export async function fetchUserPlaces(): Promise<Place[]> {
    const response = await fetch('http://localhost:3000/user-places');
    const resData = await response.json() as { places: Place[] };

    if (!response.ok) {
        throw new Error('Failed to fetch user places');
    }

    return resData.places;
}

export async function updateUserPlaces(places: Place[]): Promise<string> {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({ places }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const resData = await response.json() as { message: string };

    if (!response.ok) {
        throw new Error('Failed to update user data.');
    }

    return resData.message;
}