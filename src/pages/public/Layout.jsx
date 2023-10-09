import { Outlet } from "react-router-dom";
import TopBar from "../../components/public/top-bar/TopBar";

function Layout() {
    return (
        <>
            <header>
                <TopBar />
            </header>
            <main id="page-content">
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
