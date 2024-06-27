import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router"
import { Button, TextField } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import useAxios from "../../axios"
import { AuthContextType, useAuth } from "../../contexts/Auth"

type LoginValues = {
    email: string,
    password: string
}

const AdminLogin = () => {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onSubmit'
    })

    const navigate = useNavigate()

    const axios = useAxios()

    const { isAuthenticated, setIsAuthenticated, isLoading, setIsLoading } = useAuth() as AuthContextType

    const onSubmit: SubmitHandler<LoginValues> = async (data) => {
        try {
            await axios.post('/auth/login', {...data, role: 'admin'}, {withCredentials: true})

            setIsAuthenticated(true)
            navigate('/admin/dashboard')    
        } catch (err) {
            setIsAuthenticated(false)
        }
    }

    useEffect(() => {
        const checkRefreshToken = async () => {
            try {
                await axios.get('/auth/refresh-access')
                const me = await axios.get('/users/me')

                if (!me.data.admin) throw new Error('Forbidden / not authorized')

                setIsAuthenticated(true)                    
            } catch (err) {
                setIsAuthenticated(false)
            } finally {
                setIsLoading(false)
            }
        }

        checkRefreshToken()
    }, [axios, setIsAuthenticated])

    return (
        <>
            {
                (!isAuthenticated && !isLoading ? 
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField {...register('email')} label='Email' variant='outlined' />
                        <TextField {...register('password')} label='Password' variant='outlined' type="password"/>
                        <Button type="submit">Login</Button>
                    </form> : 
                    <Navigate to='/admin/dashboard' />
                )
            }
        </>
    )
}

export default AdminLogin