import { FC } from "react"

type ReviewItemProps = {
    img: string,
    stars: number,
    author: string,
    text: string
}

const ReviewItem: FC<ReviewItemProps> = ({img, stars, author, text}) => {
    const renderStars = (stars: number) => {
        const filledStars = Math.floor(stars)
        const halfStars = stars % 1 !== 0 ? 1 : 0
        const emptyStars = 5 - filledStars - halfStars

        return (
            <>
                {[...Array(filledStars)].map((_, i) => (
                    <div key={`filled-${i}`} className="star-icon star--fill bg-bcr-warning"></div>
                ))}
                {halfStars === 1 && (
                    <div className="star-icon star--half bg-bcr-warning"></div>
                )}
                {[...Array(emptyStars)].map((_, i) => (
                    <div key={`empty-${i}`} className="star-icon star--empty bg-bcr-warning"></div>
                ))}
            </>
        )
    }
    
    return (
        <div className="slider-item">
            <div className="flex flex-col gap-6 py-10 px-8 rounded-lg bg-bcr-lighterblue sm:flex-row sm:justify-center sm:gap-0">
                <div className="flex justify-center items-center w-full">
                    <div className={`${img} testy__img rounded-full`}></div>
                </div>
                <div className="flex flex-col gap-6 sm:gap-2">
                    <div className="testy__stars flex justify-center sm:justify-start">
                        {renderStars(stars)}
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>{text}</p>
                        <p className="font-semibold">{author}</p>
                    </div>        
                </div>
            </div>
        </div>
    )
}

export default ReviewItem