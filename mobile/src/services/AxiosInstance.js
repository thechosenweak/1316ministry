import axios from 'axios';
import { getEnvVars } from './Environment';

const { apiUrl } = getEnvVars();

const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer 11111111111111111111111111111`
    return config
  },
  (err) => Promise.reject(err)
)

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  (err) => Promise.reject(err)
)

export default axiosInstance;

export function ApiGet(apiEndpoint, timeout=20000){
  apiEndpoint = apiUrl + apiEndpoint;
  return axiosInstance({
    method: 'GET',
    url: apiEndpoint,
    baseUrl: apiUrl,
    timeout: timeout
  })
}

export function ApiPost(apiEndpoint, apiData, timeout=20000){
  apiEndpoint = apiUrl + apiEndpoint;
  return axiosInstance({
    method: 'POST',
    url: apiEndpoint,
    baseUrl: apiUrl,
    data: apiData,
    timeout: timeout
  })
}
