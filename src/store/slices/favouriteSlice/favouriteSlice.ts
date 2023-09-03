import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {API_KEY} from "../../../api.ts";

const initialState = {
    favourite: [],
    status: 'loading' // loading | success | error
}

export const fetchFavouriteVotes = createAsyncThunk(
    'favourite/fetchVotes',
    async () => {
        const {data} = await axios.get('https://api.thecatapi.com/v1/favourites', {
            headers: {
                'x-api-key': API_KEY
            }
        })
        return data
    }
)

export const deleteFavouriteVote = createAsyncThunk(
    'favourite/deleteFavouriteVote',
    async (id) => {
        await axios.delete(`https://api.thecatapi.com/v1/favourites/${id}`, {
            headers: {
                'x-api-key': API_KEY
            }
        })
        return id
    }
)


export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchFavouriteVotes.fulfilled]: (state, action) => {
            state.favourite = action.payload
            state.status = 'success'
        },
        [fetchFavouriteVotes.pending]: (state) => {
            state.favourite = []
            state.status = 'loading'
        },
        [deleteFavouriteVote.fulfilled]: (state, action) => {
            state.favourite = state.favourite.filter((obj) => obj.id !== action.payload)
        },
    }
})

// Action creators are generated for each case reducer function
export const {} = favouriteSlice.actions

export default favouriteSlice.reducer