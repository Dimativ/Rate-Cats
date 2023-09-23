import {configureStore} from '@reduxjs/toolkit'
import voting from "./slices/votingSlice/votingSlice.ts"
import likes from "./slices/likesSlice/likesSlice.ts"
import dislikes from "./slices/dislikesSlice/dislikesSlice.ts"
import favourite from "./slices/favouriteSlice/favouriteSlice.ts"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        voting,
        likes,
        dislikes,
        favourite,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector