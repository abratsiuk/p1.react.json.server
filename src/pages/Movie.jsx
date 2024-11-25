import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../services/movieApi';
import { MovieFull } from '../component/MovieFull';
import { Preloader } from '../component/Preloader';

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getMovie(id)
            .then((data) => {
                setMovie(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    return <>{loading ? <Preloader /> : <MovieFull movie={movie} />}</>;
}

export { Movie };
