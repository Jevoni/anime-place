import React from 'react'
import { Box } from '@mui/material'
import { useGetRequestQuery } from '../services/animeApi'
import { useSelector } from 'react-redux'
import { searchType } from '../services/searchSlice'

import Header from '../layout/Header'
import Body from '../layout/Body'
import Sidebar from '../layout/GenreSidebar'
import Loading from '../components/Loading'

const Homepage = () => {
    const search = useSelector(searchType)
    const { data, isFetching } = useGetRequestQuery(search)

    if (isFetching) return (
        <>
            <Header isHome={true} />
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '70vh'
            }}>
                <Loading />
            </Box>
        </>
    )

    return (
        <>
            <Header isHome={true} />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: { xs: '0px', sm: '5px', md: '10px', lg: '15px' },
                paddingRight: { xs: '0px', sm: '5px', md: '10px', lg: '15px' },
                paddingBottom: '20px',
                width: '100%',
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
                }}>
                    <Body data={data} />
                    <Sidebar />
                </Box>
            </Box>
        </>
    )
}

export default Homepage