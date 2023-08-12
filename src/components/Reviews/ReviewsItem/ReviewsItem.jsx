const ReviewsItem = ({
     author,
     content,
    dataContent }) => {
    return (
         <li>
            <h2>{author}</h2>
            <p>Data conten: { dataContent.slice(0, 19)}</p>
            <p> {content}</p>            
        </li>
    )   
}
export default ReviewsItem;