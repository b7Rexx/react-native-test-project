import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
class ApiService {


  fetchHomeApi() {
    return axios.get(API_URL + '/home');
  }
}

export default new ApiService();
