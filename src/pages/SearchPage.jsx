import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useGetAnimeSearchQuery } from '../services/animeApi'
import { useParams } from 'react-router-dom'
import { search } from '../services/searchSlice'

import Header from '../layout/Header'
import Body from '../layout/Body'
import Sidebar from '../layout/GenreSidebar'
import Footer from '../layout/Footer'

const SearchPage = () => {
    const params = useParams()
    const { data, isFetching } = useGetAnimeSearchQuery(params)

    if (isFetching) return 'Loading'

    return (
        <Box padding='15px'>
            <Header isHome={false} />
            <Box display='flex'
                padding='15px'
                justifyContent='space-between'
            >
                <Body data={data} isSearch={true} />
                <Sidebar />
            </Box>
            <Footer />
        </Box>
    )
}

export default SearchPage