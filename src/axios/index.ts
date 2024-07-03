import axios from 'axios'

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: 'https://exceptional-lorna-synrgy-5d523791.koyeb.app/api',
    // baseURL: 'http://localhost:3000/api',
    withCredentials: true
  })

  return axiosInstance
}

export default useAxios
