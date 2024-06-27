import NavList from "../Home/NavList"
import SideNav from "../Home/SideNav"
import SearchForm from "./SearchForm"


const Search = () => {
    return (
        <>
            <section className="hero w-full box-border bg-bcr-lighterblue flex flex-col justify-between overflow-x-clip sm:flex-row">
                <nav className="hero__nav w-full flex justify-center items-end sm:absolute">
                    <div className="hero__nav-container flex items-center justify-between w-91prcnt sm:w-81prcnt">
                        <div className="bcr-logo bg-bcr-blue"></div>
                        <ul className="hero__menu-list hidden items-center h-full justify-end sm:flex">
                            <NavList register={true}/>
                        </ul>
                        <SideNav />
                    </div>
                </nav>
                <div className="hero__content flex flex-col justify-center items-center gap-4 mt-8 sm:items-start sm:justify-end sm:mt-24">
                    <div className="hero__text-container flex flex-col w-91prcnt gap-4">
                        <h1 className="w-full flex items-center sm:w-full">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                        <p className="w-full flex items-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi hic architecto nostrum consequatur! Dicta error ipsam perferendis quos hic nostrum?</p>    
                    </div>    
                </div>
                <div className="hero__img-container mt-6 flex justify-center items-end sm:w-half sm:mt-24 sm:self-end">
                    <div className="hero__img-bg bg-bcr-blue flex justify-center">
                        <div className="hero__img-png self-end"></div>
                    </div>
                </div>    
            </section>

            <section className="result w-full flex justify-center">
                <div className="w-91prcnt grid grid-cols-2 auto-rows-min md:grid-cols-3 lg:grid-cols-4 sm:w-81prcnt" id="placeholder">
                </div>
            </section>

            <SearchForm />

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
        </>
    )
}

export default Search
