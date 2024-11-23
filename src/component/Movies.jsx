import React from 'react';
import PropTypes from 'prop-types';
import { Movie } from './Movie';

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className='movies'>
            {movies.length ? (
                movies.map((movie) => (
                    <Movie
                        key={movie.imdbID}
                        {...movie}
                    />
                ))
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
}
Movies.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            imdbID: PropTypes.string.isRequired,
        })
    ),
};

export { Movies };
