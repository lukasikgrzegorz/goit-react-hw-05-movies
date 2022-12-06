import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../Services/api";
import { Link } from "react-router-dom";

const Home = () => {
	const [trending, setTrending] = useState([]);

	const showTrending = async () => {
		try {
			const fetchedMovies = await fetchTrendingMovies();
			setTrending(fetchedMovies);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		showTrending();
	}, []);

	return (
		<ul>
			{trending.map((movie) => {
				return (
					<li key={movie.id}>
						<Link to={`movies/${movie.id}`}>
							{movie.media_type === "movie" ? movie.title : movie.name}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Home;
