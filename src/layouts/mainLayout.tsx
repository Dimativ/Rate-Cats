import style from "./mainLayout.module.scss"
import {Outlet, useLocation} from "react-router-dom";
import Header from "../components/header/header.tsx";
import {StickyNav} from "../index.ts";
import {useMediaQuery} from "react-responsive";

const MainLayout = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 812px)' })
    const isNormalScreen = useMediaQuery({ query: '(min-width: 813px)' })
    const location = useLocation()
    return (
        <>
            <Header/>
            <main className={style.wrapper}>
                {((isMobile && location.pathname === "/") || isNormalScreen )&& <StickyNav/>}
                <Outlet/>
            </main>
        </>
    )
}

//<Footer/>
export default MainLayout