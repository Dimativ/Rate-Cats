import style from "./voting.module.scss"
import {BackButtonCategory, VoteImgAndButtons} from "../../index.ts";
import React from "react";
import {useAppSelector} from "../../store/store.ts";

const Voting: React.FC = () => {
    const {items, status} = useAppSelector((state) => state.voting)

    return (
        <div className={style.wrapper}>
            <BackButtonCategory/>
            <VoteImgAndButtons items={items} status={status}/>
        </div>
    )
}

export default Voting
