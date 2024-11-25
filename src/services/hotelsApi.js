import { API_URL } from '../config';

const getHotels = async (search, type) => {
    const typeParam = type !== 'all' ? `&type=${type}` : '';
    const response = await fetch(API_URL + `&s=${search}${typeParam}`);
    return await response.json();
};

export { getHotels };
