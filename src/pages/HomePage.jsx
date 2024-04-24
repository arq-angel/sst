import MainLayout from "../layouts/MainLayout.jsx";

const HomePage = () => {
    return (
        <MainLayout>
            <div style={{ backgroundColor: 'green'}}>
                <h1>Welcome to the HomePage!</h1>
                <p>This is the main content of the HomePage.</p>
            </div>
        </MainLayout>
    );
}

export default HomePage;
