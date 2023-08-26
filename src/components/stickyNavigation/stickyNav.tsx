import style from "./stickyNav.module.scss"
import {Navigation} from "../../index.ts";

export const StickyNav = () => {
    return (
        <div className={style.wrapper}>
            <h1>Hi!👋</h1>
            <p>Welcome to Rate Pets 2023</p>
            <section className={style.stickyWrapper}>
                <h3>Lets start using The Cat APP</h3>
                <Navigation/>
            </section>
        </div>
    )
}
