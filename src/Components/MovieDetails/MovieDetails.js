import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../Services/api";

const MovieDetails = () => {
	const [movie, setMovie] = useState();
	let location = useLocation();
	const backLinkHref = location.state?.from ?? "/";
	location = "";

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
	}, []);

	if (movie) {
		return (
			<>
				<Link to={backLinkHref}>go back</Link>
				<img
					src={
						movie.poster_path
							? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`
							: `https://via.placeholder.com/220x330?text=Theres+no+photo`
					}
					alt={`${movie.title}`}
				/>
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
				<Link to="cast" state={{ from: `${backLinkHref}` }}>
					Cast
				</Link>
				<Link to="reviews" state={{ from: `${backLinkHref}` }}>
					Reviews
				</Link>
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet></Outlet>
				</Suspense>
			</>
		);
	}
};
export default MovieDetails;
