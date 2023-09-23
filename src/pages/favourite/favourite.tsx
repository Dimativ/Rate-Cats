import style from "./favourite.module.scss"
import React, {useEffect} from "react";
import {Loader, BackButtonCategory, FavouriteGrid} from "../../index.ts";
import {
    deleteFavouriteVote,
    fetchFavouriteVotes,
} from "../../store/slices/favouriteSlice/favouriteSlice.ts";
import toast, {Toaster} from "react-hot-toast";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {Status} from "../../store/slices/favouriteSlice/favouriteTypes.ts";

const Favourite: React.FC = () => {
    const {favourite, status} = useAppSelector((state) => state.favourite)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchFavouriteVotes())
    }, [])

    const onClickDeleteFavourite = (id: number) => {
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
            {status === Status.LOADING ? <Loader/> :
                <FavouriteGrid onClickDeleteFavourite={onClickDeleteFavourite} favourite={favourite}/>}
        </div>
    )
}

export default Favourite
