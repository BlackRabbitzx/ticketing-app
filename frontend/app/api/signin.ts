import User from '../models/user'
import axios from 'axios';
import { ENV } from '../util/ENV';

const signin = async(user:User) => {
    try{

        const response = await axios.post(ENV.API + 'signin', user);
        const result =  response.data
    
        if (result === 'Invalid Email Address') return -2
        else if (result === 'Invalid Password') return -3
        return result
      } catch(error){
    
        return -1
    
      }
}

export default signin