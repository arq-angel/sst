import PropTypes from "prop-types";

import Header from '../partials/Header.jsx';
import Footer from '../partials/Footer.jsx';

const MainLayout = ({ children }) => {
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node,
}

export default MainLayout;
