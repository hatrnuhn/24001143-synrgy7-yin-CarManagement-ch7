import { FC } from "react"

type ServiceItemProps = {
    service: string
}

const ServiceItem: FC<ServiceItemProps>= ({service}) => {
    return (
        <>
            <li className="flex items-center gap-4">
                <div className="services__tick-container bg-bcr-slighterlightblue rounded-full flex justify-center items-center">
                    <div className="svg tick-icon bg-bcr-blue"></div>
                </div>
                <p>{service}</p>
            </li>
        </>
    )
}

export default ServiceItem