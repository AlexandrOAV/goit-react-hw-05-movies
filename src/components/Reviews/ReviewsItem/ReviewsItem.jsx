import css from './ReviewsItem.module.css'
const ReviewsItem = ({
     author,
     content,
    dataContent }) => {
    return (
         <li  className={ css.itemRewiew}>
            <h2 className={css.headItem}>{author}</h2>
            <p className={css.text}><b>Data conten: { dataContent.slice(0, 19)}</b></p>
            <p className={css.text}> {content}</p>            
        </li>
    )   
}
export default ReviewsItem;