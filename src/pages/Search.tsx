import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { DatePicker, TimePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { useEffect, useState } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom"
import useAxios from "../axios"

type SearchFormType = {
    driver: 'yes' | 'no' | '',
    date: Date | null,
    pickupTime: Date | null,
    capacity: number | null
}

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [cars, setCars] = useState<Record<string, any>[]>([])
    const axios = useAxios()

    const driver = searchParams.get('driver') as 'yes' | 'no' 
    const date = searchParams.get('date')
    const pickupTime = searchParams.get('pickupTime')
    const capacity = searchParams.get('capacity')

    const {register, handleSubmit, control} = useForm<SearchFormType>({
        defaultValues: {
            driver: driver ? driver : '',
            date: date ? new Date(date) : null,
            pickupTime: pickupTime ? new Date(pickupTime) : null,
            capacity: capacity ? parseInt(capacity) : null
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
            date: data.date!.toISOString() as string,
            pickupTime: data.pickupTime!.toISOString() as string,
            capacity: data.capacity!.toString() as string
        }

        setSearchParams(params)

        await fetchCars()
    }
    
    useEffect(() => {
        if (driver && date && pickupTime && capacity) 
            fetchCars()
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputLabel id="search-form">Tipe Driver</InputLabel>
                <Controller 
                    control={control}
                    name='driver'
                    rules={{ required: true }}
                    render={({ field }) => {
                        return (
                            <Select
                                value={field.value}
                                onChange={(driver) => {
                                    field.onChange(driver)
                                }}
                                labelId="search-form"
                                id="search-form-select"
                                label="Driver"
                            >
                                <MenuItem value='yes'>Dengan Driver</MenuItem>
                                <MenuItem value='no'>Tanpa Driver</MenuItem>
                            </Select>
                        )
                    }}
                />

                <Controller
                    control={control}
                    name='date'
                    rules={{required: true}}
                    render={({ field }) => {
                        return (
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker 
                                    label='Tanggal'
                                    onChange={(date) => {
                                        field.onChange(date)
                                    }}
                                    value={field.value}
                                />
                            </LocalizationProvider>
                        )
                    }}
                />

                <Controller
                    control={control}
                    name='pickupTime'
                    rules={{required: true}}
                    render={({ field }) => {
                        return (
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker 
                                    label='Waktu Jemput/Ambil'
                                    onChange={(time) => {
                                        field.onChange(time)
                                    }}
                                    value={field.value}
                                />
                            </LocalizationProvider>
                        )
                    }}
                />

                <TextField
                    {...register('capacity', {required: true})}
                    label="Kapasitas"
                    type="number"
                />

                <Button type='submit'>Cari Mobil</Button>
            </form>

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

export default Search