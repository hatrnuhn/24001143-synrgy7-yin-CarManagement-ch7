import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Navigate } from "react-router"
import { SubmitHandler, useForm } from "react-hook-form"
import useAxios from "../../axios"
import Forbidden from "../../components/Forbidden"

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

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isForbidden, setIsForbidden] = useState(false)
    const [role, setRole] = useState<'user' | 'admin' | 'super'>()
    const [isLoading, setIsLoading] = useState(true)

    const axios = useRef(useAxios()).current

    const onSubmit: SubmitHandler<LoginValues> = async (data) => {
        try {
            await axios.post('/auth/login', {...data, role: 'admin'})

            setIsAuthenticated(true)
        } catch (err) {
            console.error('Error logging-in: ', err)
            setIsAuthenticated(false)
        }
    }

    useEffect(() => {
        const checkRefreshToken = async () => {
            try {
                await axios.get('/auth/refresh-access') // checks refreshToken
                const me = await axios.get('/users/me')

                if (!me.data.admin) {
                    setRole(me.data.super ? 'super' : 'user')
                    setIsForbidden(true)
                    throw new Error('Forbidden / not authorized')
                }

                setIsAuthenticated(true)
            } catch (err) {
                console.error('Error fetching user: ', err)
                setIsAuthenticated(false)
            } finally {
                setIsLoading(false)
            }
        }

        checkRefreshToken()
    }, [axios])

    useLayoutEffect(() => {
        const adminLoginStylesLink = document.createElement('link')
        const appStyleElementDev = document.querySelector('style[data-vite-dev-id*="App.css"]') // FOR DEVELOPMENT
        const appStyleElementProd = document.querySelector('link[href^="/assets/index"]') // FOR PRODUCITON (COMPILED)
        
        const switchStyles = () => {
            adminLoginStylesLink.rel='stylesheet'
            adminLoginStylesLink.href='../styles/AdminLogin.css'
            
            document.head.appendChild(adminLoginStylesLink)
            if (appStyleElementDev)
                document.head.removeChild(appStyleElementDev)
            if (appStyleElementProd)
                document.head.removeChild(appStyleElementProd)
        }

        switchStyles()

        return () => {
            document.head.removeChild(adminLoginStylesLink)
            if (appStyleElementDev)
                document.head.append(appStyleElementDev)
            if (appStyleElementProd)
                document.head.append(appStyleElementProd)
        }
    }, [])

    if (isLoading) return <h1>Please wait</h1>
    else if (isForbidden) return <Forbidden role={role!} />
    else return (
        <>
            {
                (!isAuthenticated ? 
                    <div className="w-screen h-screen flex m-0 gap-0">
                        <div className="background-img w-full h-full hidden md:block"></div>
                        <div className="login-container w-full h-full flex justify-center md:w-1/3 md:absolute md:right-0 bg-white">
                            <div className="content w-3/4 flex flex-col justify-center gap-8">
                                <div className="rectangle bg-bcr-slighterlightblue"></div>
                                <h1>Welcome, BCR Admin</h1>
                                <form className="form flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="flex flex flex-col gap-2">
                                        <label htmlFor="email">Email</label>
                                        <input {...register('email')} type="text" id="email" placeholder="Enter your email here" className="rounded-md h-10 border-2 indent-2"/>
                                    </div>
                
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="password">Password</label>
                                        <input {...register('password')} type="password" id="password" placeholder="Enter password here" className="rounded-md h-10 border-2 indent-2"/>
                                    </div>
                                    <button type="submit" className="bg-bcr-blue p-2 rounded-md text-white font-bold border mt-1">Sign In</button>
                                </form>
                            </div>
                        </div>
                    </div> : 
                    <Navigate to='/admin/dashboard' />
                )
            }
        </>
    )
}

export default AdminLogin
