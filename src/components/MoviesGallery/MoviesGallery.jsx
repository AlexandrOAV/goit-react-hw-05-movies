import { Button } from "components/Button/Button"
import { Loader } from "components/Loader/Loader";
import MovieItem from "./MovieItem/MovieItem";
import css from './MoviesGallery.module.css'


const MoviesGallery = ({ results, alt, totalResults, clickInLoadMore, isLoading }) => {
    // console.log(results)
    const showButton = results.length > 0 && results.length < totalResults;
    const showPoster = Array.isArray(results) && results.length > 0;
    
    return (
        <div>
            {isLoading && <Loader />}
            <h1>Popular movies today</h1>
            <ul className={css.moviesGallery}>
            {showPoster&& results.map(movie => <MovieItem key={movie.id} movie={movie} alt={ alt} />)}
            </ul>
                {showButton &&
        <Button
          totalResults={totalResults}
          onClick={clickInLoadMore} />}
        </div>
    )
}
export default MoviesGallery