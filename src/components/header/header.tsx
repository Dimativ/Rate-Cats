import style from "./header.module.scss"
import {Link, useLocation} from "react-router-dom";
import logo from "../../pics/header/logo.png"
const Header = () => {
    const location = useLocation()
    return (
        <header className={style.wrapper}>
            <Link to="/" className={style.logo}>
                <img src={logo}></img>
            </Link>
            <Link to="/" className={style.nameText}>
                <h1>RatePets</h1>
            </Link>
        </header>
    )
}

export default Header
