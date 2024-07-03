import { Dispatch, FC, SetStateAction } from "react"
import useAxios from "../axios"
import { AxiosError } from "axios"

type CarDeleteConfirmProps = {
    context: {
        isDeleting: boolean,
        setIsDeleting: Dispatch<SetStateAction<boolean>>,
        carId: string
    }
}

const CarDeleteConfirm: FC<CarDeleteConfirmProps> = ({context}) => {
    const {isDeleting, setIsDeleting, carId} = context

    const imageUrl = 'https://s3-alpha-sig.figma.com/img/61d5/c607/9b0783eff0746faff42854124b28e16c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1A6lvMTKSqyG0Mz3soC~-eBeU4SLY81RkKnBQI0vU~zww-aubyYMqtIplRM6CTMlWCHPpCG~u0H4QCAbNGe5ZHtT83tWwuCi88HVAUSIqfHKTz60muBpvxUqYRu0tNsRWwRW--EQQaXELANPVa-C0obekacUeoE1tCjhg6gtv5vQYQjlqej9NoFo7VyHs9MICoMHSHUAX8gn81hG53nLtmPuajVvVgwMTOa1pPhEqjyZ955UuYLGlby0DHaoQQMjL7wiaOLr8~wtCaiNsvRZNq0hUOnqnz0Z2ULqIBSVEfKi961mMZuc6BZYvrACIecpO7YZITMI21y3H6H1zmGRg__'

    const axios = useAxios()

    const onDelete = () => {
        const sendDelete = async () => {
            try {
                if (carId)
                    await axios.delete(`/cars/${carId}`)
    
                setIsDeleting(false)    

                window.location.href='/admin/dashboard'
            } catch (err) {
                if (err instanceof AxiosError && err.response?.status === 401)
                    try {
                        await axios.get('/auth/refresh-access', { withCredentials: true }) // requires refreshToken cookie

                        setIsDeleting(false)
                        
                        window.location.href='/admin/dashboard'
                    } catch (err) {
                        console.error('Error resending patch', err)
                    }
                else {
                    console.error('Error sending patch', err)
                }            
            }
        }

        sendDelete()
    }

    return (
        <div className={`${isDeleting ? 'flex' : 'hidden'} h-screen w-screen top-0 left-0 fixed justify-center items-center`} style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <div className="w-88 h-88 p-6 flex-col flex items-center justify-center bg-white rounded-md shadow-md gap-2 sm:w-68">
                <div className="w-full h-32 car-image" style={{backgroundImage: `url(${imageUrl})`}}/>
                <p className="font-bold mt-2">Menghapus Data Mobil</p>
                <p>Yakin ingin menghapus data mobil?</p>
                <div className="flex font-bold gap-2 mt-2">
                    <button onClick={() => onDelete()} className="bg-bcr-blue text-white rounded-md px-3 py-2">Ya</button>
                    <button onClick={() => setIsDeleting(false)} className="border-bcr-blue text-bcr-blue px-3 py-2 rounded-md border">Tidak</button>
                </div>
            </div>
        </div>
    )
}

export default CarDeleteConfirm