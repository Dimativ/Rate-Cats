import style from "./mobileMenu.module.scss"
import {useState} from "react";
import {Link} from "react-router-dom";

export const MobileMenu = () => {
    const navList = ['voting', 'breeds', 'gallery']
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }
    return (
        <>
            <section onClick={toggleMenu} className={!isOpen ? style.btn : style.activeBtn}>
                <span></span>
                <span></span>
                <span></span>
            </section>
            <section className={!isOpen ? style.navigationClosed : style.navigation}>
                {navList.map((el, index) => (
                    <Link key={index} to={el} onClick={toggleMenu} className={location.pathname === `/${el}` ? style.activeButton : ''}>
                        {el}
                    </Link>
                ))}
            </section>
        </>
    )
}
