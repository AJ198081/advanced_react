import {useCallback, useEffect, useState} from "react";

async function sendHttpRequest<T>(url: string, config: RequestInit): Promise<T> {

    const response = await fetch(url, config);

    const json = await response.json() as T;

    if (response.status !== 200) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    return json;
}


interface UseHttpProps {
    url: string,
    config: RequestInit,
}

export function useHttp<T>({url, config}: UseHttpProps) {

    const [error, setError] = useState<{ message: string; } | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [responseData, setResponseData] = useState<T | null>(null)

    const sendRequest = useCallback(async function sendRequest() {
        setIsLoading(true);
        try {
            const response = await sendHttpRequest(url, config) as T;
            setResponseData(response);
        } catch (err) {
            setError({
                message: (err as Error).message || 'Failed to fetch data.'
            });
        }
        setIsLoading(false);
    }, [url, config]);


    useEffect(() => {
        if (config && config.method === 'GET') {
            void sendRequest();
        }
    });

    return {
        isLoading,
        error,
        responseData: responseData,
        sendRequest,
    }
}
