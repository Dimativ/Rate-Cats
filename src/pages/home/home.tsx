import style from "./home.module.scss"
import home from "../../pics/home/home.png"
import React from "react";
// @ts-ignore
import {Helmet} from "react-helmet";

const Home: React.FC = () => {
    return (
        <main className={style.wrapper}>
            <Helmet
                title="Home"
            />
            <img src={home}></img>
        </main>
    )
}

export default Home