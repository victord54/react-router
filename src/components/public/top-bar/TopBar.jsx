import { Link, NavLink } from "react-router-dom";
import "./top-bar.css";

function TopBar() {
	return (
			<nav>
				<Link to={"/"}><img src="/img/vite.svg" width="64px" alt="logo" /></Link>
				<ul>
					<li><NavLink to={"/"}>Home</NavLink></li>
					<li><NavLink to={"/about"}>About</NavLink></li>
					<li><NavLink to={"/contact"}>Contact</NavLink></li>
				</ul>
			</nav>
	);
}

export default TopBar;