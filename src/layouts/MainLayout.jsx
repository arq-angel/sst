import { Outlet } from "react-router-dom";

import Header from '../partials/Header.jsx';
import Footer from '../partials/Footer.jsx';

const MainLayout = () => {
    return(
        <div className="flex flex-col min-h-screen">
            <header>
                <Header />
            </header>

            <main className="flex-grow">
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>


        </div>
    )
}

export default MainLayout;
