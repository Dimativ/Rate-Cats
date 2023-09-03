import {configureStore} from '@reduxjs/toolkit'
import voting from "./slices/votingSlice/votingSlice.ts"
import likes from "./slices/likesSlice/likesSlice.ts"
import dislikes from "./slices/dislikesSlice/dislikesSlice.ts"
import favourite from "./slices/favouriteSlice/favouriteSlice.ts"

export const store = configureStore({
    reducer: {
        voting,
        likes,
        dislikes,
        favourite,
    },
})