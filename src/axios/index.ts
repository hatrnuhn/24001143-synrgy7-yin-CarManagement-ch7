import axios from 'axios'

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: 'https://exceptional-lorna-synrgy-5d523791.koyeb.app/api',
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
