import {configureStore} from '@reduxjs/toolkit'
import voting from "./slices/votingSlice/votingSlice.ts"
import likes from "./slices/likesSlice/likesSlice.ts"

export const store = configureStore({
    reducer: {
        voting,
        likes,
    },
})