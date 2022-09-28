import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchType: 'recent-release',
    search: '',
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchVariable: (state, action) => {
            state.searchType = action.payload
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
    }
})

export default searchSlice.reducer

export const { setSearchVariable, setSearch } = searchSlice.actions

export const searchType = state => state.search.searchType

export const search = state => state.search.search
