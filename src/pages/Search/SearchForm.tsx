import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom"
import useAxios from "../../axios"

type SearchFormType = {
    driver: 'yes' | 'no' | '',
    date: string,
    pickupTime: string,
    capacity: 'coupe' | 'small' | 'medium' | 'large' | ''
}

const SearchForm = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [cars, setCars] = useState<Record<string, any>[]>([])
    const axios = useAxios()

    const driver = searchParams.get('driver') as 'yes' | 'no' | ''
    const date = searchParams.get('date')
    const pickupTime = searchParams.get('pickupTime')
    const capacity = searchParams.get('capacity') as 'coupe' | 'small' | 'medium' | 'large' | ''

    const {register, handleSubmit} = useForm<SearchFormType>({
        defaultValues: {
            driver: driver ? driver : '',
            date: date ? date : '',
            pickupTime: pickupTime ? pickupTime : '',
            capacity: capacity ? capacity : ''
        },
        mode: 'onSubmit'
    })

    const fetchCars = async () => {
        const res = await axios.get('/cars')
        setCars(res.data)
    }

    const onSubmit: SubmitHandler<SearchFormType> = async (data) => {
        const params = {
            driver: data.driver,
            date: data.date,
            pickupTime: data.pickupTime,
            capacity: data.capacity
        }

        console.log(data.date, data.pickupTime)
        setSearchParams(params)

        await fetchCars()
    }
    
    useEffect(() => {
        const searchStylesLink = document.createElement('link')
        const appStyleElement = document.querySelector('style[data-vite-dev-id*="App.css"]')
        
        const switchStyles = () => {
            searchStylesLink.rel='stylesheet'
            searchStylesLink.href='styles/Search.css'
            
            document.head.appendChild(searchStylesLink)
            document.head.removeChild(appStyleElement!)
        }

        if (driver && date && pickupTime && capacity) 
            fetchCars()

        switchStyles()

        return () => {
            document.head.removeChild(searchStylesLink)
            document.head.append(appStyleElement!)
        }
    }, [driver, date, pickupTime, capacity])

    return (
        <>
            <section className={`search w-full flex justify-center lg:relative lg:-top-12`}>
                <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col bg-white justify-between w-91prcnt gap-4 rounded-md shadow-search text-xs p-4 lg:flex-row lg:text-sm sm:w-81prcnt`}>
                    <div className="flex flex-col">
                        <label htmlFor="driver">Tipe Driver</label>
                        <select {...register('driver')} id="driver" defaultValue={driver ? driver : ''}>
                            <option value="" disabled selected hidden>Pilih Tipe Driver</option>
                            <option value="yes">Dengan Sopir</option>
                            <option value="no">Tanpa Sopir (Lepas Kunci)</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="date">Tanggal</label>
                        <input {...register('date')} type="date" id='date' />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="pickupTime">Waktu Jemput/Ambil</label>
                        <input {...register('pickupTime')} type="time" id='pickupTime' />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="seats">Jumlah Penumpang (optional)</label>
                        <select {...register('capacity')} name="seats" id="seats" defaultValue={capacity ? capacity : ''}>
                            <option value="" disabled selected hidden>Jumlah Penumpang</option>
                            <option value="coupe">1-2 Orang</option>
                            <option value="small">2-4 Orang</option>
                            <option value="medium">4-6 Orang</option>
                            <option value="large">6+ Orang</option>
                        </select>
                    </div>

                    <div className="flex align-middle">
                        <button className="button bg-bcr-limegreen" type="submit">Cari Mobil</button>
                    </div>
                </form>
            </section>

            {(cars.length > 0) ? 
                <div>
                    {cars.map((c, i) => {
                        return (
                            <div key={i}>
                                <p>
                                    {c.id}
                                </p>
                                <img src={`https://res.cloudinary.com/daeznp0xa/image/upload/f_auto,q_auto/v1/${c.image}`} alt="" />
                            </div>
                        )
                    })}
                </div> 
                : <></>
            }
        </>
    )
}

export default SearchForm


