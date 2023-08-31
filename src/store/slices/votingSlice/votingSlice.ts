import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {API_KEY} from "../../../api.ts";

const config = {
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
    },
};
const upAndDownVoteEndpoint = `https://api.thecatapi.com/v1/votes`
export const fetchImages = createAsyncThunk(
    'voting/fetchImages',
    async () => {
        const {data} = await axios.get('https://api.thecatapi.com/v1/images/search?', {
            headers: {
                'x-api-key': API_KEY
            }
        })
        return data
    }
)

export const postVoteDown = createAsyncThunk(
    'voting/postVoteDown',
    async (id) => {
        const postData = {
            image_id: id,
            value: -1, // Upvote value
        };
        await axios.post(upAndDownVoteEndpoint, postData, config)
    }
)
export const postVoteUp = createAsyncThunk(
    'voting/postVoteUp',

    async (id) => {
        const postData = {
            image_id: id,
            value: 1, // Upvote value
        };
        await axios.post(upAndDownVoteEndpoint, postData, config)
    }
)


const initialState = {
    items: [],
    status: 'loading' // loading | success | error
}

export const votingSlice = createSlice({
    name: 'voting',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        },
    },
    extraReducers: {
        [fetchImages.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'success'
        },
        [fetchImages.pending]: (state) => {
            state.items = []
            state.status = 'loading'
        }
    }
})

// Action creators are generated for each case reducer function
export const {setItems} = votingSlice.actions

export default votingSlice.reducer