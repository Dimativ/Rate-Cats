import style from "./favouriteGrid.module.scss"
import unfavourButton from "../../../pics/favourite/unfavourButton.png"
import React from "react";
import {FavouriteItem} from "../../../store/slices/favouriteSlice/favouriteTypes.ts";

type FavouriteGridProps = {
    favourite: FavouriteItem[];
    onClickDeleteFavourite: (id: number) => void;
}
export const FavouriteGrid: React.FC<FavouriteGridProps> = ({favourite, onClickDeleteFavourite}) => {
    return (
        <section className={style.wrapper}>
            {favourite.map((obj, index: number) => (
                <div key={index} className={style.container}>
                    <img alt={"myObj"} src={obj.image.url}></img>
                    <div className={style.overlay}>
                        <img alt={"unFavourButton"} onClick={() => onClickDeleteFavourite(obj.id)}
                             src={unfavourButton}></img>
                    </div>
                </div>
            ))}
        </section>
    )
}
