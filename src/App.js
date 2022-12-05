import "./App.css";
import { fetchMovie } from "./Services/api";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import Cast from "./Components/Cast/Cast";
import Reviews from "./Components/Reviews/Reviews";

const fetchTrending = async () => {
	try {
		const movies = await fetchMovie();
		console.log(movies);
	} catch (error) {
		console.log(error);
	}
};

fetchTrending();

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<Home />} />
				<Route path="movies" element={<Movies />} />
				<Route path="movies/:movieId" elemnt={<MovieDetails />}>
					<Route path="cast" elemnt={<Cast />}></Route>
					<Route path="reviews" elemnt={<Reviews />}></Route>
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
