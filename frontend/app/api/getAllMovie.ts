import { ENV } from "../util/ENV";
import axios from "axios";

const getAllMovie = async (cinemaID: Number, pageNumber: Number, isAvailableOnly: boolean, keyword?: string, innerKeyword?: string) => {

  try{

    const getAllMovieBody = {
      "cinema_id": Number(cinemaID),
      "page_number": Number(pageNumber),
      "is_available_only": isAvailableOnly,
      keyword: keyword ? keyword : '',
      inner_keyword: innerKeyword ? innerKeyword : ''
    }

    const response = await axios.post(ENV.API + 'get-movie' , getAllMovieBody);
    const result =  response.data;
    return result;

  } catch (error){

    return -1;

  }
  
}
 
export default getAllMovie;