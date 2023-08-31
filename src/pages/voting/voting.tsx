import style from "./voting.module.scss"
import {BackButtonCategory, VoteImgAndButtons} from "../../index.ts";
import {useSelector} from "react-redux";
const Voting = () => {
    const {items, status} = useSelector((state) => state.voting)

    return (
        <div className={style.wrapper}>
            <BackButtonCategory/>
            <VoteImgAndButtons items = {items} status={status}/>
        </div>
    )
}

export default Voting
