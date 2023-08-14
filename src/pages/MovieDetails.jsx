import DatailsMovie from "components/DatailsMovie/DatailsMovie"
import { useRef } from "react";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getMovieDetails } from "resurces/resurses";

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [overview, setOverview] = useState('');
    const [voteAverage, setVoteAverage] = useState('');
    const [posterImage, setPosterImage] = useState('');
    const [movieRelise, setMovieRelise] = useState('');

    const location = useLocation();

    const backStap = useRef(location.state?.from??"/")

    useEffect(() => {
        if (!id) return;
        addDateDatails(id )
}, [id]);
     async function addDateDatails(id) {
         try {
      setIsLoading(true);
      const newData = await getMovieDetails(id);
             const { title, overview, vote_average, poster_path, release_date
 } = newData;
             setTitle(title);
             setOverview(overview);
             setVoteAverage(vote_average);
             setPosterImage(poster_path);
             setMovieRelise(release_date);
             }
    catch (error) {
      toast.error(`API NOT FAUND: ${error.message}`)
    } finally {setIsLoading(false)}
  }
  
  const urlPoster = 'https://image.tmdb.org/t/p/w500';
  const url = posterImage ? `${urlPoster}${posterImage}` : defaultImg;
  
    return (
      <section>
                <DatailsMovie
                isLoading={isLoading}
                title={title}
                overview={overview}
                voteAverage={voteAverage}
                url={url}
                movieRelise={movieRelise}
                backStap={backStap}
        />
          <Outlet/>
            </section>
    )
}
export default MovieDetails