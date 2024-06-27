import { FC } from "react"

const NavList: FC<{register: boolean}> = ({register}) => {
    return (
        <>
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
            {register && 
                <li>
                    <a href="#">
                        <button className="button bg-bcr-limegreen self-start" type="button">Register</button>
                    </a>
                </li>
            }
        </>
    )
}

export default NavList