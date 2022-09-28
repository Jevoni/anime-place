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
        <Box padding='15px'>
            <Header isHome={false} />
            <Box
                display='flex'
                marginTop='20px'
                padding='15px'
            >
                <AnimeSidebar />
                <Box
                    padding='5px'
                    width='70%'
                    display='flex'
                    flexDirection='column'
                >
                    <AnimeDetailsBody data={data} />
                    <EpisodesBody episodes={data.episodesList} />
                </Box>
                <Sidebar />
            </Box>
            <Footer />
        </Box>
    )
}

export default AnimeDetailsPage