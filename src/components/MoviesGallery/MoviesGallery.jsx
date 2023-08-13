import { Button } from "components/Button/Button"
import { Loader } from "components/Loader/Loader";
import { nanoid } from "nanoid";
import MovieItem from "./MovieItem/MovieItem";
import css from './MoviesGallery.module.css'


const MoviesGallery = ({ results, alt, totalResults, clickInLoadMore, isLoading, querySearch }) => {
    const showButton = results.length > 0 && results.length < totalResults;
    const showPoster = Array.isArray(results) && results.length > 0;
     return (
        <section className={css.container}>
             {showPoster && !querySearch && <h1>Popular movies today</h1>}
             {querySearch&&showPoster&& <h2>Found movies on request <span>{querySearch}</span> : { totalResults} </h2>}
            <ul className={css.moviesGallery}>
            {showPoster&& results.map(movie => <MovieItem key={nanoid(10)} movie={movie} alt={ alt} />)}
         </ul>
         {isLoading && <Loader />}
        {showButton &&
        <Button
          totalResults={totalResults}
          onClick={clickInLoadMore} />}
        </section>
    )
}
export default MoviesGallery