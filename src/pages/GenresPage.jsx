import React from 'react'
import { Box } from '@mui/material'
import { useGetGenreQuery } from '../services/animeApi'
import { useParams } from 'react-router-dom'

import Header from '../layout/Header'
import Body from '../layout/Body'
import Sidebar from '../layout/GenreSidebar'
import Footer from '../layout/Footer'

const GenresPage = () => {
    const genre = useParams()
    const { data, isFetching } = useGetGenreQuery(genre)

    if (isFetching) return 'Loading'

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: { xs: '0px', sm: '5px', md: '10px', lg: '15px' },
            width: '100%'
        }}>
            <Header isGenre={true} />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
                    padding: { xs: '0px', sm: '5px', md: '10px', lg: '15px' },
                }}
            >
                <Body data={data} isSearch={true} />
                <Sidebar />
            </Box>
            <Footer />
        </Box>
    )
}

export default GenresPage