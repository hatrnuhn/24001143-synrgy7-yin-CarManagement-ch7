import { useCallback, useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import useAxios from "../../axios"
import { AxiosError } from "axios"

type PagingSettings = {
    limit: number,
    page: number
}

type Order = {
    id: string,
    startDate: string,
    endDate: string,
    status: string,
    userId: number,
    user: {
        [key: string]: string | number
    },
    carId: string,
    car: {
        [key: string]: string | number | string[]
    }
}

const Orders = () => {
    const { register, handleSubmit, getValues } = useForm<PagingSettings>({
        defaultValues: {
            page: 1,
            limit: 10
        }
    })
    
    const axios = useRef(useAxios()).current

    const [orders, setOrders] = useState<(number | Order[])[]>([])

    const getMaxPage = () => {
        const max = orders[0] as number

        return Math.ceil(max / getValues('limit'))
    }

    const getDaysDifference = (date1: string, date2: string) => {
        const a = new Date(date1)

        const b = new Date(date2)

        const timeDiff = Math.abs(a.getTime() - b.getTime())

        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

        return daysDiff
    }

    const fetchOrders = async () => {
        try {
            const res = await axios.get(`/orders?take=${getValues('limit')}&page=${getValues('page')}`)

            setOrders(res.data)                    
        } catch (err) {
            if (err instanceof AxiosError && err.response?.status === 401) {
                try {
                    await axios.get('/auth/refresh-access')

                    const res = await axios.get(`/orders?take=${getValues('limit')}&page=${getValues('page')}`)
                    setOrders(res.data)
                } catch (err) {
                    console.error('Error refetching orders: ', err)
                }
            } else
                console.error('Error fetching orders: ', err)
        }
    }

    const fetchOrdersMemoized = useCallback(fetchOrders, [axios, getValues])

    const onSubmit = async () => {
        fetchOrdersMemoized()
    }

    useEffect(() => {
        fetchOrdersMemoized()
    }, [fetchOrdersMemoized])

    return (
        <>
            <div className="breadcrumb flex items-center gap-2">
                <p className="font-bold">Dashboard</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
                <p className="font-bold text-bcr-neutral03">Dashboard</p>
            </div>
            <h2 className="">Dashboard</h2>
            <div className="flex gap-2">
                <div className="rectangle3 bg-bcr-blue"></div>
                <h3 className="list-name">List Order</h3>
            </div>
            <table className="sm:text-xs lg:text-sm">
                <thead>
                    <tr className="bg-bcr-slighterlightblue">
                        <th className="th-no rounded-tl">ID
                            <button className="relative top-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                </svg>
                            </button>
                        </th>
                        <th>User Email
                            <button className="relative top-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                </svg>
                            </button>
                        </th>
                        <th>Car
                            <button className="relative top-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                </svg>
                            </button>
                        </th>
                        <th>Start Rent
                            <button className="relative top-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                </svg>
                            </button>
                        </th>
                        <th>Finish Rent
                            <button className="relative top-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                </svg>
                            </button>
                        </th>
                        <th>Price
                            <button className="relative top-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                </svg>
                            </button>
                        </th>
                        <th className="rounded-tr">Status
                            <button className="relative top-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                </svg>
                            </button>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {Array.isArray(orders[1]) && orders[1].map((o, i) => {
                        return (
                            <tr key={i + 1}>
                            <td className="td-no">{o.id.slice(-4)}</td>
                            <td>{o.user.email}</td>
                            <td>{`${o.car.year} ${o.car.make} ${o.car.model}`}</td>
                            <td>{`${new Date(o.startDate).toDateString()}`}</td>
                            <td>{`${new Date(o.endDate).toDateString()}`}</td>
                            <td>{o.car.rate as number * getDaysDifference(o.startDate, o.endDate)}</td>
                            <td>{o.status.charAt(0).toUpperCase() + o.status.slice(1).toLowerCase()}</td>
                            </tr>                    
                        )
                    })}
                </tbody>
            </table>

            <div className="flex justify-between items-center sm:text-xs lg:text-sm">
                <form className="flex gap-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col justify-between">
                        <label htmlFor="page-limit">Limit</label>
                        <input type="number" id="page-limit" className="h-10 w-14 text-center border rounded-sm border-bcr-neutral02 text-bcr-neutral03" min="5" max="10" {...register('limit')} />
                    </div>
                    <div className="flex flex-col justify-between">
                        <label htmlFor="jump-to-page">Jump to page</label>
                        <div className="flex h-10">
                            <input type="number" id="jump-to-page" className="h-10 w-14 text-center border rounded-sm border-bcr-neutral02 text-bcr-neutral03" min="1" max={getMaxPage()} {...register('page')} />
                            <button className="bg-bcr-blue w-10 text-white rounded-sm border-bcr-neutral02 border">Go</button>    
                        </div>
                    </div>    
                </form>

                {/* <div className="flex justify-center items-center self-end text-bcr-neutral03">
                    <button className="border rounded-sm border-bcr-neutral02 w-10 h-10 bg-white">{'<<'}</button>
                    <button className="border rounded-sm border-bcr-neutral02 w-10 h-10 bg-white hidden sm:block">1</button>
                    <button className="border rounded-sm border-bcr-neutral02 w-10 h-10 bg-white sm:hidden">1</button>
                    <button className="border rounded-sm border-bcr-neutral02 w-10 h-10 bg-white sm:hidden">2</button>
                    <button className="border rounded-sm border-bcr-neutral02 w-10 h-10 bg-white sm:hidden">3</button>
                    <button className="border rounded-sm border-bcr-neutral02 w-10 h-10 bg-white sm:hidden">...</button>
                    <button className="border rounded-sm border-bcr-neutral02 w-10 h-10 bg-white sm:hidden">4</button>
                    <button className="border rounded-sm border-bcr-neutral02 w-10 h-10 bg-white">{'>>'}</button>
                </div> */}
            </div>
        </>
    )
}

export default Orders