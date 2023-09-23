import style from "./dislikesGrid.module.scss";
import React from "react";
import {DislikeItem} from "../../../store/slices/dislikesSlice/dislikesTypes.ts";


type DislikesGridProps = {
    dislikes: DislikeItem[];
}
export const DislikesGrid: React.FC<DislikesGridProps> = ({dislikes}) => {
    return (
        <section className={style.wrapper}>
            {dislikes.map((obj, index: number) => (
                <img alt={"myImg"} key={index} src={obj.image.url}></img>
            ))}
        </section>
    )
}
