import { useState } from "react";
import { fetchMoviesByQuery } from "../Services/api";
import Searchbar from "../Components/Searchbar/Searchbar";
import { Link } from "react-router-dom";

const Movies = () => {
	const [movies, setMovies] = useState([]);

	const showFetchedMovies = async (query) => {
		try {
			const fetchedMovies = await fetchMoviesByQuery(query);
			console.log(fetchedMovies);
			setMovies([...fetchedMovies]);
		} catch (error) {
			console.log(error);
		}
	};

	const fetchMoviesByActualQuery = (query) => {
		showFetchedMovies(query);
	};

	return (
		<>
			<Searchbar onSubmit={fetchMoviesByActualQuery}></Searchbar>
			<ul>
				{movies.map((movie) => {
					return (
						<li key={movie.id}>
							<Link to={`${movie.id}`}>{movie.title}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Movies;
