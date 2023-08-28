import style from "./voting.module.scss"
import {BackButtonCategory, VoteImgAndButtons} from "../../index.ts";
const Voting = () => {
    return (
        <div className={style.wrapper}>
            <BackButtonCategory/>
            <VoteImgAndButtons/>
        </div>
    )
}

export default Voting
