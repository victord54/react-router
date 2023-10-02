import { Link, useRouteError } from "react-router-dom";
import TopBar from "../../../components/public/top-bar/TopBar";
import "./error-page.css";

function ErrorPage() {
	const error = useRouteError();
	// console.log(error);

	return (
		<div id="error-page">
			<TopBar />
			<h2>Oops</h2>
			<div id="error-page-content">
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>
						Error {error.status} : {error.statusText}
					</i>
					<br />
				</p>
				<p>{error.error.message}</p>
				<p>
					Go back to real life : <Link to={"/"}>Home</Link>
				</p>
			</div>
		</div>
	);
}

export default ErrorPage;
