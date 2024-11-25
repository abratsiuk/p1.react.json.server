import { API_URL } from '../../config';

const getMovies = async (search, type) => {
    const typeParam = type !== 'all' ? `&type=${type}` : '';
    const response = await fetch(API_URL + `&s=${search}${typeParam}`);
    return await response.json();
};

export { getMovies };
