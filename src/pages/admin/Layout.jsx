import { Outlet } from 'react-router-dom';
import TopBar from '../../components/admin/top-bar/TopBar';

function Layout(props) {
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