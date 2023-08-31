import {configureStore} from '@reduxjs/toolkit'
import voting from "./slices/votingSlice/votingSlice.ts"

export const store = configureStore({
    reducer: {
        voting,
    },
})