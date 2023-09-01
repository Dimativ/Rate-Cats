import style from "./likes.module.scss";
import {BackButtonCategory} from "../../components/backButtonCategory/backButtonCategory.tsx";
import {LikesGrid, Loader} from "../../index.ts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchLikesVotes} from "../../store/slices/likesSlice/likesSlice.ts";

const Likes = () => {
    const {likes, status} = useSelector((state) => state.likes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchLikesVotes())
    }, [])

    return (
        <div className={style.wrapper}>
            <BackButtonCategory/>
            {status === 'loading' ? <Loader/> : <LikesGrid likes={likes}/>}
        </div>
    )
}

export default Likes
