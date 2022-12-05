import React, { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";

const SharedLayout = () => {
	return (
		<div>
			<header>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/movies">Movies</Link>
				</nav>
			</header>
			<Suspense fallback={<div>Loading page...</div>}>
				<Outlet></Outlet>
			</Suspense>
		</div>
	);
};

export default SharedLayout;
