import style from "./home.module.scss"
import home from "../../pics/home/home.png"
const Home = () => {
    return (
        <main className={style.wrapper}>
            <img src={home}></img>
        </main>
    )
}

export default Home