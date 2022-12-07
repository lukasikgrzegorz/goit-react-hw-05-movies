import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../Services/api";

const Cast = () => {
	const [cast, setCast] = useState();

	const fetchThisMovieCast = async (id) => {
		const fetchedData = await fetchMovieCast(id);
		setCast(fetchedData);
	};

	const { movieId } = useParams();

	useEffect(() => {
		fetchThisMovieCast(movieId);
	}, []);

	if (cast) {
		return (
			<ul>
				{cast.map((e) => {
					return (
						<li key={e.id}>
							<img
								src={
									e.profile_path
										? `https://www.themoviedb.org/t/p/w138_and_h175_face/${e.profile_path}`
										: `https://via.placeholder.com/138x175?text=Theres+no+photo`
								}
								alt={e.name}
							/>
							<p>{e.name}</p>
							<p>character: {e.character}</p>
						</li>
					);
				})}
			</ul>
		);
	}
};

export default Cast;
