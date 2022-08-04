//* libraries
import { useState, useEffect } from "react";


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    useEffect(() => {
        getFetch();
    }, [url]);

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        });

        const response = await fetch(url);
        const data = await response.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        });
    };

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
};