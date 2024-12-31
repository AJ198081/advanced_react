import {ReactNode} from "react";

export interface Place {
    "id": string,
    "title": string,
    "image": {
        "src": string,
        "alt": string
    },
    "lat": number,
    "lon": number
}

interface PlacesProps {
    title?: string,
    fallbackText?: string,
    isLoading?: boolean,
    loadingText?: string,
    places: Place[],
    onSelectPlace: (place: Place) => void
}

export const Places = ({
                           title,
                           fallbackText,
                           isLoading,
                           loadingText,
                           places,
                           onSelectPlace
                       }: PlacesProps): ReactNode => {

    return (
        <section className="places-category">
            <h2>{title}</h2>
            {isLoading && <p className="fallback-text">{loadingText}</p>}
            {!isLoading && places.length === 0 && <p className="fallback-text">{fallbackText}</p>}
            {!isLoading && places.length > 0 && (
                <ul className="places">
                    {places.map((place) => (
                        <li key={place.id} className="place-item">
                            <button onClick={() => onSelectPlace(place)}>
                                <img
                                    src={`http://localhost:3000/${place.image.src}`}
                                    alt={place.image.alt}
                                />
                                <h3>{place.title}</h3>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}