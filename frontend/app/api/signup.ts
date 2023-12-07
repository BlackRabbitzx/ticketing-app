import { ENV } from "../util/ENV";
import User from "../models/user";
import axios from "axios";

const signup = async (user: User) => {

  try{

    const response = await axios.post(ENV.API + 'signup', user);
    const result =  response.data

    if (result === 'Email is Not Unique') return -2
    else if (result === 'Mobile Phone Number is Not Unique') return -3

  } catch(error){

    return -1

  }
  
}

export default signup;