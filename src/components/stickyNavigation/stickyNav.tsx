import style from "./stickyNav.module.scss"
import {Navigation} from "../../index.ts";
import {useMediaQuery} from "react-responsive";
import {useLocation} from "react-router-dom";
import React from "react";

const Greetings: React.FC = () => {
    return (
        <>
            <h1>Hi!👋</h1>
            <p>Welcome to Rate Pets 2023</p>
        </>
    )
}
export const StickyNav: React.FC = () => {
    const isNormalScreen = useMediaQuery({query: '(min-width: 813px)'})
    const isMobile = useMediaQuery({query: '(max-width: 812px)'})
    const location = useLocation()
    return (
        <div className={style.wrapper}>
            {((isMobile && location.pathname === '/') || isNormalScreen) && <Greetings/>}
            <section className={style.stickyWrapper}>
                {((isMobile && location.pathname === '/') || isNormalScreen) && <h3>Lets start using The Cat APP</h3>}
                <Navigation/>
            </section>
        </div>
    )
}
