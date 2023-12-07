import getAllMovie from "@/app/api/getAllMovie";
import React, { ReactNode, useEffect, useState } from "react"
import SimplePagination from "../SimplePagination";


interface Movie{
    title: string;
    genre: string;
    release_date: string;
    duration: string;
    description: string;
    image_url: string;
}


const MoviePage = () =>{
    const [cinemaId,setCinemaId] = useState(1)
    const [movie,setMovie] = useState<any>()
    const [movieCount, setMovieCount] = useState<ReactNode>(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [isAvailableOnly, setIsAvailableOnly] = useState(false);
    const [keyword, setKeyword] = useState<any>("");
    const [innerKeyword, setInnerKeyword] = useState<any>("");
    
  const incrementPage = () => {

    setPageNumber(pageNumber + 1);

  }

  const decrementPage = () => {

    if (pageNumber - 1 === 0) setPageNumber(1);
    else setPageNumber(pageNumber - 1);

  }
    useEffect(() => {

        const getProducts = async () => {
    
          const response = await getAllMovie(cinemaId, pageNumber, isAvailableOnly, keyword, innerKeyword);
          console.log(response)
          if (!response.movie && pageNumber > 1) setPageNumber(pageNumber - 1);
          else setMovie(response.movie);
    
          setMovieCount(response.count)
    
        }
    
        getProducts();
    
      }, [cinemaId, pageNumber, keyword, innerKeyword]);


      return(
        <div className='products_container'>
          <SimplePagination 
            pageNumber={ pageNumber } 
            onPreviousButtonClicked={ decrementPage }
            onNextButtonClicked={ incrementPage } 
            data={ movie } 
            type="customer-product"
            itemsPerRow={4}/>
          
        
        </div>
      );
}

export default MoviePage;