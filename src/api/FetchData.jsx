import { useState, useEffect } from "react";

import {API_SETTINGS} from "../settings/apiRoutes.jsx";

const FetchData = ({ url, additionalHeaders = {} }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const defaultHeaders = {
            "Content-Type": API_SETTINGS.CONTENT_TYPE,
            "Public-Token": API_SETTINGS.PUBLIC_API_TOKEN,
        };

        // Merge the default headers with any additional headers passed as props
        const headers = { ...defaultHeaders, ...additionalHeaders };

        const options = {
            method: "GET",
            headers
        }

        if (!url) {
            setError("URL is required");
            setLoading(false);
            return;
        }

        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch Data");
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })
    }, []); // Empty array means this effect runs only once after the initial render

    return { data, loading, error };
}

export default FetchData;
