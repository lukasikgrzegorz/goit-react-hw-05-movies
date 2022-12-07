import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../Services/api";

const Reviews = () => {
	const [reviews, setReviews] = useState();

	const fetchThisMovieReviews = async (id) => {
		const fetchedData = await fetchMovieReviews(id);
		setReviews(fetchedData);
	};

	const { movieId } = useParams();

	useEffect(() => {
		fetchThisMovieReviews(movieId);
	}, [movieId]);

	if (reviews) {
		return (
			<ul>
				{!reviews[0] ? "There is no comments" : ""}
				{reviews.map((e) => {
					return (
						<li key={e.id}>
							<p>{e.author}</p>
							<p>{e.content}</p>
						</li>
					);
				})}
			</ul>
		);
	}
};

export default Reviews;
