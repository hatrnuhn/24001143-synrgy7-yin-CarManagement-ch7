import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"

type ForbiddenProp = {
    role: 'user' | 'admin' | 'super'
}

const Forbidden: FC<ForbiddenProp> = ({role}) => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => navigate('/'), 5000)
    }, [navigate])

    return (
        <h1>
            HALT, YOU'RE FORBIDDEN FROM ACCESSING THIS PAGE!<br />
            CURRENTLY LOGGED IN AS {role === 'user' ? 'USER' : role === 'admin' ? 'ADMIN' : 'SUPER'}!<br />
            REDIRECTING TO HOME            
        </h1>
    )
}

export default Forbidden