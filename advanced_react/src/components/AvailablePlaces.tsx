import {ReactNode} from "react";
import {Place, Places} from "./Places.tsx";
import {fetchAvailablePlaces} from "../utilities/clients/http.ts";
import {sortPlacesByDistance} from "../utilities/locations.ts";
import {Error} from "./Error.jsx";
import {useFetch} from "../utilities/hooks/useFetch.ts";

interface AvailablePlacesProps {
    onSelectPlace: (selectedPlace: Place) => Promise<void>
}

async function fetchSortedPlaces(): Promise<Place[]> {
    const places: Place[] = await fetchAvailablePlaces();

    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((position) => {
            const sortedPlaces = sortPlacesByDistance(
                places,
                position.coords.latitude,
                position.coords.longitude
            );
            resolve(sortedPlaces);
        });
    });
}

export const AvailablePlaces = ({onSelectPlace}: AvailablePlacesProps): ReactNode => {

    const {
        isFetching,
        error,
        data: availablePlaces,
        setError
    } = useFetch({backendFetchFunction: fetchSortedPlaces, initialValue: [] as Place[]});

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