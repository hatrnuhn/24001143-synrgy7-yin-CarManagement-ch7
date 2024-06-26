import { useState } from 'react'
import CarsPage from './Cars'
import OrdersPage from './Orders'

type PageKey = 'orders' | 'cars'

const Dashboard = () => {
    const [page, setPage] = useState<PageKey>('orders')

    // const { isAuthenticated } = useAuth() as AuthContextType

    const handleClick = (key: PageKey) => {
        setPage(key)
    }

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