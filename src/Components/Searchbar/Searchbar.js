import React from "react";

const Searchbar = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const query = e.target.query.value;
		props.onSubmit(query);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="query"></input>
			<button type="submit">Search</button>
		</form>
	);
};

export default Searchbar;
