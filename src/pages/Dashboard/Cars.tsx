import { useLayoutEffect, useRef, useState } from "react"
import CarItemCard, {CarItemCardProp} from "../../components/CarItemCard"
import useAxios from "../../axios"
import CarDeleteConfirm from "../../components/CarDeleteConfirm"
import { useNavigate } from "react-router-dom"

const Cars = () => {
    const [cars, setCars] = useState<CarItemCardProp["car"][]>([])

    const [filter, setFilter] = useState<'sm' | 'md' | 'lg' | 'xl' | ''>('')

    const navigate = useNavigate()

    const [isDeleting, setIsDeleting] = useState(false)

    const [carId, setCarId] = useState('')
    
    const axios = useRef(useAxios()).current
    
    useLayoutEffect(() => {
        const fetchCars = async () => {
            const response = await axios.get('/cars')

            setCars(response.data
                .filter((c: Record<string, number>) => {
                    switch (filter) {
                        case 'sm':
                            return c.capacity < 3
                        case 'md':
                            return c.capacity < 5 && c.capacity > 2
                        case 'lg':
                            return c.capacity < 7 && c.capacity > 4
                        case 'xl':
                            return c.capacity > 6
                        default:
                            return true
                    }
                })
                .map((c: Record<string, string | number>) => {
                    const car: CarItemCardProp["car"] = {
                        id: c.id as string,
                        model: c.model as string,
                        make: c.make as string,
                        plate: c.plate as string,
                        image: c.image as string,
                        rate: c.rate as number,
                        transmission: c.transmission as string,
                        type: c.type as string,
                        year: c.year as number,
                        availableAt: new Date(c.availableAt),
                        updatedAt: new Date(c.updatedAt),
                        capacity: c.capacity as number
                    }

                    return car
                })
            )
        }

        fetchCars()
    }, [filter, axios])

    return (
        <>
            <div className="breadcrumb flex items-center gap-2">
                <p className="font-bold">Cars</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
                <p className="font-bold text-bcr-neutral03">Cars List</p>
            </div>
            <div className="flex justify-between items-center">
                <h2>Cars List</h2>
                <button className="w-36 bg-bcr-blue h-full text-white font-semibold text-sm sm:w-32 rounded" onClick={() => navigate('/admin/dashboard/add-car')}>
                    + Add New Car
                </button>
            </div>
            <div className="flex text-sm font-semibold text-bcr-darkblue gap-2">
                <button onClick={() => setFilter('')} className={`border-2 py-2 px-3 bg-white rounded sm:py-1 sm:px-2 ${(!filter ? 'text-bcr-blue border-bcr-blue' : 'border-bcr-darkblue')}`}>All</button>
                <button onClick={() => setFilter('sm')} className={`border-2 py-2 px-3 bg-white rounded sm:py-1 sm:px-2 ${(filter === 'sm' ? 'text-bcr-blue border-bcr-blue' : 'border-bcr-darkblue')}`}>Coupe</button>
                <button onClick={() => setFilter('md')} className={`border-2 py-2 px-3 bg-white rounded sm:py-1 sm:px-2 ${(filter === 'md' ? 'text-bcr-blue border-bcr-blue' : 'border-bcr-darkblue')}`}>Small</button>
                <button onClick={() => setFilter('lg')} className={`border-2 py-2 px-3 bg-white rounded sm:py-1 sm:px-2 ${(filter === 'lg' ? 'text-bcr-blue border-bcr-blue' : 'border-bcr-darkblue')}`}>Medium</button>
                <button onClick={() => setFilter('xl')} className={`border-2 py-2 px-3 bg-white rounded sm:py-1 sm:px-2 ${(filter === 'xl' ? 'text-bcr-blue border-bcr-blue' : 'border-bcr-darkblue')}`}>Large</button>
            </div>
            <div className="grid grid-cols-4 gap-4 xl:grid-cols-3 lg:grid-cols-2 sm:flex sm:flex-col">
                {cars.map((c, i) => (
                    <CarItemCard car={c} context={{setCarId, setIsDeleting}} key={i} />
                ))}
            </div>
            <CarDeleteConfirm context={{isDeleting, setIsDeleting, carId}}/>
        </>
    )
}

export default Cars