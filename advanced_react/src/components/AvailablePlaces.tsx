import {ReactNode} from "react";
import {useState, useEffect} from 'react';
import {Place, Places} from "./Places.tsx";
import {fetchAvailablePlaces} from "../utilities/clients/http.ts";
import {sortPlacesByDistance} from "../utilities/locations.ts";
import {Error} from "./Error.jsx";

interface AvailablePlacesProps {
    onSelectPlace: (selectedPlace: Place) => Promise<void>
}

export const AvailablePlaces = ({onSelectPlace}: AvailablePlacesProps): ReactNode => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [availablePlaces, setAvailablePlaces] = useState<Place[]>([]);
    const [error, setError] = useState<{ message: string } | null>(null);

    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);

            try {
                const places = await fetchAvailablePlaces();

                navigator.geolocation.getCurrentPosition((position) => {
                    const sortedPlaces = sortPlacesByDistance(
                        places,
                        position.coords.latitude,
                        position.coords.longitude
                    );
                    setAvailablePlaces(sortedPlaces);
                    setIsFetching(false);
                });
            } catch (error: unknown) {
                setError({
                    message:
                        (error as Error).message || 'Could not fetch places, please try again later.',
                });
                setIsFetching(false);
            }
        }

        fetchPlaces();
    }, []);

    if (error) {
        return <Error title="An error occurred!" message={error.message} onConfirm={() => setError(null)}/>;
    }

    return (
        <Places
            title="Available Places"
            places={availablePlaces}
            isLoading={isFetching}
            loadingText="Fetching place data..."
            fallbackText="No places available."
            onSelectPlace={onSelectPlace}
        />
    );
}