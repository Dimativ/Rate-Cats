import style from "./likes.module.scss";
import {BackButtonCategory} from "../../components/backButtonCategory/backButtonCategory.tsx";
import {LikesGrid, Loader} from "../../index.ts";
import React, {useEffect} from "react";
import {fetchLikesVotes} from "../../store/slices/likesSlice/likesSlice.ts";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {Status} from "../../store/slices/likesSlice/likesTypes.ts";

const Likes: React.FC = () => {
    const {likes, status} = useAppSelector((state) => state.likes)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchLikesVotes())
    }, [])

    return (
        <div className={style.wrapper}>
            <BackButtonCategory/>
            {status === Status.LOADING ? <Loader/> : <LikesGrid likes={likes}/>}
        </div>
    )
}

export default Likes
