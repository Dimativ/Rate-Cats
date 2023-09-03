import style from "./dislikes.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {BackButtonCategory, DislikesGrid, Loader} from "../../index.ts";
import {fetchDislikesVotes} from "../../store/slices/dislikesSlice/dislikesSlice.ts";

const Dislikes = () => {
    const {dislikes, status} = useSelector((state) => state.dislikes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDislikesVotes())
    }, [])

    return (
        <div className={style.wrapper}>
            <BackButtonCategory/>
            {status === 'loading' ? <Loader/> : <DislikesGrid dislikes={dislikes}/>}
        </div>
    )
}

export default Dislikes
