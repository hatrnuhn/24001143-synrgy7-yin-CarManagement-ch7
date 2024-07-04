import React, { useContext, useEffect, useRef, useState } from "react"
import { Navigate } from "react-router-dom"
import useAxios from "../axios"
import Forbidden from "./Forbidden"
import { AuthContext, AuthContextType } from "../contexts/Auth"

interface ProtectedProps {
    children: JSX.Element
    redirectTo: string
}

const AdminProtected: React.FC<ProtectedProps> = ({children, redirectTo}) => {
    const {admin, setAdmin} = useContext(AuthContext) as AuthContextType
    const [isLoading, setIsLoading] = useState(true)
    const [isForbidden, setIsForbidden] = useState(false)
    const [role, setRole] = useState<'user' | 'admin' | 'super'>()

    const axios = useRef(useAxios()).current
    
    useEffect(() => {
        const fetchMe = async () => {
            try {
                const me = await axios.get('/users/me') // checks the accessToken cookie
                
                if (!me.data.admin) {
                    setRole(me.data.super ? 'super' : 'user')
                    setIsForbidden(true)
                    throw new Error('Forbidden / not authorized')
                }
                else {
                    const adm = {
                        adminId: me.data.admin.id,
                        username: me.data.username,
                        email: me.data.email
                    }
                    setAdmin(adm)
                }
            } catch (err) {
                console.error(err)
                throw err
            } 
        }

        const checkAuthentication = async () => {
            try {
                await fetchMe()
            } catch (error) {
                // If /users/me fails, attempt to refresh the access token
                if (!isForbidden) {
                    try {
                        await axios.get('/auth/refresh-access', { withCredentials: true }) // requires refreshToken cookie
                        console.log("Access token refreshed successfully")
                        await fetchMe()
                    } catch (err) {
                        console.error('Error refreshing access token:', err)
                    }
                }
            } finally {
                setIsLoading(false)
            }
        }

        checkAuthentication()
    }, [axios, isForbidden, setIsLoading, setAdmin])

    if (isLoading) return (<h3>Please wait</h3>)
    else if (isForbidden) return (<Forbidden role={role!} />)
    else return (!admin) ? <Navigate to={redirectTo} /> : children
}

export default AdminProtected