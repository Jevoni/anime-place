import React from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useGetAnimeDetailsQuery } from '../services/animeApi'

import Header from '../layout/Header'
import Sidebar from '../layout/GenreSidebar'
import Footer from '../layout/Footer'
import AnimeDetailsBody from '../layout/AnimeDetailsBody'
import AnimeSidebar from '../layout/AnimeSidebar'
import EpisodesBody from '../layout/EpisodesBody'

const AnimeDetailsPage = () => {
    const animeId = useParams()
    const { data, isFetching } = useGetAnimeDetailsQuery(animeId.animeId)
    if (isFetching) return 'Loading...'

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: { xs: '0px', sm: '5px', md: '10px', lg: '15px' },
            width: '100%'
        }}>
            <Header isHome={false} />
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
                marginTop: '20px',
                padding: '15px',
            }}
            >
                <AnimeSidebar />
                <Box
                    padding='5px'
                    width='100%'
                    display='flex'
                    flexDirection='column'
                >
                    <AnimeDetailsBody data={data} />
                    <EpisodesBody episodes={data.episodesList} />
                </Box>
                <Sidebar />
            </Box>
            <Footer />
        </Box >
    )
}

export default AnimeDetailsPage