import { FC } from "react"

type WhyItemProps = {
    icon: string,
    color: string,
    main: string,
    desc: string
}

const WhyItem: FC<WhyItemProps> = ({icon, color, main, desc}) => {
    return (
        <>
            <div className="why__items flex flex-col justify-start border border-bcr-neutral02 p-6 gap-4 rounded-lg">
                <div className={`why__icon ${color} flex justify-center items-center rounded-full self-start`}>
                    <div className={`${icon} thumb-icon icon--20px svg bg-white`}></div>
                </div>
                <h3>{main}</h3>
                <p>{desc}</p>
            </div>
        </>
    )
}

export default WhyItem