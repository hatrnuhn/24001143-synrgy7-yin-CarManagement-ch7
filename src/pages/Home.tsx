import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const Home = () => {
    const [count, setCount] = useState(0)

    const closeNav = () => {
        const element = document.getElementById("hero__side-nav")
        
        if (element)
            element.style.width = "0"
    }

    const openNav = () => {
        const element = document.getElementById("hero__side-nav")

        if (element)
            element.style.width = "50vw"
    }

    useEffect(() => {
        const accordionInit = () => {
            var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", (event) => {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    } 
                });
            }
        }
    }, [])
    
    return (
      <>
        <section className="hero w-full box-border bg-bcr-lighterblue flex flex-col justify-between overflow-x-clip sm:flex-row">
            <nav className="hero__nav w-full flex justify-center items-end sm:absolute">
                <div className="hero__nav-container flex items-center justify-between w-91prcnt sm:w-81prcnt">
                    <div className="bcr-logo bg-bcr-blue"></div>
                    <ul className="hero__menu-list hidden items-center h-full justify-end sm:flex">
                        <li>
                            <a href="#">Our Services</a>
                        </li>
                        <li>
                            <a href="#">Why Us?</a>
                        </li>
                        <li>
                            <a href="#">Testimonial</a>
                        </li>
                        <li>
                            <a href="#">FAQs</a>
                        </li>
                        <li>
                            <a href="#">
                                <button className="button bg-bcr-limegreen self-start" type="button">Register</button>
                            </a>
                        </li>
                    </ul>
                    <button className="hero__nav-menu-icon sm:hidden" type="button" onClick={() => openNav()}></button>
                    <div id="hero__side-nav" className="fixed top-0 right-0 h-full w-0 z-10 flex flex-col gap-4 items-center bg-white sm:hidden">
                        <h2 className="flex w-3/4 justify-between items-center mt-8">
                            BCR
                            <a href="javascript:void(0)" className="closebtn text-4xl" onClick={() => closeNav()}>&times;</a>
                        </h2>
                        <ul className="flex w-3/4 flex-col gap-4">
                            <li>
                                <a href="#">Our Services</a>
                            </li>
                            <li>
                                <a href="#">Why Us?</a>
                            </li>
                            <li>
                                <a href="#">Testimonial</a>
                            </li>
                            <li>
                                <a href="#">FAQs</a>
                            </li>
                            <li>
                                <a href="#">
                                    <button className="button bg-bcr-limegreen self-start" type="button">Register</button>
                                </a>
                            </li>
                        </ul>    
                    </div>
                </div>
            </nav>
            <div className="hero__content flex flex-col justify-center items-center gap-4 mt-8 sm:items-start sm:justify-end sm:mt-24">
                <div className="hero__text-container flex flex-col w-91prcnt gap-4">
                    <h1 className="w-full flex items-center sm:w-full">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p className="w-full flex items-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi hic architecto nostrum consequatur! Dicta error ipsam perferendis quos hic nostrum?</p>    
                </div>
        
                <div className="w-91prcnt sm:w-full">
                    <button className="button bg-bcr-limegreen self-start" type="button"><a href="/search">Mulai Sewa Mobil</a></button>
                </div>    
            </div>


            <div className="hero__img-container mt-6 flex justify-center items-end sm:w-half sm:mt-24 sm:self-end">
                <div className="hero__img-bg bg-bcr-blue flex justify-center">
                    <div className="hero__img-png self-end"></div>
                </div>
            </div>    
        </section>

        <section className="services flex w-screen justify-center">
            <div className="services__content w-full flex flex-col justify-start items-center gap-6 sm:flex-row sm:gap-0 sm:w-71prcnt">
                <div className="services__img-container w-full flex justify-center">
                    <div className="services__img self-center"></div>
                </div>
                <div className="services__text-container flex flex-col justify-start gap-4 w-91prcnt sm:w-81prcnt lg:w-full lg:justify-center">
                    <h2>Best car rental for any kind of trip in (Lokasimu)!</h2>
                    <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental, dijamin harga lebih murah dibandingkan yang lain! Kondisi mobil baru serta kualitas pelayanan yang terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dan lain-lain!</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <div className="services__tick-container bg-bcr-slighterlightblue rounded-full flex justify-center items-center">
                                <div className="svg tick-icon bg-bcr-blue"></div>
                            </div>
                            <p>Sewa mobil dengan supir di Bali 12 jam</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="services__tick-container bg-bcr-slighterlightblue rounded-full flex justify-center items-center">
                                <div className="svg tick-icon bg-bcr-blue"></div>
                            </div>
                            <p>Sewa mobil lepas kunci di Bali 24 jam</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="services__tick-container bg-bcr-slighterlightblue rounded-full flex justify-center items-center">
                                <div className="svg tick-icon bg-bcr-blue"></div>
                            </div>
                            <p>Sewa mobil jangka panjang bulanan</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="services__tick-container bg-bcr-slighterlightblue rounded-full flex justify-center items-center">
                                <div className="svg tick-icon bg-bcr-blue"></div>
                            </div>
                            <p>Gratis antar-jemput di bandara</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="services__tick-container bg-bcr-slighterlightblue rounded-full flex justify-center items-center">
                                <div className="svg tick-icon bg-bcr-blue"></div>
                            </div>
                            <p>Layanan airport transport / drop in-out</p>
                        </li>
                    </ul>
                </div>    
            </div>
        </section>

        <section className="why w-screen flex justify-center">
            <div className="why__content w-91prcnt flex flex-col justify-between gap-6 sm:w-81prcnt">
                <div className="why__head w-full flex flex-col items-center justify-center gap-4 sm:items-start">
                    <h2>Why Us?</h2>
                    <p>Kenapa harus Binar Car Rental?</p>
                </div>

                <div className="why__items-container flex flex-col justify-between gap-4 sm:flex-row">
                    <div className="why__items flex flex-col justify-start border border-bcr-neutral02 p-6 gap-4 rounded-lg">
                        <div className="why__icon bg-bcr-warning flex justify-center items-center rounded-full self-start">
                            <div className="thumb-icon icon--20px svg bg-white"></div>
                        </div>
                        <h3>Mobil Lengkap</h3>
                        <p>Ada banyak pililihan mobil yang pastinya masih baru, bersih dan terawat!</p>
                    </div>

                    <div className="why__items flex flex-col justify-start border border-bcr-neutral02 p-6 gap-4 rounded-lg">
                        <div className="why__icon bg-bcr-danger flex justify-center items-center rounded-full self-start">
                            <div className="tag-icon icon--20px svg bg-white"></div>
                        </div>
                        <h3>Harga Murah dan Bersaing</h3>
                        <p>Tentu bisa dibandingkan dengan rental mobil lain.</p>
                    </div>
                    
                    <div className="why__items flex flex-col justify-start border border-bcr-neutral02 p-6 gap-4 rounded-lg">
                        <div className="why__icon bg-bcr-blue flex justify-center items-center rounded-full self-start">
                            <div className="clock-icon icon--20px svg bg-white"></div>
                        </div>
                        <h3>Layanan 24 Jam</h3>
                        <p>Siap melayani kamu kapanpun kamu butuh. Kami juga tersedia selama week-end, lho!</p>
                    </div>
                    
                    <div className="why__items flex flex-col justify-start border border-bcr-neutral02 p-6 gap-4 rounded-lg">
                        <div className="why__icon bg-bcr-limegreen flex justify-center items-center rounded-full self-start">
                            <div className="medal-icon icon--20px svg bg-white"></div>
                        </div>
                        <h3>Sopir Profesional</h3>
                        <p>Dan tentunya berpengalaman, jujur, ramah, selalu tepat waktu, dan keren.😎</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="testy w-screen flex justify-center">
            <div className="testy__content w-91prcnt flex flex-col gap-4 justify-between sm:gap-0 sm:w-full sm:items-center overflow-x-clip">
                <h2 className="flex justify-center">What Do They Say?</h2>
                <p className="flex justify-center text-center sm:mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, rem saepe.</p>
                <div className="testy__review-container sm:mt-10 sm:flex sm:justify-center sm:w-130vw">
                    <div className="my-slider flex">
                        <div className="slider-item">
                            <div className="flex flex-col gap-6 py-10 px-8 rounded-lg bg-bcr-lighterblue sm:flex-row sm:justify-center sm:gap-0">
                                <div className="flex justify-center items-center w-full">
                                    <div className="joe-swanson-img testy__img rounded-full"></div>
                                </div>
                                <div className="flex flex-col gap-6 sm:gap-2">
                                    <div className="testy__stars flex justify-center sm:justify-start">
                                        <div className="star-icon star--fill bg-bcr-warning"></div>
                                        <div className="star-icon star--fill bg-bcr-warning"></div>
                                        <div className="star-icon star--fill bg-bcr-warning"></div>
                                        <div className="star-icon star--fill bg-bcr-warning"></div>
                                        <div className="star-icon star--empty bg-bcr-warning"></div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ex laudantium exercitationem quos maxime repellat libero, facilis dicta est, excepturi laboriosam facere recusandae debitis delectus in expedita voluptates explicabo maiores ea natus? Reiciendis?</p>
                                        <p className="font-semibold">Joe Swanson 40, Quahog</p>
                                    </div>        
                                </div>
                            </div>
                        </div>
                        <div className="slider-item">
                            <div className="flex flex-col gap-6 py-10 px-8 rounded-lg bg-bcr-lighterblue sm:flex-row sm:justify-center sm:gap-0">
                                <div className="flex justify-center items-center w-full">
                                    <div className="leslie-knope-img testy__img rounded-full"></div>
                                </div>
                                <div className="flex flex-col gap-6 sm:gap-2">
                                    <div className="testy__stars flex justify-center sm:justify-start">
                                        <div className="star-icon star--fill bg-bcr-warning"></div>
                                        <div className="star-icon star--fill bg-bcr-warning"></div>
                                        <div className="star-icon star--fill bg-bcr-warning"></div>
                                        <div className="star-icon star--fill bg-bcr-warning"></div>
                                        <div className="star-icon star--fill bg-bcr-warning"></div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ex laudantium exercitationem quos maxime repellat libero, facilis dicta est, excepturi laboriosam facere recusandae debitis delectus in expedita voluptates explicabo maiores ea natus? Reiciendis?</p>
                                        <p className="font-semibold">Leslie Knope 48, Pawnee</p>
                                    </div>        
                                </div>
                            </div>
                        </div>
                        <div className="slider-item">
                            <div className="flex flex-col gap-6 py-10 px-8 rounded-lg bg-bcr-lighterblue sm:flex-row sm:justify-center sm:gap-0">
                                <div className="flex justify-center items-center w-full">
                                    <div className="stanley-hudson-img testy__img rounded-full"></div>
                                </div>
                                <div className="flex flex-col gap-6 sm:gap-2">
                                    <div className="testy__stars flex justify-center sm:justify-start">
                                        <div className="star-icon star--fill bg-bcr-warning"></div>
                                        <div className="star-icon star--fill bg-bcr-warning"></div>
                                        <div className="star-icon star--fill bg-bcr-warning"></div>
                                        <div className="star-icon star--fill bg-bcr-warning"></div>
                                        <div className="star-icon star--half bg-bcr-warning"></div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ex laudantium exercitationem quos maxime repellat libero, facilis dicta est, excepturi laboriosam facere recusandae debitis delectus in expedita voluptates explicabo maiores ea natus? Reiciendis?</p>
                                        <p className="font-semibold">Stanley Hudson 72, Scranton</p>
                                    </div>        
                                </div>
                            </div>
                        </div>
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
            </div>
        </section>

        <section className="cta w-screen flex justify-center">
            <div className="cta__content w-91prcnt bg-bcr-blue gap-8 flex flex-col justify-center items-center sm:w-81prcnt sm:gap-13">
                <div className="flex flex-col gap-4 text-white justify-center w-full items-center">
                    <h2>Sewa Mobil di (Lokasimu) Sekarang!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio quo perspiciatis distinctio, quis fuga tempora labore ab neque?</p>    
                </div>
                <button type="button" className="button">Mulai Sewa Mobil</button>
            </div>
        </section>

        <section className="faq w-screen flex justify-center ">
            <div className="faq__content w-91prcnt flex flex-col justify-start items-center gap-6 sm:flex-row sm:gap-0 sm:w-81prcnt">
                <div className="faq__head w-full flex flex-col items-center gap-4 sm:self-start sm:items-start">
                    <h2>Frequently Asked Questions</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>    
                </div>
                <div className="faq__accordion w-full flex flex-col justify-start gap-4">
                    <div>
                        <button className="accordion w-full border-1 rounded-4px flex justify-between items-center px-6 py-4">Apa saja syarat yang dibutuhkan?</button>
                        <div className="panel px-6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, porro aut repudiandae nemo deserunt labore voluptatem molestias soluta magni quo.</p>
                        </div>    
                    </div>

                    <div>
                        <button className="accordion w-full border-1 rounded-4px flex justify-between items-center px-6 py-4">Berapa hari minimal sewa mobil lepas kunci?</button>
                        <div className="panel px-6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, porro aut repudiandae nemo deserunt labore voluptatem molestias soluta magni quo.</p>
                        </div>    
                    </div>

                    <div>
                        <button className="accordion w-full border-1 rounded-4px flex justify-between items-center px-6 py-4">Berapa hari sebelumnya sebaiknya booking sewa mobil?</button>
                        <div className="panel px-6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, porro aut repudiandae nemo deserunt labore voluptatem molestias soluta magni quo.</p>
                        </div>    
                    </div>

                    <div>
                        <button className="accordion w-full border-1 rounded-4px flex justify-between items-center px-6 py-4">Apakah ada biaya antar-jemput?</button>
                        <div className="panel px-6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, porro aut repudiandae nemo deserunt labore voluptatem molestias soluta magni quo.</p>
                        </div>    
                    </div>

                    <div>
                        <button className="accordion w-full border-1 rounded-4px flex justify-between items-center px-6 py-4">Bagaimana jika terjadi kecelakaan?</button>
                        <div className="panel px-6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, porro aut repudiandae nemo deserunt labore voluptatem molestias soluta magni quo.</p>
                        </div>    
                    </div>
                </div>
            </div>
        </section>

        <footer className="w-screen flex justify-center mb-25 md:mb-15">
            <div id="footer__container" className="w-91prcnt flex flex-col gap-4 sm:w-81prcnt md:flex-row md:justify-between md:gap-0">
                <div id="footer__address" className="flex flex-col gap-4 md:footer__23prcnt">
                    <p>Jalan Suroyo No.161, Mayangan Kota, Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>    
                </div>
                <ul id="footer__nav" className="flex flex-col gap-4">
                    <li>
                        <a href="#">Our Services</a>
                    </li>
                    <li>
                        <a href="#">Why Us</a>
                    </li>
                    <li>
                        <a href="#">Testimonial</a>
                    </li>
                    <li>
                        <a href="#">FAQs</a>
                    </li>
                </ul>
                <div id="footer__socmed" className="flex flex-col gap-4 md:footer__23prcnt">
                    <p>Connect with us</p>
                    <div className="flex gap-4">
                        <a href="#" className="socmed__icon bg-bcr-blue flex justify-center items-center rounded-full self-start">
                            <div className="fb-icon icon--20px svg bg-white"></div>
                        </a>

                        <a href="#" className="socmed__icon bg-bcr-blue flex justify-center items-center rounded-full self-start">
                            <div className="ig-icon icon--20px svg bg-white"></div>
                        </a>

                        <a href="#" className="socmed__icon bg-bcr-blue flex justify-center items-center rounded-full self-start">
                            <div className="x-icon icon--20px svg bg-white"></div>
                        </a>

                        <a href="#" className="socmed__icon bg-bcr-blue flex justify-center items-center rounded-full self-start">
                            <div className="mail-icon icon--20px svg bg-white"></div>
                        </a>

                        <a href="#" className="socmed__icon bg-bcr-blue flex justify-center items-center rounded-full self-start">
                            <div className="twitch-icon icon--20px svg bg-white"></div>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:footer__23prcnt">
                    <p>Copyright Binar 2024</p>
                    <div className="bcr-logo bg-bcr-blue"></div>
                </div>
            </div>
        </footer>

        <script src="public/scripts/sidenav.js"></script>
        <script src="public/scripts/accordion.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script>
        <script src="public/scripts/carousel.js"></script>
      </>
    )
}

export default Home