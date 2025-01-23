import {useRef, useState, useCallback, ReactNode} from 'react';

import {Place, Places} from './components/Places';
import {Modal} from './components/Modal';
import {DeleteConfirmation} from './components/DeleteConfirmation';
import logoImg from '/logo.png';
import {AvailablePlaces} from './components/AvailablePlaces';
import {fetchUserPlaces, updateUserPlaces} from './utilities/clients/http';
import {Error} from './components/Error.jsx';
import {useFetch} from "./utilities/hooks/useFetch.ts";

export const AppHooks = (): ReactNode => {
    const selectedPlace = useRef<Place | null>(null);

    const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState<{ message: string } | null>(null);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    
    const {isFetching, error, data, setFetchedData, setError} = useFetch({backendFetchFunction: fetchUserPlaces, initialValue: []});


    function handleStartRemovePlace(place: Place) {
        setModalIsOpen(true);
        selectedPlace.current = place;
    }

    function handleStopRemovePlace() {
        setModalIsOpen(false);
    }

    async function handleSelectPlace(selectedPlace: Place) {
        // await updateUserPlaces([selectedPlace, ...userPlaces]);

        setFetchedData(prevPlaces => {
            if (!prevPlaces) {
                prevPlaces = [];
            }
            if (prevPlaces.some((place) => place.id === selectedPlace.id)) {
                return prevPlaces;
            }
            return [selectedPlace, ...prevPlaces];
        });

        try {
            await updateUserPlaces([selectedPlace, ...data]);
        } catch (error: unknown) {
            setFetchedData(data);
            setErrorUpdatingPlaces({
                message: (error as Error).message || 'Failed to update places.',
            });
        }
    }

    const handleRemovePlace = useCallback(
        async function handleRemovePlace() {
            setFetchedData((prevPickedPlaces) =>
                prevPickedPlaces.filter(
                    (place) => place.id !== selectedPlace.current?.id
                )
            );

            try {
                await updateUserPlaces(
                    data.filter((place) => place.id !== selectedPlace.current?.id)
                );
            } catch (error: unknown) {
                setFetchedData(data);
                setErrorUpdatingPlaces({
                    message: (error as Error).message || 'Failed to delete place.',
                });
            }

            setModalIsOpen(false);
        },
        [data, setFetchedData]
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
                        places={data!}
                        onSelectPlace={handleStartRemovePlace}
                    />
                )}

                <AvailablePlaces onSelectPlace={handleSelectPlace}/>
            </main>
        </>
    );
}


