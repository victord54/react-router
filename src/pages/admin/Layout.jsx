import React from 'react';
import TopBar from '../../components/admin/top-bar/TopBar';
import { Outlet } from 'react-router-dom';

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