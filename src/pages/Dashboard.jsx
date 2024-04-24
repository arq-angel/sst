import MainLayout from "../layouts/MainLayout.jsx";

const Dashboard = () => {
    return(
        <MainLayout>
            <div style={{backgroundColor: 'green'}}>
                <h1>Welcome to the Dashboard!</h1>
                <p>This is the main content of the Dashboard.</p>
            </div>
        </MainLayout>
    )
}

export default Dashboard;
