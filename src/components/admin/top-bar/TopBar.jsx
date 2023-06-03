import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function TopBar(props) {
	return (
		<div>
			<nav>
				<Link to={"/"}><img src="/img/vite.svg" width="64px" alt="logo" /></Link>
				<ul>
					<li><NavLink to={""}>Home</NavLink></li>
					<li><NavLink to={"users"}>Users</NavLink></li>
				</ul>
			</nav>
		</div>
	);
}

export default TopBar;