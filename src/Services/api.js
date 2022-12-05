import axios from "axios";
const API_KEY = "ba9435622413df35cd8d080b147a1f2b";
const BASE_URL = "https://api.themoviedb.org/3/";

export const fetchMovie = async () => {
	const trending = `${BASE_URL}trending/all/day?api_key=${API_KEY}`;
	const response = await axios.get(trending);
	return response;
};

const api = { fetchMovie };

export default api;
