import { ENV } from "../util/ENV";
import axios from "axios";

const getMovieByID = async (movieID: string) => {

  try{

    const body = {
      movie_id: movieID 
    }

    const response = await axios.post(ENV.API + 'get-movie-by-id' , body);
    const result =  response.data;

    if (result === 'Shop is Banned') return -2;

    return result;

  } catch (error){

    return -1;

  }
  
}
 
export default getMovieByID