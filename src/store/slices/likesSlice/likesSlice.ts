import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {API_KEY} from "../../../api.ts";

const initialState = {
    likes: [],
    status: 'loading' // loading | success | error
}

export const fetchLikesVotes = createAsyncThunk(
    'likesDislikes/fetchVotes',
    async () => {
        const {data} = await axios.get('https://api.thecatapi.com/v1/votes?limit=40&order=DESC', {
            headers: {
                'x-api-key': API_KEY
            }
        })
        return data.filter((likes) => likes.value === 1)
    }
)

export const likesSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchLikesVotes.fulfilled]: (state, action) => {
            state.likes = action.payload
            state.status = 'success'
        },
        [fetchLikesVotes.pending]: (state) => {
            state.likes = []
            state.status = 'loading'
        }
    }
})

// Action creators are generated for each case reducer function
export const {} = likesSlice.actions

export default likesSlice.reducer