import style from "./favourite.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Loader, BackButtonCategory, FavouriteGrid} from "../../index.ts";
import {
    deleteFavouriteVote,
    fetchFavouriteVotes,
} from "../../store/slices/favouriteSlice/favouriteSlice.ts";
import toast, {Toaster} from "react-hot-toast";

const Favourite = () => {
    const {favourite, status} = useSelector((state) => state.favourite)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFavouriteVotes())
    }, [])

    const onClickDeleteFavourite = (id) => {
        toast.promise(
            dispatch(deleteFavouriteVote(id)),
            {
                loading: 'Saving...',
                success: `Image removed from favourites`,
                error: `Error`,
            },
            {
                style: {
                    minWidth: '250px',
                },
                success: {
                    duration: 4000,
                    icon: '💔',
                },
            }
        );
    }

    return (
        <div className={style.wrapper}>
            <Toaster position='top-right'/>
            <BackButtonCategory/>
            {status === 'loading' ? <Loader/> :
                <FavouriteGrid onClickDeleteFavourite={onClickDeleteFavourite} favourite={favourite}/>}
        </div>
    )
}

export default Favourite
