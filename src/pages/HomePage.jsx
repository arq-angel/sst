import {useContext, useEffect} from "react";
import {ApiDataContext} from "../contexts/ApiDataContext.jsx";
import FetchData from "../api/FetchData.jsx";
import {API_GENERAL_ROUTES} from "../settings/apiRoutes.jsx";

const HomePage = () => {
    const {updateApiData} = useContext(ApiDataContext);

    const {data, loading, error} = FetchData({
        url: API_GENERAL_ROUTES.LANDING_PAGE_MAKER,
        additionalHeaders: {
            // "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
    });

    useEffect(() => {
        if (data) {
            updateApiData(data)
        }
    }, [data, updateApiData]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='p-3'>
            <h1>Welcome to the HomePage!</h1>
            <p>This is the main content of the HomePage.</p>

            <h1>API Call response</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default HomePage;
