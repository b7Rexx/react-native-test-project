import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
class ApiService {

  fetchTrendingFlats() {
    return axios.get(API_URL + '/trendingFlats');
  }

  fetchBestPicks() {
    return axios.get(API_URL + '/bestPicks');
  }
}

export default new ApiService();
