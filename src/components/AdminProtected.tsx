import React, { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { AuthContextType, useAuth } from "../contexts/Auth"
import useAxios from "../axios"
import Forbidden from "./Forbidden"

interface ProtectedProps {
    children: JSX.Element
    redirectTo: string
}

const AdminProtected: React.FC<ProtectedProps> = ({children, redirectTo}) => {
    const { isAuthenticated, setIsAuthenticated } = useAuth() as AuthContextType
    const [loading, setLoading] = useState(true)
    const [isForbidden, setIsForbidden] = useState(false)

    const axios = useAxios()

    useEffect(() => {
        const fetchMe = async () => {
            try {
                const me = await axios.get('/users/me') // checks the accessToken cookie
                
                if (!me.data.admin) {
                    setIsForbidden(true)
                    throw new Error('Forbidden / not authorized')
                }
                else setIsAuthenticated(true)
            } catch (err) {
                console.error(err)
                setIsAuthenticated(false)
                throw err
            } 
        }

        const checkAuthentication = async () => {
            try {
                await fetchMe()
            } catch (error) {
                // If /users/me fails, attempt to refresh the access token
                console.log(isForbidden)
                if (!isForbidden) {
                    try {
                        await axios.get('/auth/refresh-access', { withCredentials: true }) // requires refreshToken cookie
                        console.log("Access token refreshed successfully")
                        setIsAuthenticated(true)
                    } catch (err) {
                        console.error('Error refreshing access token:', err)
                        setIsAuthenticated(false)
                    }
                }
            } finally {
                setLoading(false)
            }
        }

        checkAuthentication()
    }, [axios, isForbidden, setIsAuthenticated])

    if (loading) return (<h3>Please wait</h3>)
    else if (isForbidden) return (<Forbidden />)
    else return (!isAuthenticated) ? <Navigate to={redirectTo} /> : children
}

export default AdminProtected