

import MoviesGallery from "components/MoviesGallery/MoviesGallery";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { getTrendingMovies } from "resurces/resurses";


const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [results, setResults] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
   
    useEffect(() => {
      addData( page)
    }, [page])

     async function addData(page) {
    try {
      setIsLoading(true);
      const newData = await getTrendingMovies(page);
    //   console.log('newData.results ', newData.results);
      if (newData.results === 0) {
        toast.error('Movies not faund')
        return;
      }
      setResults(prevResults => page === 1 ? newData.results : [...prevResults, ...newData.results]);
      setTotalResults(newData.total_results);
    } catch (error) {
      toast.error(`API NOT FAUND: ${error.message}`)
    } finally {setIsLoading(false)}
    }
    
const clickInLoadMore = () => setPage(prevState => prevState + 1);

   
    

    return (
        <section>
             <MoviesGallery
                results={results}
                alt={`poster movies ${results.title}`}
                totalResults={totalResults}
                clickInLoadMore={clickInLoadMore}
                isLoading={isLoading}
          />
     
        </section>
    )
}
export default Home;