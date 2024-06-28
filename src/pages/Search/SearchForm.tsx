import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom"
import useAxios from "../../axios"
import CarSearchResultItem from "../../components/CarSearchResultItem"

type SearchFormType = {
    driver: 'yes' | 'no' | '',
    date: string,
    pickupTime: string,
    capacity: 'xs' | 'sm' | 'md' | 'lg' | ''
}

const SearchForm = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [cars, setCars] = useState<Record<string, any>[]>([])
    const axios = useAxios()

    const driver = searchParams.get('driver') as 'yes' | 'no' | ''
    const date = searchParams.get('date')
    const pickupTime = searchParams.get('pickupTime')
    const capacity = searchParams.get('capacity') as 'xs' | 'sm' | 'md' | 'lg' | ''

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
        if (driver && date && pickupTime && capacity) 
            fetchCars()
    }, [driver, date, pickupTime, capacity])

    return (
        <>
            <section className={`search w-full flex justify-center lg:relative lg:-top-12`}>
                <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col bg-white justify-between w-91prcnt gap-4 rounded-md shadow-search text-xs p-4 lg:flex-row lg:text-sm sm:w-81prcnt`}>
                    <div className="flex flex-col">
                        <label htmlFor="driver">Tipe Driver</label>
                        <select {...register('driver')} id="driver" defaultValue={driver ? driver : ''}>
                            <option value="" disabled hidden>Pilih Tipe Driver</option>
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
                        <select {...register('capacity')} id="seats" defaultValue={capacity ? capacity : ''}>
                            <option value="" disabled hidden>Jumlah Penumpang</option>
                            <option value="sx">1-2 Orang</option>
                            <option value="sm">2-4 Orang</option>
                            <option value="md">4-6 Orang</option>
                            <option value="lg">6+ Orang</option>
                        </select>
                    </div>

                    <div className="flex align-middle">
                        <button className="button bg-bcr-limegreen" type="submit">Cari Mobil</button>
                    </div>
                </form>
            </section>

            <section className="result w-full flex justify-center">
                <div className="w-91prcnt gap-4 grid grid-cols-2 auto-rows-min md:grid-cols-3 md:gap-4 lg: lg:gap-8 lg:grid-cols-4 sm:w-81prcnt" id="placeholder">
                    {(cars.length > 0) && 
                        <>
                            {cars.map((c, i) => {
                                return (
                                    <CarSearchResultItem key={i} car={c} />
                                )
                            })}
                        </> 
                    }
                </div>
            </section>
        </>
    )
}

export default SearchForm


