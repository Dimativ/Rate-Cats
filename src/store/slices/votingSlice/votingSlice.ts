import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import {API_KEY} from "../../../api.ts";
import {Status, VotingItem, VotingSliceState} from "./votingTypes.ts";

const initialState: VotingSliceState = {
    items: [],
    status: Status.LOADING // loading | success | error
}


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
    async (id: string) => {
        const postData = {
            image_id: id,
            value: -1, // Upvote value
        };
        await axios.post(upAndDownVoteEndpoint, postData, config)
    }
)
export const postVoteUp = createAsyncThunk(
    'voting/postVoteUp',

    async (id: string) => {
        const postData = {
            image_id: id,
            value: 1, // Upvote value
        };
        await axios.post(upAndDownVoteEndpoint, postData, config)
    }
)

export const votingSlice = createSlice({
    name: 'voting',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<VotingItem[]>) {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchImages.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = Status.SUCCESS
        });
        builder.addCase(fetchImages.pending, (state) => {
            state.items = []
            state.status = Status.LOADING
        });

    }
})

// Action creators are generated for each case reducer function
export const {setItems} = votingSlice.actions

export default votingSlice.reducer