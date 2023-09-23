import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {API_KEY} from "../../../api.ts";
import {FavouriteItem, FavouriteSliceState, Status} from "./favouriteTypes.ts";

const initialState: FavouriteSliceState = {
    favourite: [],
    status: Status.LOADING // loading | success | error
}

export const fetchFavouriteVotes = createAsyncThunk(
    'favourite/fetchVotes',
    async () => {
        const {data} = await axios.get('https://api.thecatapi.com/v1/favourites', {
            headers: {
                'x-api-key': API_KEY
            }
        })
        return data as FavouriteItem[]
    }
)

export const deleteFavouriteVote = createAsyncThunk(
    'favourite/deleteFavouriteVote',
    async (id: number) => {
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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFavouriteVotes.fulfilled, (state, action) => {
            state.favourite = action.payload
            state.status = Status.SUCCESS
        });
        builder.addCase(fetchFavouriteVotes.pending, (state) => {
            state.favourite = []
            state.status = Status.LOADING
        });
        builder.addCase(deleteFavouriteVote.fulfilled, (state, action) => {
            state.favourite = state.favourite.filter((obj) => obj.id !== action.payload)
        });
    }
})

// Action creators are generated for each case reducer function


export default favouriteSlice.reducer