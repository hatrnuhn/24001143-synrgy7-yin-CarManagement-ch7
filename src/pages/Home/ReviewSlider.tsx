import { useEffect } from "react"
import ReviewItem from "../../components/ReviewItem"
import { tns } from 'tiny-slider'

const ReviewSlider = () => {
    const reviews = [
        {
            img: 'joe-swanson-img',
            stars: 4,
            author: 'Joe Swanson 40, Quahog',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ex laudantium exercitationem quos maxime repellat libero, facilis dicta est, excepturi laboriosam facere recusandae debitis delectus in expedita voluptates explicabo maiores ea natus? Reiciendis?'
        },
        {
            img: 'leslie-knope-img',
            stars: 5,
            author: 'Leslie Knope 48, Pawnee',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ex laudantium exercitationem quos maxime repellat libero, facilis dicta est, excepturi laboriosam facere recusandae debitis delectus in expedita voluptates explicabo maiores ea natus? Reiciendis?'
        },
        {
            img: 'stanley-hudson-img',
            stars: 4.5,
            author: 'Stanley Hudson 72, Scranton',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ex laudantium exercitationem quos maxime repellat libero, facilis dicta est, excepturi laboriosam facere recusandae debitis delectus in expedita voluptates explicabo maiores ea natus? Reiciendis?'
        }
    ]

    useEffect(() => {
        const link = document.createElement('link')

        const tinySliderCssInit = () => {
            link.rel = 'stylesheet'
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css'

            document.head.appendChild(link);
        }

        const tinySliderInit = () => {
            var slider = tns({
                container: '.my-slider',
                items: 1,
                slideBy: 1,
                loop: true,
                speed: 500,
                controlsContainer: ".testy__carousel-btn-container",
                prevButton: "#carousel-btn-prev",
                nextButton: "#carousel-btn-next",
                responsive: {
                    640: {
                        items: 3,
                        center: true,
                        startIndex: 1,
                    }
                },
            });
            
            // Function to add class for center item
            function addCenterClass() {
                const info = slider.getInfo();
                const indexCurr = info.index;
                const elements = document.getElementsByClassName("center-slide");
                while (elements.length > 0) {
                    elements[0].classList.remove("center-slide");
                }
                info.slideItems[indexCurr].classList.add("center-slide");
            }
            
            // Add class for center item initially
            addCenterClass();
            
            // Event listener for indexChanged event
            slider.events.on("indexChanged", addCenterClass);
        }

        tinySliderCssInit()
        tinySliderInit()

        return () => {
            document.head.removeChild(link)
        }
      }, [])

    return (
        <>
            <div className="testy__review-container sm:mt-10 sm:flex sm:justify-center sm:w-130vw">
                <div className="my-slider flex">
                    {reviews.map((r, i) => {
                        return (
                            <ReviewItem key={`review-${i}`} author={r.author} img={r.img} stars={r.stars} text={r.text} />      
                        )
                    })}
                </div>
            </div>
            <div className="testy__carousel-btn-container self-center flex justify-between sm:mt-6">
                <button id="carousel-btn-prev" className="testy__carousel-btn flex justify-center items-center rounded-full border-1 border-bcr-dark" type="button">
                    <div className="svg prev-icon bg-bcr-dark"></div>
                </button>
                <button id="carousel-btn-next" className="testy__carousel-btn flex justify-center items-center bg-bcr-limegreen rounded-full" type="button">
                    <div className="svg next-icon bg-white"></div>
                </button>
            </div>
        </>
    )
}

export default ReviewSlider