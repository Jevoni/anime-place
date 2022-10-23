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
        <>
            <Header isHome={false} />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: { xs: '0px', sm: '5px', md: '10px', lg: '15px' },
                paddingRight: { xs: '0px', sm: '5px', md: '10px', lg: '15px' },
                paddingBottom: '20px',
                width: '100%'
            }}>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
                    padding: { xs: '0px', sm: '0px', md: '0px', lg: '15px' },
                }}>
                    <Body data={data} isSearch={true} />
                    <Sidebar />
                </Box>
            </Box>
        </>
    )
}

export default SearchPage