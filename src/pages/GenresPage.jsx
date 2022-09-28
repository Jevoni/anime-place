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
        <Box padding='15px'>
            <Header isGenre={true} />
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

export default GenresPage