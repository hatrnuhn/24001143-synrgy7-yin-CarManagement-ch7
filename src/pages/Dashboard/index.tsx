import { useEffect, useState } from 'react'
import CarsPage from './Cars'
import OrdersPage from './Orders'
import { AuthContextType, useAuth } from '../../contexts/Auth'

type PageKey = 'orders' | 'cars'

const Dashboard = () => {
    const [page, setPage] = useState<PageKey>('orders')

    const { isAuthenticated } = useAuth() as AuthContextType

    const handleClick = (key: PageKey) => {
        setPage(key)
    }

    useEffect(() => {
        console.log(isAuthenticated)
    }, [])

    return (
        <>
            <button onClick={() => handleClick('cars')}>cars page</button>
            <button onClick={() => handleClick('orders')}>orders page</button>
            <div>
                { page === 'orders' ? <OrdersPage /> : <CarsPage /> }
            </div>
        </>
    )
}

export default Dashboard