
import {FcRating} from 'react-icons/fc'
import { Link } from "react-router-dom";
import css from './DatailsMovie.module.css'
    
const DatailsMovie = ({
    title,
    overview,
    voteAverage,
    url,
    movieRelise,
    backStap
            }) => {

       return (
        <section className={css.container}>
               <Link to={backStap.current} className={css.link}>&lt; Back to go</Link>
               <h1 className={css.movieTitle}>{title} </h1>
               <div className={css.blockInfo}>
               <img src={url} alt={`poster${title}`} width={250} />
                   <p className={`${css.text} ${css.textInfo}`}>{overview}
                       <span  className={css.textData}>
                           Release date: { movieRelise}
                       </span>
                   </p>
                     <p className={css.textRating}><span>Rating:</span> <span>{ voteAverage} <FcRating/></span> </p>
               </div>
                     <ul className={css.itemDetail}>
                <li className={css.link}><Link className={css.addLink} to='cast'>Cast</Link></li>
                <li className={css.link}><Link className={css.addLink} to='reviews'>Reviews</Link></li> 
            </ul>
        </section>
    )
}
export default DatailsMovie