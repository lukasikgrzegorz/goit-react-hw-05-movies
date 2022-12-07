import { useEffect, useState } from "react";
import { fetchMoviesByQuery } from "../Services/api";
import Searchbar from "../Components/Searchbar/Searchbar";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();

	const actualQuery = searchParams.get("query");

	const showFetchedMovies = async (query) => {
		try {
			const fetchedMovies = await fetchMoviesByQuery(query);
			setMovies([...fetchedMovies]);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setMovies([]);
		if (actualQuery) {
			showFetchedMovies(actualQuery);
		}
	}, [actualQuery]);

	return (
		<>
			<Searchbar onSubmit={(e) => setSearchParams({ query: e })}></Searchbar>
			<ul>
				{movies.map((movie) => {
					return (
						<li key={movie.id}>
							<Link to={`${movie.id}`} state={{ from: `/movies/?${searchParams}` }}>
								{movie.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Movies;
