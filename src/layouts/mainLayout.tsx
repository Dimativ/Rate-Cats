import style from "./mainLayout.module.scss"
import {Outlet} from "react-router-dom";
import Header from "../components/header/header.tsx";
import {StickyNav} from "../index.ts";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <main className={style.wrapper}>
                <StickyNav/>
                <Outlet/>
            </main>
        </>
    )
}

//<Footer/>
export default MainLayout