import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getCastAndReviews } from "resurces/resurses";
import ReviewsItem from "./ReviewsItem/ReviewsItem";

const Reviews = () => {

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    
useEffect(() => {
        if (!id) return;
        inReviews(id )
     }, [id]);  

    async function inReviews(id) {
         try {
      setIsLoading(true);
             const newData = await getCastAndReviews(id, 'reviews');
             setReviews(newData.results)
            }
      catch (error) {
      toast.error(`API NOT FAUND: ${error.message}`)
    } finally {setIsLoading(false)}
    }

    const showReviews = Array.isArray(reviews) && reviews.length > 0;
    return (
     <section>
            {isLoading && <Loader />}
            <h1>Reviews</h1>
             {reviews.length === 0 && <p>Sorry, but no rewiews</p>}
            <ul>
                {showReviews&&
                    reviews.map(({ id, author, content, updated_at}) => 
                        <ReviewsItem
                            key={id}
                            author={author}
                            content={content}
                            dataContent={updated_at}/>
                    )
                }
            </ul>
        </section>
    )
}
export default Reviews;