import { FC, useContext, useEffect, useRef, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import useAxios from "../axios"
import { AxiosError } from "axios"
import { AuthContext, AuthContextType } from "../contexts/Auth"
import Forbidden from "./Forbidden"

type RequireUserAuthProp = {
    redirectTo: string
}

const RequireUserAuth: FC<RequireUserAuthProp> = ({redirectTo}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isForbidden, setIsForbidden] = useState(false)
    const [role, setRole] = useState<'user' | 'admin' | 'super'>()

    const {user, setUser} = useContext(AuthContext) as AuthContextType

    const axios = useRef(useAxios()).current

    useEffect(() => {
        const fetchMe = async () => {
            const me = await axios.get('/users/me') // checks the accessToken cookie
            
            if (me.data.role !== 'user') {
                setRole(me.data.admin ? 'admin' : 'super')
                setIsForbidden(true)
                throw new Error('Forbidden / not authorized')
            }
            else {
                const usr = {
                    userId: me.data.userId,
                    username: me.data.username,
                    email: me.data.email
                }
                setUser(usr)
            }
        }

        const refreshAccess = async () => {
            await axios.get('/auth/refresh-access') // checks refreshToken cookie
        }

        const handleErrors = () => {
            setUser(null)
        }

        const checkAuth = async () => {
            try {
                await fetchMe()
            } catch (err) {
                console.error('Error fetching me: ', err)

                if (err instanceof AxiosError && err.response?.status === 401)
                    try {
                        await refreshAccess()
                        await fetchMe()
                    } catch (err) {
                        console.error('Error refreshing access token: ', err)
                        handleErrors()
                    }
                else {
                    handleErrors()
                }
            } finally {
                setIsLoading(false)
            }
        }

        checkAuth()
    }, [axios, setUser])

    if (isLoading) return (<h3>Please wait</h3>)
    else if (isForbidden) return (<Forbidden role={role!} />)
    else return (!user) ? <Navigate to={redirectTo} /> : <Outlet />
}

export default RequireUserAuth