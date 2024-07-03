import { Dispatch, FC, SetStateAction } from "react"
import { useNavigate } from "react-router-dom"

export type CarItemCardProp = {
    car: {
        id: string
        model: string,
        type: string,
        rate: number,
        plate: string,
        make: string,
        image: string,
        availableAt: Date,
        transmission: string,
        year: number,
        updatedAt: Date,
        capacity: number
    },
    context: {
        setCarId: Dispatch<SetStateAction<string>>,
        setIsDeleting: Dispatch<SetStateAction<boolean>>
    }
}

const CarItemCard: FC<CarItemCardProp> = ({ car, context }) => {
    const {setCarId, setIsDeleting} = context

    const navigate = useNavigate()

    const onDelete = () => {
        setCarId(car.id)
        setIsDeleting(true)
    }

    const editOnClick = () => {
        localStorage.setItem('car-id-for-edit', car.id)
        navigate({pathname: '/admin/dashboard/edit-car'})
    }
    
    return (
        <div className="car-card bg-white h-121 w-full flex flex-col items-center justify-center p-6 rounded-lg shadow-md gap-3">
            <div className="car-image w-full h-40" style={{backgroundImage: `url(https://res.cloudinary.com/daeznp0xa/image/upload/f_auto,q_auto/v1/${car.image})`}}></div>
            <p>{`${car.year} ${car.make} ${car.model} / ${car.type}`}</p>
            <p className="font-semibold">{car.rate.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})} / hari</p>
            <div className="flex gap-2 items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9167 6.25002L15.8333 3.33335M17.5 1.66669L15.8333 3.33335L17.5 1.66669ZM9.49168 9.67502C9.92197 10.0996 10.264 10.6051 10.4981 11.1623C10.7323 11.7196 10.8538 12.3177 10.8559 12.9222C10.8579 13.5267 10.7403 14.1256 10.5099 14.6844C10.2796 15.2433 9.9409 15.751 9.51347 16.1785C9.08604 16.6059 8.57828 16.9446 8.01943 17.1749C7.46058 17.4053 6.86168 17.5229 6.25721 17.5209C5.65274 17.5189 5.05463 17.3973 4.49734 17.1631C3.94005 16.929 3.43457 16.587 3.01002 16.1567C2.17512 15.2923 1.71315 14.1345 1.72359 12.9328C1.73404 11.731 2.21606 10.5815 3.06585 9.73169C3.91563 8.8819 5.06519 8.39987 6.26693 8.38943C7.46866 8.37899 8.62642 8.84096 9.49085 9.67585L9.49168 9.67502ZM9.49168 9.67502L12.9167 6.25002L9.49168 9.67502ZM12.9167 6.25002L15.4167 8.75002L18.3333 5.83335L15.8333 3.33335L12.9167 6.25002Z" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>                                
                <p>{car.availableAt.toDateString()}</p>
            </div>
            <div className="flex gap-2 items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99999 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39765 14.6024 1.66669 9.99999 1.66669C5.39762 1.66669 1.66666 5.39765 1.66666 10C1.66666 14.6024 5.39762 18.3334 9.99999 18.3334Z" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 5V10L13.3333 11.6667" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>                                
                <p>{car.updatedAt.toDateString()}</p>
            </div>
            <div className="flex gap-4 text-sm font-semibold mt-3">
                <button onClick={() => onDelete()} className="flex items-center justify-center gap-2 py-2 px-3 border-2 text-bcr-danger border-bcr-danger rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                    Delete
                </button>
                <button className="flex justify-center items-center gap-2 py-2 px-3 text-white bg-bcr-success rounded-md" onClick={() => editOnClick()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
                    Edit
                </button>
            </div>
        </div>
    )
}

export default CarItemCard