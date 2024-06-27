import AccordionList from './AccordionList'
import FooterSocmedIcons from './FooterSocmedIcons'
import NavList from './NavList'
import ReviewSlider from './ReviewSlider'
import ServicesList from './ServicesList'
import SideNav from './SideNav'
import WhyList from './WhyList'

const Home = () => {    
    return (
      <>
        <section className="hero w-full box-border bg-bcr-lighterblue flex flex-col justify-between overflow-x-clip sm:flex-row">
            <nav className="hero__nav w-full flex justify-center items-end sm:absolute">
                <div className="hero__nav-container flex items-center justify-between w-91prcnt sm:w-81prcnt">
                    <div className="bcr-logo bg-bcr-blue"></div>
                    <ul className="hero__menu-list hidden items-center h-full justify-end sm:flex">
                        <NavList register={true}/>
                    </ul>
                </div>
                <SideNav />
            </nav>
            <div className="hero__content flex flex-col justify-center items-center gap-4 mt-8 sm:items-start sm:justify-end sm:mt-24">
                <div className="hero__text-container flex flex-col w-91prcnt gap-4">
                    <h1 className="w-full flex items-center sm:w-full">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p className="w-full flex items-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi hic architecto nostrum consequatur! Dicta error ipsam perferendis quos hic nostrum?</p>    
                </div>
        
                <div className="w-91prcnt sm:w-full">
                    <button className="button bg-bcr-limegreen self-start" type="button" onClick={() => window.location.href='/search'}>Mulai Sewa Mobil</button>
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
                    <ServicesList />
                </div>    
            </div>
        </section>

        <section className="why w-screen flex justify-center">
            <div className="why__content w-91prcnt flex flex-col justify-between gap-6 sm:w-81prcnt">
                <div className="why__head w-full flex flex-col items-center justify-center gap-4 sm:items-start">
                    <h2>Why Us?</h2>
                    <p>Kenapa harus Binar Car Rental?</p>
                </div>
                <WhyList />
            </div>
        </section>

        <section className="testy w-screen flex justify-center">
            <div className="testy__content w-91prcnt flex flex-col gap-4 justify-between sm:gap-0 sm:w-full sm:items-center overflow-x-clip">
                <h2 className="flex justify-center">What Do They Say?</h2>
                <p className="flex justify-center text-center sm:mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, rem saepe.</p>
                <ReviewSlider />
            </div>
        </section>

        <section className="cta w-screen flex justify-center">
            <div className="cta__content w-91prcnt bg-bcr-blue gap-8 flex flex-col justify-center items-center sm:w-81prcnt sm:gap-13">
                <div className="flex flex-col gap-4 text-white justify-center w-full items-center">
                    <h2>Sewa Mobil di (Lokasimu) Sekarang!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio quo perspiciatis distinctio, quis fuga tempora labore ab neque?</p>    
                </div>
                <button type="button" className="button" onClick={() => window.location.href='/search'}>Mulai Sewa Mobil</button>
            </div>
        </section>

        <section className="faq w-screen flex justify-center ">
            <div className="faq__content w-91prcnt flex flex-col justify-start items-center gap-6 sm:flex-row sm:gap-0 sm:w-81prcnt">
                <div className="faq__head w-full flex flex-col items-center gap-4 sm:self-start sm:items-start">
                    <h2>Frequently Asked Questions</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>    
                </div>
                <div className="faq__accordion w-full flex flex-col justify-start gap-4">
                    <AccordionList />
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
                    <NavList register={false} />
                </ul>
                <div id="footer__socmed" className="flex flex-col gap-4 md:footer__23prcnt">
                    <p>Connect with us</p>
                    <FooterSocmedIcons />
                </div>
                <div className="flex flex-col gap-4 md:footer__23prcnt">
                    <p>Copyright Binar 2024</p>
                    <div className="bcr-logo bg-bcr-blue"></div>
                </div>
            </div>
        </footer>
      </>
    )
}

export default Home