import NavList from "./NavList"

const SideNav = () => {
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

    return (
        <>
            <button className="hero__nav-menu-icon sm:hidden" type="button" onClick={() => openNav()}></button>
            <div id="hero__side-nav" className="fixed top-0 right-0 h-full w-0 z-10 flex flex-col gap-4 items-center bg-white sm:hidden">
                <h2 className="flex w-3/4 justify-between items-center mt-8">
                    BCR
                    <a className="closebtn text-4xl" onClick={() => closeNav()}>&times;</a>
                </h2>
                <ul className="flex w-3/4 flex-col gap-4">
                    <NavList register={true}/>
                </ul>    
            </div>
        </>
    )
}

export default SideNav