import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./Components/SharedLayout/SharedLayout";

const Home = lazy(() => import("./Pages/Home"));
const Movies = lazy(() => import("./Pages/Movies"));
const MovieDetails = lazy(() => import("./Components/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Components/Cast/Cast"));
const Reviews = lazy(() => import("./Components/Reviews/Reviews"));

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<Home />} />
				<Route path="movies" element={<Movies />} />
				<Route path="movies/:movieId" element={<MovieDetails />}>
					<Route path="cast" element={<Cast />}></Route>
					<Route path="reviews" element={<Reviews />}></Route>
				</Route>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Route>
		</Routes>
	);
}

export default App;
