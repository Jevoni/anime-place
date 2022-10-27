import React from 'react'
import { Box } from '@mui/material'
import { useGetGenreQuery } from '../services/animeApi'
import { useParams } from 'react-router-dom'

import Header from '../layout/Header'
import Body from '../layout/Body'
import Sidebar from '../layout/GenreSidebar'
import Loading from '../components/Loading'

const GenresPage = () => {
    const genre = useParams()
    const { data, isFetching } = useGetGenreQuery(genre)

    if (isFetching) return (
        <>
            <Header isGenre={true} />
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
            <Header isGenre={true} />
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
                    padding: { xs: '0px', sm: '5px', md: '10px', lg: '15px' },
                }}>
                    <Body data={data} isSearch={true} />
                    <Sidebar />
                </Box>
            </Box>
        </>
    )
}

export default GenresPage