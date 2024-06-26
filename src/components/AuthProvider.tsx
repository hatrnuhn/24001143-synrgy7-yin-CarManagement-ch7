// import axios, { InternalAxiosRequestConfig } from "axios"
// import { useEffect, useLayoutEffect, useState } from "react"

// interface AxiosRequestCustomConfig<T = unknown> extends InternalAxiosRequestConfig<T> {
//     _retry: boolean
// }
  
// // interface AxiosCustomResponse<T = unknown, D = unknown> extends AxiosResponse<T, D> {
// //     config: AxiosRequestCustomConfig<D>;
// // }
// // interface AxiosCustomError<T = unknown, D = unknown> extends AxiosError<T, D> {
// //     config: AxiosRequestCustomConfig<D>;
// // }

// const AuthProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
//     const [accessToken, setAccessToken] = useState<string | null>(null)

    
//     useEffect(() => {
//         const fetchMe = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/api/auth/refresh-access', {withCredentials: true})

//                 return response.data.accessToken
//             } catch (err) {
//                 console.error(err)
//                 throw err
//             }
//         }

//         fetchMe()
//             .then((accessToken) => setAccessToken(accessToken))
//             .catch(() => setAccessToken(null))
//     }, [])

//     useLayoutEffect(() => {
//         const authInterceptor = axios.interceptors.request.use((config) => {
//             const customConfig = config as AxiosRequestCustomConfig
//             customConfig.headers.Authorization = 
//                 !customConfig._retry && accessToken ?
//                     `Bearer ${accessToken}` :
//                     customConfig.headers.Authorization

//             return customConfig
//         })

//         return () => {
//             axios.interceptors.request.eject(authInterceptor)
//         }
//     }, [accessToken])

//     return (
//         // <AuthContext.Provider value={{
//         //     token: accessToken,
//         //     setToken: setAccessToken
//         // }}>
//         //     {children}
//         // </AuthContext.Provider>
//         <></>
//     ) 
// }

// export default AuthProvider