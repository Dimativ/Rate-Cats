import style from "./likesGrid.module.scss"
import React from "react";
import {LikeItem} from "../../../store/slices/likesSlice/likesTypes.ts";

type LikesGridProps = {
    likes: LikeItem[];
}
export const LikesGrid: React.FC<LikesGridProps> = ({likes}) => {
    return (
        <section className={style.wrapper}>
            {likes.map((obj, index: number) => (
                <img alt={"myImg"} key={index} src={obj.image.url}></img>
            ))}
        </section>
    )
}
