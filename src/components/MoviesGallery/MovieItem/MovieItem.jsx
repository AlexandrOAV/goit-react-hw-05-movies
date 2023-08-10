import { Link, useLocation } from "react-router-dom";

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieItem = ({movie, alt}) => {
    const { id, poster_path: posterImage, title } = movie;
    const location = useLocation();
    const urlPoster = 'https://image.tmdb.org/t/p/w500';
    const url =  posterImage ? `${urlPoster}${posterImage}` : defaultImg;
    return (
        <div>
            
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <h2>{ title}</h2>
        <img src={url} width={250} alt={alt} />
      </Link>
    </div>
    )
}
export default MovieItem;