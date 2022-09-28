import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const animeHeaders = {
    'X-RapidAPI-Key': '718d3fe800msha1bab973e1d8234p1596e7jsn0557e5ee49fa',
    'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
}

const baseUrl = 'https://gogoanime2.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: animeHeaders })

export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getRequest: builder.query({
            query: (request) => createRequest(`/${request}`)
        }),
        getGenre: builder.query({
            query: ({ genre }) => createRequest(`/genre/${genre}`)
        }),
        getAnimeDetails: builder.query({
            query: (animeId) => createRequest(`/anime-details/${animeId}`)
        }),
        getStreamingUrl: builder.query({
            query: ({ episodeId }) => createRequest(`/vidcdn/watch/${episodeId}`)
        }),
        getAnimeSearch: builder.query({
            query: ({ search }) => createRequest(`/search?keyw=${search}`)
        })
    })
})

export const {
    useGetRequestQuery,
    useGetAnimeDetailsQuery,
    useGetStreamingUrlQuery,
    useGetAnimeSearchQuery,
    useGetGenreQuery,
} = animeApi