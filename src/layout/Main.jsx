import React, { useState, useEffect } from 'react';
import { Movies } from '../component/Movies';
import { Preloader } from '../component/Preloader';
import { Search } from '../component/Search';
import { getHotels } from '../services/hotelsApi';

function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const reloadMovies = (search, type) => {
        setLoading(true);
        getHotels(search, type)
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        reloadMovies('matrix', 'all');
    }, []);

    return (
        <main className='container content'>
            <Search reloadMovies={reloadMovies} />
            {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
    );
}

export { Main };
