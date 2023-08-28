import style from "./backButtonCategory.module.scss"
import {useLocation, useNavigate} from "react-router-dom";
import backArrow from "../../pics/backButtonCategory/backArrow.png"
export const BackButtonCategory = () => {
    const navigate = useNavigate();
    const location = useLocation()
    return (
        <section className={style.wrapper}>
            <button onClick={() => navigate(-1)}>
                <img src={backArrow}></img>
            </button>
            <section className={style.name}>
                <p>{location.pathname.substring(1)}</p>
            </section>
        </section>
    )
}
