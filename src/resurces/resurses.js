import axios from 'axios';
import { toast } from 'react-toastify';


const KEY = 'b283a210ed534a6a364c9fa9b60e8619';
const BASE_URL = 'https://api.themoviedb.org/3';;

export async function getTrendingMovies(page) {
    const url = `${BASE_URL}/trending/movie/day`
    const options = {
        params: {
            api_key: KEY,
        page: page},
      
    };
    try {
        const response = await axios(url, options);
        const dataRespons = await response.data;
        // console.log('dataRespons: ', dataRespons);
        return dataRespons;
    }
    catch (error) {
        toast.error(`API not faund: ${error.message}`)
        throw new Error(error.message);
    }
}

export async function getMovieDetails(id) {
    const url = `${BASE_URL}/movie/${id}`
    const options = {
        params: {
            api_key: KEY,
            movie_id: id,
        },    
    }
    try {
        const response = await axios(url, options);
        const dataRespons = await response.data;
        // console.log('dataRespons: ', dataRespons);
        return dataRespons;
    }
    catch (error) {
        toast.error(`API not faund: ${error.message}`)
        throw new Error(error.message);
    }
};