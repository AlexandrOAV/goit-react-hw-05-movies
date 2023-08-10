import { Loader } from "components/Loader/Loader";
import {FcRating} from 'react-icons/fc'




    
const DatailsMovie = ({
            isLoading,
            title,
            overview,
            voteAverage,
            url}) => {

       return (
        <div>
            {isLoading && <Loader />}
               <h1>{title} </h1>
               <p>Rating: <FcRating/> { voteAverage}</p>
                <div>
               <img src={url} alt={`poster${title}`} width={120} />
                   <p>{overview}</p>
                   
               </div>
        </div>
    )
}
export default DatailsMovie