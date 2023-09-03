import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {API_KEY} from "../../../api.ts";

const initialState = {
    dislikes: [],
    status: 'loading' // loading | success | error
}

export const fetchDislikesVotes = createAsyncThunk(
    'dislikes/fetchVotes',
    async () => {
        const {data} = await axios.get('https://api.thecatapi.com/v1/votes?limit=60&order=DESC', {
            headers: {
                'x-api-key': API_KEY
            }
        })
        return data.filter((dislikes) => dislikes.value === -1)
    }
)

export const dislikesSlice = createSlice({
    name: 'dislikes',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchDislikesVotes.fulfilled]: (state, action) => {
            state.dislikes = action.payload
            state.status = 'success'
        },
        [fetchDislikesVotes.pending]: (state) => {
            state.dislikes = []
            state.status = 'loading'
        }
    }
})

// Action creators are generated for each case reducer function
export const {} = dislikesSlice.actions

export default dislikesSlice.reducer