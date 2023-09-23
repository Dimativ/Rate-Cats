import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {API_KEY} from "../../../api.ts";
import {LikeItem, LikesSliceState, Status} from "./likesTypes.ts";

const initialState: LikesSliceState = {
    likes: [],
    status: Status.LOADING // loading | success | error
}

export const fetchLikesVotes = createAsyncThunk(
    'likes/fetchVotes',
    async () => {
        const {data} = await axios.get('https://api.thecatapi.com/v1/votes?limit=60&order=DESC', {
            headers: {
                'x-api-key': API_KEY
            }
        })
        return data.filter((likes: LikeItem) => likes.value === 1)
    }
)

export const likesSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchLikesVotes.fulfilled, (state, action) => {
            state.likes = action.payload
            state.status = Status.SUCCESS
        });
        builder.addCase(fetchLikesVotes.pending, (state) => {
            state.likes = []
            state.status = Status.LOADING
        });
    }
})

// Action creators are generated for each case reducer function


export default likesSlice.reducer