import "./App.css";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import Cast from "./Components/Cast/Cast";
import Reviews from "./Components/Reviews/Reviews";

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
			</Route>
		</Routes>
	);
}

export default App;
