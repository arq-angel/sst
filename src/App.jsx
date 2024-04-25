import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import Dashboard from "./pages/Dashboard";
import EachApplicationPage from "./pages/EachApplicationPage.jsx";
import EachCoursePage from "./pages/EachCoursePage.jsx";
import EditProfilePage from "./pages/EditProfilePage.jsx";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound.jsx";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import SearchResultPage from "./pages/SearchResultPage.jsx";

import MainLayout from "./layouts/MainLayout.jsx";

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/contact" element={<ContactPage />}/>
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/application/{id}" element={<EachApplicationPage />}/>
                <Route path="/course/{id}" element={<EachCoursePage />} />
                <Route path="/profile/edit" element={<EditProfilePage />}/>
                <Route path="/profile" element={<ProfilePage />}/>
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/search" element={<SearchResultPage />} />

                <Route path="*" element={<PageNotFound />} />
            </Route>
        )
    );

    return <RouterProvider router={router}/>;

}

export default App
