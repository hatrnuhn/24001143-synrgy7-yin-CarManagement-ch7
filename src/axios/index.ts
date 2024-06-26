import axios from 'axios'

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true
  })

  // axiosInstance.interceptors.request.use(
  //   (config) => {
  //     if (token) {
  //       config.headers['Authorization'] = `Bearer ${token}`
  //     }
  //     return config
  //   },
  //   (error) => {
  //     return Promise.reject(error)
  //   }
  // )

  return axiosInstance
}

export default useAxios
