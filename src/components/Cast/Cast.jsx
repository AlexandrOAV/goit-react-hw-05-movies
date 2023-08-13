import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getCastAndReviews } from "resurces/resurses";
import CastItem from "./CastItem/CastItem";
import css from "./Cast.module.css"
const Cast = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [cast, setCast] = useState([]);
   
    
     useEffect(() => {
        if (!id) return;
        inActorArray(id )
     }, [id]);   
    
async function inActorArray(id) {
         try {
      setIsLoading(true);
             const newData = await getCastAndReviews(id, 'credits');
             setCast(newData.cast)
            }
    
    catch (error) {
      toast.error(`API NOT FAUND: ${error.message}`)
    } finally {setIsLoading(false)}
    }
   
    const showCast = Array.isArray(cast) && cast.length > 0;
    
    return (
        <section className={css.container}>
             {isLoading && <Loader />}
            <h1>Cast</h1>
            <ul className={css.list}>
                {showCast&&
                    cast.map(({ name, character, id, profile_path }) => 
                        <CastItem
                            key={id}
                            name={name}
                            character={character}
                            actorImage={profile_path} />
                    )
                }
            </ul>
        </section>
    )
}
export default Cast;