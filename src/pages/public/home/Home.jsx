import React from "react";
import "./home.css";

function Home() {
    return (
		<>
		<h2>Homepage</h2>
		<div className="home-container">
		{[...Array(10)].map((x, i) =>
			<div className="home-tile" key={i}>Hello</div>
  		)}
		</div>
		</>
	);
}

export default Home;
