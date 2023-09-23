import style from "./loader.module.scss"
import lottieCat from "../../pics/lottieCat/lottieCat.json";
import Lottie from "lottie-react";
import React from "react";

export const Loader: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <Lottie animationData={lottieCat} loop={true}/>
        </div>
    )
}
