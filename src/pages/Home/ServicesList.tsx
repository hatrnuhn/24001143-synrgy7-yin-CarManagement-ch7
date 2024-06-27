import ServiceItem from "../../components/ServiceItem"

const ServicesList = () => {
    const services = [
        'Sewa mobil dengan supir di (Lokasimu) 12 jam',
        'Sewa mobil lepas kunci di (Lokasimu) 24 jam',
        'Sewa mobil jangka panjang bulanan',
        'Gratis antar jemput di bandara',
        'Layanan airport transport / drop in-out'
    ]
    return (
        <ul className="flex flex-col gap-4">
            {services.map((s, i) => {
                return (
                    <ServiceItem key={i} service={s} />
                )
            })}
        </ul>
    )
}

export default ServicesList