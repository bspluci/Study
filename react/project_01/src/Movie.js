import React from "react";
// import PropTypes from "prop-types";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div>
      <h4>{title}</h4>
      <img src={poster} alt={title} />
      <p>{year}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

// Movie.propTypes = {
//     id: PropTypes.number.isRequired,
//     year: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// }

export default Movie;
