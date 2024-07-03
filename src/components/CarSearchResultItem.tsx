import { FC } from "react"

type CarSearchResultItemProps = {
    car: Record<string, string | number>
}

const CarSearchResultItem: FC<CarSearchResultItemProps> = ({ car }) => {

    return (
        <div className="flex flex-col justify-between p-6 border-2 gap-4">
            <div className="image flex justify-center">
                <img src={`https://res.cloudinary.com/daeznp0xa/image/upload/f_auto,q_auto/v1/${car.image}`} alt="" className="object-cover w-44 h-44 sm:w-52 sm:h-52 lg:w-64 lg:h-64" />
            </div>
            <p className="type">{car.manufacture} {car.model}</p>
            <p className="price font-semibold">{car.rate.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })} / hari</p>
            <p className="descs">{car.description}</p>
            <div className="seats flex gap-4">
                <div className="icon--20px user-icon svg bg-bcr-dark"></div>
                <p>{car.capacity} Orang</p>
            </div>
            <div className="trans flex gap-4">
                <div className="icon--20px gear-icon svg bg-bcr-dark"></div>
                <p>{car.transmission}</p>
            </div>
            <div className="year flex gap-4">
                <div className="icon--20px cal-icon svg bg-bcr-dark"></div>
                <p>Tahun {car.year}</p>
            </div>
            <button className="button flex justify-center bg-bcr-limegreen">Pilih Mobil</button>
        </div>
    )
}

export default CarSearchResultItem