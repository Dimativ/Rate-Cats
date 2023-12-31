import style from "./navigation.module.scss"
import voting from "../../../pics/stickyNav/voting.png";
import breeds from "../../../pics/stickyNav/breeds.png";
import gallery from "../../../pics/stickyNav/gallery.png";
import {Link, useLocation} from "react-router-dom";
import React from "react";

export const Navigation: React.FC = () => {
    const navList = ['voting', 'breeds', 'gallery']
    const location = useLocation()
    return (
        <div className={style.wrapper}>
            <section className={style.navigation}>
                <Link to='voting' className={location.pathname === "/voting" ? style.activeImg : ''}>
                    <img alt={voting} src={voting} className={style.voteImg}></img>
                </Link>
                <Link to='breeds' className={location.pathname === "/breeds" ? style.activeImg : ''}>
                    <img alt={breeds} src={breeds} className={style.breedImg}></img>
                </Link>
                <Link to='gallery' className={location.pathname === "/gallery" ? style.activeImg : ''}>
                    <img alt={gallery} src={gallery} className={style.galleryImg}></img>
                </Link>
            </section>
            <section className={style.buttons}>
                {navList.map((el, index) => (
                    <Link key={index} to={el} className={location.pathname === `/${el}` ? style.activeButton : ''}>
                        {el}
                    </Link>
                ))}
            </section>
        </div>

    )
}
