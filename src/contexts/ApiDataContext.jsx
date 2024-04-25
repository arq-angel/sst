import { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';


export const ApiDataContext = createContext();

export const ApiDataProvider = ({ children }) => {
    const [apiData, setApiData] = useState(null);

    const updateApiData = useCallback((data) => {
        setApiData(data);
    }, []);

    return (
        <ApiDataContext.Provider value={{ apiData, updateApiData }}>
            {children}
        </ApiDataContext.Provider>
    )
}

ApiDataProvider.propTypes = {
    children: PropTypes.node.isRequired // This validates that children is a React node and is required
};
