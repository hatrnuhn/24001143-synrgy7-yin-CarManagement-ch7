import { FC, useContext, useLayoutEffect, useState } from 'react'
import CarsPage from './Cars'
import OrdersPage from './Orders'
import { DashboardContextType, DashboardContext } from '../../contexts/Dashboard'
import { useNavigate } from 'react-router-dom'
import { AuthContext, AuthContextType } from '../../contexts/Auth'


type PageKey = 'orders' | 'cars' | ''

type DashboardProps = {
    content?: JSX.Element
}

const Dashboard: FC<DashboardProps> = ({ content }) => {
    const [page, setPage] = useState<PageKey>(content ? '' : 'cars')

    const {admin} = useContext(AuthContext) as AuthContextType

    const navigate = useNavigate()

    const {ordersStylesLink, carsStylesLink} = useContext(DashboardContext) as DashboardContextType

    const handleClick = (key: PageKey) => {
        if (!content)
            setPage(key)
        else
            navigate('/admin/dashboard')
    }

    useLayoutEffect(() => {
        const appStyleElementDev = document.querySelector('style[data-vite-dev-id*="App.css"]') // FOR DEVELOPMENT
        const appStyleElementProd = document.querySelector('link[href^="/assets/index"]') // FOR PRODUCITON (COMPILED)
        
        const toggleAppStyles = () => {
            if (appStyleElementDev)
                document.head.removeChild(appStyleElementDev)
            if (appStyleElementProd)
                document.head.removeChild(appStyleElementProd)
        }

        toggleAppStyles()
        
        return () => {
            if (appStyleElementDev)
                document.head.append(appStyleElementDev)
            if (appStyleElementProd)
                document.head.append(appStyleElementProd)
        }
    }, [])

    useLayoutEffect(() => {
        const switchStyles = () => {    
            switch (page) {
                case 'cars':
                    if (ordersStylesLink)
                        ordersStylesLink.setAttribute('data-disabled', 'true')
                
                    if (carsStylesLink) 
                        carsStylesLink.setAttribute('data-disabled', 'false')
                    break
    
                case 'orders':
                    if (carsStylesLink)
                        carsStylesLink.setAttribute('data-disabled', 'true')

                    if (ordersStylesLink)
                        ordersStylesLink.setAttribute('data-disabled', 'false')
                    break
                
                default: 
                    if (carsStylesLink) 
                        carsStylesLink.setAttribute('data-disabled', 'true')

                    if (ordersStylesLink)
                        ordersStylesLink.setAttribute('data-disabled', 'true')
                    break
            }
        }
    
        switchStyles()
        console.log(location.pathname)

        return () => {
            const existingOrdersLink = document.querySelector('link[href="../styles/Dashboard/OrdersList.css"]')
            const existingCarsLink = document.querySelector('link[href="../styles/Dashboard/CarsList.css"]')
            if (existingOrdersLink) {
                existingOrdersLink.setAttribute('data-disabled', 'true')
            }
            if (existingCarsLink) {
                existingCarsLink.setAttribute('data-disabled', 'true')
            }
        }
    }, [page, carsStylesLink, ordersStylesLink])    
    
    return (
        <>
            <div className="flex h-screen w-screen">
                <div className="nav bg-bcr-blue w-4.375 flex flex-col items-center sm:hidden">
                    <div className="rectangle1 bg-bcr-slighterlightblue my-5"></div>
                    <div className="h-32 w-full flex flex-col">
                        <button className="h-1/2 flex justify-center items-center" onClick={() => handleClick('orders')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" className="bi bi-house-door" viewBox="0 0 16 16">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                            </svg>
                        </button>
                        <button className="h-1/2 flex justify-center items-center" onClick={() => handleClick('cars')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" className="bi bi-truck" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-56 lg:hidden">
                    <div className="rectangle2 bg-bcr-slighterlightblue my-5 ml-6"></div>
                    <div className="menu text-bcr-neutral03 font-bold mt-6 ml-6">{`${page === 'orders' ? 'Dashboard' : 'Cars'}`}</div>
                    <div className="menu-list flex flex-col mt-2">
                        <button className="font-bold h-10 text-left pl-6 bg-bcr-slighterlightblue">{`${page === 'orders' ? 'Dashboard' : 'Cars List'}`}</button>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="top-bar flex content-center justify-between px-6 sm:px-3">
                        <div className="flex gap-2">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                </svg>
                            </button>
                            <div className='hidden sm:flex'>
                                <button onClick={() => handleClick('orders')} className={`justify-center items-center text-bcr-blue ${page === 'orders' && 'hidden'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                                    </svg>
                                </button>
                                <button onClick={() => handleClick('cars')} className={`justify-center items-center text-bcr-blue ${page === 'cars' && 'hidden'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex py-4 gap-6 sm:gap-2">
                            <div className="search flex content-center">
                                <input type="text" name="search" id="search" placeholder="Search" className="border rounded-sm indent-10 sm:indent-5 sm:w-3/4" />
                                <button className="rounded-sm border border-bcr-blue text-bcr-blue w-18 text-sm flex justify-center items-center sm:w-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search hidden sm:block" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                    </svg>
                                    <h3 className="text-sm sm:hidden">Search</h3>
                                </button>
                            </div>
                            <div className="profile flex gap-2 items-center">
                                <div className="image bg-bcr-slighterlightblue h-10 w-10 flex justify-center items-center rounded-full">U</div>
                                <p className="sm:hidden">{admin?.username}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-down sm:hidden" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="h-full flex flex-col content px-6 py-10 gap-4 overflow-y-scroll">
                        {content ? content : (page === 'orders' ? <OrdersPage /> : <CarsPage />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard