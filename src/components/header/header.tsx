import style from "./header.module.scss"
import {useLocation} from "react-router-dom";
import logo from "../../pics/header/logo.png"
const Header = () => {
    const location = useLocation()
    return (
        <header className={style.wrapper}>
           <img src={logo} className={style.logo}></img>
            <h1>RatePets</h1>
        </header>
    )
}

export default Header
