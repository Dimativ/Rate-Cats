import style from "./gallery.module.scss"
import {BackButtonCategory} from "../../components/backButtonCategory/backButtonCategory.tsx";
import React from "react";

const Gallery: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <BackButtonCategory/>
            <h1>This page in development process 🕧</h1>
        </div>
    )
}
export default Gallery
