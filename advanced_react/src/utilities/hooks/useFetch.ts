import {Dispatch, SetStateAction, useEffect, useState} from "react";

interface FetchInput <T> {
    fetchData: () => Promise<T>,
    initialValue: T
}

interface FetchResponse<T> {
    isFetching: boolean,
    error: { message: string } | null,
    data: T,
    setError: Dispatch<SetStateAction<{ message: string } | null>>,
    setFetchedData: Dispatch<SetStateAction<T>>
}

export function useFetch<T>({fetchData, initialValue}: FetchInput<T>): FetchResponse<T> {

    const [isFetching, setIsFetching] = useState(false);
    const [fetchedData, setFetchedData] = useState<T>(initialValue);
    const [error, setError] = useState<{ message: string } | null>(null)

    useEffect(() => {

        async function callFetch(): Promise<void> {
            setIsFetching(true);
            try {
                const data = await fetchData() as T;
                setFetchedData(data);
            } catch (error: unknown) {
                setError({message: (error as Error).message || 'Failed to fetch data.'});
            }
            setIsFetching(false);
        }

        void callFetch();
    }, [fetchData]);
    
    return {isFetching, error, data: fetchedData, setFetchedData, setError};
}