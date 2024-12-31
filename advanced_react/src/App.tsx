import {useRef, useState, useCallback, useEffect, ReactNode} from 'react';

import {Place, Places} from './components/Places';
import {Modal} from './components/Modal';
import {DeleteConfirmation} from './components/DeleteConfirmation';
import logoImg from '/logo.png';
import {AvailablePlaces} from './components/AvailablePlaces';
import {fetchUserPlaces, updateUserPlaces} from './utilities/clients/http';
import {Error} from './components/Error.jsx';

export const App = (): ReactNode => {
    const selectedPlace = useRef<Place | null>(null);

    const [userPlaces, setUserPlaces] = useState<Place[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [error, setError] = useState<{ message: string } | null>();

    const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState<{ message: string } | null>(null);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);
            try {
                const places = await fetchUserPlaces();
                setUserPlaces(places);
            } catch (error: unknown) {
                setError({message: (error as Error).message || 'Failed to fetch user places.'});
            }

            setIsFetching(false);
        }

        fetchPlaces();
    }, []);

    function handleStartRemovePlace(place: Place) {
        setModalIsOpen(true);
        selectedPlace.current = place;
    }

    function handleStopRemovePlace() {
        setModalIsOpen(false);
    }

    async function handleSelectPlace(selectedPlace: Place) {
        // await updateUserPlaces([selectedPlace, ...userPlaces]);

        setUserPlaces((prevPickedPlaces) => {
            if (!prevPickedPlaces) {
                prevPickedPlaces = [];
            }
            if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
                return prevPickedPlaces;
            }
            return [selectedPlace, ...prevPickedPlaces];
        });

        try {
            await updateUserPlaces([selectedPlace, ...userPlaces]);
        } catch (error: unknown) {
            setUserPlaces(userPlaces);
            setErrorUpdatingPlaces({
                message: (error as Error).message || 'Failed to update places.',
            });
        }
    }

    const handleRemovePlace = useCallback(
        async function handleRemovePlace() {
            setUserPlaces((prevPickedPlaces) =>
                prevPickedPlaces.filter(
                    (place) => place.id !== selectedPlace.current?.id
                )
            );

            try {
                await updateUserPlaces(
                    userPlaces.filter((place) => place.id !== selectedPlace.current?.id)
                );
            } catch (error: unknown) {
                setUserPlaces(userPlaces);
                setErrorUpdatingPlaces({
                    message: (error as Error).message || 'Failed to delete place.',
                });
            }

            setModalIsOpen(false);
        },
        [userPlaces]
    );

    function handleError() {
        setErrorUpdatingPlaces(null);
    }

    return (
        <>
            <Modal open={errorUpdatingPlaces?.message === null} onClose={handleError}>
                {errorUpdatingPlaces && (
                    <Error
                        title="An error occurred!"
                        message={errorUpdatingPlaces.message}
                        onConfirm={handleError}
                    />
                )}
            </Modal>

            <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
                <DeleteConfirmation
                    onCancel={handleStopRemovePlace}
                    onConfirm={handleRemovePlace}
                />
            </Modal>

            <header>
                <img src={logoImg} alt="Stylized globe"/>
                <h1>PlacePicker</h1>
                <p>
                    Create your personal collection of places you would like to visit or
                    you have visited.
                </p>
            </header>
            <main>
                {error && <Error title="An error occurred!" message={error.message} onConfirm={() => setError(null)}/>}
                {!error && (
                    <Places
                        title="I'd like to visit ..."
                        fallbackText="Select the places you would like to visit below."
                        isLoading={isFetching}
                        loadingText="Fetching your places..."
                        places={userPlaces}
                        onSelectPlace={handleStartRemovePlace}
                    />
                )}

                <AvailablePlaces onSelectPlace={handleSelectPlace}/>
            </main>
        </>
    );
}


