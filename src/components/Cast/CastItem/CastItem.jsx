import css from './CastItem.module.css'
const CastItem = ({ name, character, actorImage }) => {
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    const urlPoster = 'https://image.tmdb.org/t/p/w500';
    const url =  actorImage ? `${urlPoster}${actorImage}` :defaultImg ;
   
    return (
        <li className={css.itemRewiew}>
            <h2 className={css.headItem}>{name}</h2>
            <img src={url} alt={name} width={100} />
            <p className={css.text}>In the role:  {character}</p>            
        </li>
    )
}
export default CastItem;