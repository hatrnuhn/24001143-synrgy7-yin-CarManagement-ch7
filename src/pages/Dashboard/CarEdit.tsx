import { useContext, useEffect, useState } from "react"
import Dashboard from "."
import { DashboardContext } from "../../contexts/Dashboard"
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import { Navigate, useNavigate } from "react-router-dom"
import useAxios from "../../axios"
import { AxiosError } from "axios"
import CarEditFail from "../../components/CarAddEditFail"
import CarEditSuccess from "../../components/CarAddEditSuccess"

export type CarEditForm = {
    jsonData?: {
        plate?: string,
        make?: string,
        model?: string,
        rate?: string,
        capacity?: string,
        description?: string,
        availableAt?: string,
        transmission?: string,
        type?: string,
        year?: string,

        // useFieldArray can only be used with arrays of objects
        specs?: {value: string}[],
        options?: {value: string}[]
    },

    /// FileList because <input> takes FileList
    image?: FileList
}

type PatchObject = {
    plate?: string,
    make?: string,
    model?: string,
    rate?: string | number,
    capacity?: string | number,
    description?: string,
    availableAt?: string | Date,
    transmission?: string,
    type?: string,
    year?: string | number,

    // useFieldArray can only be used with arrays of objects
    specs?: string[],
    options?: string[]
}  

const CarEdit = () => {
    const {carEditStylesLink, carsStylesLink, ordersStylesLink} = useContext(DashboardContext)

    const [isShowingSavingFail, setIsShowingSavingFail] = useState(false)
    const [isShowingSavingSuccess, setIsShowingSavingSuccess] = useState(false)

    const carId = localStorage.getItem('car-id-for-edit')

    const navigate = useNavigate()
    
    const axios = useAxios()

    const {handleSubmit, register, control} = useForm<CarEditForm>({
        defaultValues: {
            jsonData: {
                specs: [{value: ''}],
                options: [{value: ''}]
            }
        }
    })

    const { fields: specsFields, append: appendSpec, remove: removeSpec } = useFieldArray({
        control,
        name: "jsonData.specs"
    })
    
    const { fields: optionsFields, append: appendOption, remove: removeOption } = useFieldArray({
        control,
        name: "jsonData.options"
    })

    const onSubmit: SubmitHandler<CarEditForm> = async (data) => {
        const patch: PatchObject = { 
            ...data.jsonData, 
            specs: data.jsonData?.specs?.map((s) => s.value),
            options: data.jsonData?.options?.map((s) => s.value)
        }

        for (const key in patch) {
            const carKey = key as keyof PatchObject
            if (patch[carKey] === '') {
                delete patch[carKey]
            } else if (carKey === 'rate' || carKey === 'year' || carKey === 'capacity') {
                patch[carKey] = parseInt(patch[carKey] as string)
            } else if (carKey === 'availableAt') {
                patch[carKey] = new Date(patch[carKey] as string).toISOString()
            } else if (carKey === 'specs' || carKey === 'options') {
                if (Array.isArray(patch[carKey])) {
                    const arrayValue = patch[carKey] as string[]
                    if (arrayValue.length <= 1 && !arrayValue[0]) {
                        delete patch[carKey]
                    }
                }
            }
        }        

        // Object.keys(patch).forEach(key => {
        //     if (patch[key] === '')
        //         delete patch[key]
        //     else if (key === 'rate' || key === 'year' || key === 'capacity')
        //         patch[key] = parseInt(patch[key] as string)
        //     else if (key === 'availableAt')
        //         patch[key] = new Date(patch[key] as string).toISOString()
        //     else if (key === 'specs' || key === 'options') {
        //         if (Array.isArray(patch[key])) {
        //             if (patch[key].length <= 1 && !patch[key][0]) {
        //                 delete patch[key]
        //             }
        //         }                
        //     }
        // })

        const sendPatch = async () => {
            const formData = new FormData()
            if (data.image)
                formData.append('image', data.image[0])
            formData.append('jsonData', JSON.stringify(patch))

            await axios.patch(`/cars/${localStorage.getItem('car-id-for-edit')}`, formData, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            })
            
            setIsShowingSavingSuccess(true)
        }

        try {
            await sendPatch()
        } catch (err) {
            if (err instanceof AxiosError && err.response?.status === 401)
                try {
                    await axios.get('/auth/refresh-access', { withCredentials: true }) // requires refreshToken cookie
                    await sendPatch()
                } catch (err) {
                    console.error('Error resending patch', err)
                    setIsShowingSavingFail(true)
                }
            else {
                console.error('Error sending patch', err)
                setIsShowingSavingFail(true)
            }
        }
    }

    const onCancel = () => {
        localStorage.removeItem('car-id-for-edit')
        navigate('/admin/dashboard')
    }

    useEffect(() => {
        if (carEditStylesLink)
            carEditStylesLink.setAttribute('data-disabled', 'false')
        if (carsStylesLink)
            carsStylesLink.setAttribute('data-disabled', 'true')
        if (ordersStylesLink)
            ordersStylesLink.setAttribute('data-disabled', 'true')

        console.log('Styles are loaded')

        return () => {
            if (carEditStylesLink)
                carEditStylesLink.setAttribute('data-disabled', 'true')
        }
    }, [carEditStylesLink, carsStylesLink, ordersStylesLink])

    return (
        <>
            {
                !carId ? <Navigate to={'/admin/dashboard'} /> :
                <Dashboard content={
                    <>
                        <div className="breadcrumb flex items-center gap-2">
                            <p className="font-bold">Cars</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                            <p className="font-bold">Cars List</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                            <p className="font-bold">{localStorage.getItem('car-id-for-edit')}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                            <p className="font-bold text-bcr-neutral03">Edit</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h2>Edit Car {localStorage.getItem('car-id-for-edit')}</h2>
                        </div>
                        <div className="h-full w-120">
                            <form action="" className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex justify-between">
                                    <label htmlFor="i-plate">Plate</label>
                                    <input type="text" className="w-88 border-2 rounded" id="i-plate" {...register('jsonData.plate')} />
                                </div>
    
                                <div className="flex justify-between">
                                    <label htmlFor="i-make">Make</label>
                                    <input type="text" className="w-88 border-2 rounded" id="i-make" {...register('jsonData.make')} />
                                </div>
    
                                <div className="flex justify-between">
                                    <label htmlFor="i-model">Model</label>
                                    <input type="text" className="w-88 border-2 rounded" id="i-model" {...register('jsonData.model')} />
                                </div>
    
                                <div className="flex justify-between">
                                    <label htmlFor="i-image">Image</label>
                                    <input type="file" className="w-88 rounded" id="i-image" {...register('image')} />
                                </div>
    
                                <div className="flex justify-between">
                                    <label htmlFor="i-rate">Rate</label>
                                    <input type="text" className="w-88 border-2 rounded" id="i-rate" {...register('jsonData.rate')} />
                                </div>
    
                                <div className="flex justify-between">
                                    <label htmlFor="i-capacity">Capacity</label>
                                    <input type="text" className="w-88 border-2 rounded" id="i-capacity" {...register('jsonData.capacity')} />
                                </div>
    
                                <div className="flex justify-between">
                                    <label htmlFor="i-descs">Description</label>
                                    <input type="text" className="w-88 border-2 rounded" id="i-descs" {...register('jsonData.description')} />
                                </div>
    
                                <div className="flex justify-between">
                                    <label htmlFor="i-avail-date">Available At</label>
                                    <input type="date" className="w-88 border-2 rounded" id="i-avail-date" {...register('jsonData.availableAt')} />
                                </div>
    
                                <div className="flex justify-between">
                                    <label htmlFor="i-transmission">Transmission</label>
                                    <input type="text" className="w-88 border-2 rounded" id="i-transmission" {...register('jsonData.transmission')} />
                                </div>
    
                                <div className="flex justify-between">
                                    <label htmlFor="i-type">Type</label>
                                    <input type="text" className="w-88 border-2 rounded" id="i-type" {...register('jsonData.type')} />
                                </div>
    
                                <div className="flex justify-between">
                                    <label htmlFor="i-year">Year</label>
                                    <input type="text" className="w-88 border-2 rounded" id="i-year" {...register('jsonData.year')} />
                                </div>
    
                                <div className="flex flex-col gap-2">
                                    <label>Options</label>
                                    {optionsFields.map((f, i) => (
                                        <div key={f.id} className="flex gap-2 w-full">
                                            <input type="text" className="border-2 w-full rounded" id={`i-option-${f.id}`} {...register(`jsonData.options.${i}.value`)}/>
                                            <button type='button' className={`${i === 0 ? 'hidden' : 'block'} rounded-md px-3 font-bold text-white bg-bcr-blue`} onClick={() => removeOption(i)}>-</button>
                                        </div>
                                    ))}
                                    <button type='button' className="bg-bcr-blue border-2 border-bcr-blue text-white p-1 rounded-md font-semibold" onClick={() => appendOption({value: ''})}>Add another</button>
                                </div>
    
                                <div className="flex flex-col gap-2">
                                    <label>Specifications</label>
                                    {specsFields.map((f, i) => (
                                        <div key={f.id} className="flex gap-2 w-full">
                                            <input type="text" className="border-2 w-full rounded" id={`i-spec-${f.id}`} {...register(`jsonData.specs.${i}.value`)}/>
                                            <button type='button' className={`${i === 0 ? 'hidden' : 'block'} rounded-md px-3 font-bold text-white bg-bcr-blue`} onClick={() => removeSpec(i)}>-</button>
                                        </div>
                                    ))}
                                    <button type='button' className="bg-bcr-blue border-2 border-bcr-blue text-white p-1 rounded-md font-semibold" onClick={() => appendSpec({value: ''})}>Add another</button>
                                </div>
    
                                <div className="flex gap-2">
                                    <button className="self-start bg-bcr-slighterlightblue border-2 border-bcr-blue text-bcr-blue p-2 rounded-md font-semibold" onClick={() => onCancel()}>Cancel</button>
                                    <button type="submit" className="self-start bg-bcr-blue text-white p-2 border-2 border-bcr-blue rounded-md font-semibold">Save</button>
                                </div>
                            </form>
                            <CarEditFail context={{isShowingSavingFail, setIsShowingSavingFail, htmlFor: 'edit'}}/>
                            <CarEditSuccess context={{isShowingSavingSuccess, htmlFor: 'edit'}} />
                        </div>
                    </>
                } />
            }

        </>
    )
}

export default CarEdit