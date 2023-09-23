import style from "./home.module.scss"
import home from "../../pics/home/home.png"
import React from "react";

const Home: React.FC = () => {
    return (
        <main className={style.wrapper}>
            <img src={home}></img>
        </main>
    )
}

export default Home