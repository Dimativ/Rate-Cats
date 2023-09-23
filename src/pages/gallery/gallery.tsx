import style from "./gallery.module.scss"
import {BackButtonCategory} from "../../components/backButtonCategory/backButtonCategory.tsx";
import React from "react";
// @ts-ignore
import {Helmet} from "react-helmet";

const Gallery: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <Helmet
                title="Gallery"
            />
            <BackButtonCategory/>
            <h1>This page in development process 🕧</h1>
        </div>
    )
}
export default Gallery
