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
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: { xs: '0px', sm: '5px', md: '10px', lg: '15px' },
            width: '100%'
        }}>
            <Header isHome={true} />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
                    padding: { xs: '0px', sm: '5px', md: '10px', lg: '15px' },
                }}
            >
                <Body data={data} />
                <Sidebar />
            </Box>
            <Footer />
        </Box>
    )
}

export default Homepage