import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../Services/api";

const MovieDetails = () => {
	const [movie, setMovie] = useState();

	const showMovieDetail = async (id) => {
		try {
			const fetchedData = await fetchMovieDetails(id);
			console.log(fetchedData);
			setMovie(fetchedData);
		} catch (error) {
			console.log(error);
		}
	};
	const { movieId } = useParams();

	useEffect(() => {
		showMovieDetail(movieId);
		console.log(movieId);
	}, []);

	if (movie) {
		return (
			<>
				{movie.poster_path && (
					<img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}></img>
				)}
				<h2>{movie.title}</h2>
				<span>user score: {Math.round(movie.vote_average * 10)}%</span>
				<h3>overview</h3>
				<p>{movie.overview ? movie.overview : "There's no overview"}</p>
				<h3>Generes</h3>
				<p>
					{movie.genres &&
						movie.genres.map((e) => {
							return `${e.name} `;
						})}
				</p>
			</>
		);
	}
};
export default MovieDetails;
