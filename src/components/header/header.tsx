import style from "./header.module.scss"
import {Link, useLocation} from "react-router-dom";
import logo from "../../pics/header/logo.png"
import {MobileMenu, SearchAndNav} from "../../index.ts";
import {useMediaQuery} from "react-responsive";

const LogoAndTitle = () => {
    return (
        <>
        <Link to="/" className={style.logo}>
            <img src={logo}></img>
        </Link>
        <Link to="/" className={style.nameText}>
            RatePets
        </Link>
    </>
    )
}
const Header = () => {
    const isNormalScreen = useMediaQuery({ query: '(min-width: 813px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 812px)' })
    const location = useLocation()

    return (
        <header className={style.wrapper}>
            {isMobile && location.pathname !== '/' && <MobileMenu/>}
            {((isMobile && location.pathname === '/') || isNormalScreen) && <LogoAndTitle/>}
            {location.pathname !== '/' && <SearchAndNav location={location}/>}
        </header>
    )
}

export default Header
