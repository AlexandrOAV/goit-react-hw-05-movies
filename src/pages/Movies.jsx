import MoviesGallery from "components/MoviesGallery/MoviesGallery";
import Searchbar from "components/Searchbar/Searchbar";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { serchMovies } from "resurces/resurses";

const Movies = () => {
    const [serchParams, setSerchParams] = useSearchParams();
    const [serchText, setserchText] = useState('');
    const [page, setPage] = useState(1);
    const [results, setResults] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    
    const querySearch = serchParams.get('query');
    
    


    useEffect(() => {
        if (!querySearch) return;
         async function addData() {
    try {
      setIsLoading(true);
        const newData = await serchMovies(querySearch);
              
        if (newData.results.length === 0) {
        toast.error('Movies not faund',  {
          position: "top-center",
          autoClose: 2000,
        })
        return;
      }
      setResults(prevResults => page === 1 ? newData.results : [...prevResults, ...newData.results]);
      setTotalResults(newData.total_results);
    } catch (error) {
      toast.error(`API NOT FAUND: ${error.message}`)
    } finally {setIsLoading(false)}
        }
        addData()
    }, [page, querySearch]
    )
    
const clickInLoadMore = () => setPage(prevState => prevState + 1);
    
    function hendleSerchSubmit(serchMovie) {
             if (serchText !== serchMovie) {
         setSerchParams({
                       query: serchMovie
              })
                 setserchText(querySearch)
                 setPage(1)
     }
    }
        return (
       <section>
  
            <Searchbar onSubmit={hendleSerchSubmit} />
            {querySearch &&
                <MoviesGallery
                results={results}
                alt={`poster movies ${results.title}`}
                totalResults={totalResults}
                clickInLoadMore={clickInLoadMore}
                 isLoading={isLoading}
             querySearch={querySearch}/>
                }
        </section>
    )
}
export default Movies;