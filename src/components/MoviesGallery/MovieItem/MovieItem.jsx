import { Link, useLocation } from "react-router-dom";
import css from './MovieItem.module.css'
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieItem = ({movie, alt}) => {
    const { id, poster_path: posterImage, title } = movie;
    const location = useLocation();
    const urlPoster = 'https://image.tmdb.org/t/p/w500';
    const url =  posterImage ? `${urlPoster}${posterImage}` : defaultImg;
    return (
      <li className={css.GalleryItem}> 
        
        <Link  to={`/movies/${id}`} state={{ from: location }}>
        <img className={css.GalleryItem_image} src={url} width={200} alt={alt} />
        </Link>
         <h2 className={css.movieTitle}>{ title}</h2>
    </li>
    )
}
export default MovieItem;