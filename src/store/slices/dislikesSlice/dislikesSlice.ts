import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {API_KEY} from "../../../api.ts";
import {DislikesSliceState, Status, DislikeItem} from "./dislikesTypes.ts";


const initialState: DislikesSliceState = {
    dislikes: [],
    status: Status.LOADING // loading | success | error
}

export const fetchDislikesVotes = createAsyncThunk(
    'dislikes/fetchVotes',
    async () => {
        const {data} = await axios.get('https://api.thecatapi.com/v1/votes?limit=60&order=DESC', {
            headers: {
                'x-api-key': API_KEY
            }
        })
        return data.filter((dislikes: DislikeItem) => dislikes.value === -1)
    }
)

export const dislikesSlice = createSlice({
    name: 'dislikes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDislikesVotes.fulfilled, (state, action) => {
            state.dislikes = action.payload
            state.status = Status.SUCCESS
        });
        builder.addCase(fetchDislikesVotes.pending, (state) => {
            state.dislikes = []
            state.status = Status.LOADING
        });
    }
})

// Action creators are generated for each case reducer function


export default dislikesSlice.reducer