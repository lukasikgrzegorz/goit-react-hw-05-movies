import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../Services/api";

const MovieDetails = () => {
	const [movie, setMovie] = useState();
	const location = useLocation();
	const backLinkHref = location.state?.from ?? "/movies";

	const showMovieDetail = async (id) => {
		try {
			const fetchedData = await fetchMovieDetails(id);
			setMovie(fetchedData);
		} catch (error) {
			console.log(error);
		}
	};
	const { movieId } = useParams();

	useEffect(() => {
		showMovieDetail(movieId);
	}, [movieId]);

	if (movie) {
		return (
			<>
				<Link to={backLinkHref}>go back</Link>
				{movie.poster_path && (
					<img
						src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
						alt={`${movie.title}`}
					></img>
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
				<Link to="cast">Cast</Link>
				<Link to="reviews">Reviews</Link>
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet></Outlet>
				</Suspense>
			</>
		);
	}
};
export default MovieDetails;
