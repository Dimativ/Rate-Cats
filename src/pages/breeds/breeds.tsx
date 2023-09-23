import style from "./breeds.module.scss"
import {BackButtonCategory} from "../../index.ts";
import React from "react";

const Breeds: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <BackButtonCategory/>
            <h1>This page in development process 🕧</h1>
        </div>
    )
}

export default Breeds