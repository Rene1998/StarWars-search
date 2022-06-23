import axios from 'axios'
import 'dotenv/config'

const axiosClient = axios.create()

axiosClient.defaults.baseURL = process.env.VUE_APP_API_STARWARS_URL
axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

export default axiosClient
