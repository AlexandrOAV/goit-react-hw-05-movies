import DatailsMovie from "components/DatailsMovie/DatailsMovie"
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getMovieDetails } from "resurces/resurses";

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [overview, setOverview] = useState('');
    const [voteAverage, setVoteAverage] = useState('');
    const [posterImage, setPosterImage] = useState('')

    useEffect(() => {
        if (!id) return;
        addDateDatails(id )
}, [id]);

  

     async function addDateDatails(id) {
         try {
      setIsLoading(true);
      const newData = await getMovieDetails(id);
             const { title, overview, vote_average, poster_path } = newData;
             setTitle(title);
             setOverview(overview);
             setVoteAverage(vote_average);
             setPosterImage(poster_path);
             }
    
    catch (error) {
      toast.error(`API NOT FAUND: ${error.message}`)
    } finally {setIsLoading(false)}
    }
    const urlPoster = 'https://image.tmdb.org/t/p/w500';
    const url =  posterImage ? `${urlPoster}${posterImage}` :setTimeout(()=>defaultImg, 1000) ;
    return (
        <>
        <DatailsMovie
            isLoading={isLoading}
            title={title}
            overview={overview}
            voteAverage={voteAverage}
            url={url}
        />
             <ul>
                <li><Link to='cast'>Cast</Link></li>
                <li><Link to='reviews'>Reviews</Link></li> 
            </ul>
            <Outlet/>
            </>
    )
}
export default MovieDetails