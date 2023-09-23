import style from "./dislikes.module.scss";
import React, {useEffect} from "react";
import {BackButtonCategory, DislikesGrid, Loader} from "../../index.ts";
import {fetchDislikesVotes} from "../../store/slices/dislikesSlice/dislikesSlice.ts";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {Status} from "../../store/slices/dislikesSlice/dislikesTypes.ts";

const Dislikes: React.FC = () => {
    const {dislikes, status} = useAppSelector((state) => state.dislikes)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchDislikesVotes())
    }, [])

    return (
        <div className={style.wrapper}>
            <BackButtonCategory/>
            {status === Status.LOADING ? <Loader/> : <DislikesGrid dislikes={dislikes}/>}
        </div>
    )
}

export default Dislikes
