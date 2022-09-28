import React from 'react'
import { Box } from '@mui/material'
import { useGetRequestQuery } from '../services/animeApi'
import { useSelector } from 'react-redux'
import { searchType } from '../services/searchSlice'

import Header from '../layout/Header'
import Body from '../layout/Body'
import Sidebar from '../layout/GenreSidebar'
import Footer from '../layout/Footer'

const Homepage = () => {
    const search = useSelector(searchType)
    const { data, isFetching } = useGetRequestQuery(search)

    if (isFetching) return 'Loading'

    return (
        <Box padding='15px'>
            <Header isHome={true} />
            <Box display='flex'
                padding='15px'
                justifyContent='space-between'
            >
                <Body data={data} />
                <Sidebar />
            </Box>
            <Footer />
        </Box>
    )
}

export default Homepage