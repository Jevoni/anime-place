import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useGetRequestQuery, useGetAnimeDetailsQuery } from '../services/animeApi'

import Header from '../layout/Header'
import AnimeSidebar from '../layout/AnimeSidebar'
import GenreSidebar from '../layout/GenreSidebar'
import Footer from '../layout/Footer'
import VideoPlayer from '../layout/VideoPlayer'
import EpisodesBody from '../layout/EpisodesBody'

const AnimeVideoPage = () => {
    const episodeId = useParams()
    useGetRequestQuery(episodeId)

    const animeId = (episodeId.episodeId.split('-episode'))[0]
    const { data, isFetching } = useGetAnimeDetailsQuery(animeId)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box padding='15px'>
            <Header isHome={false} />
            <Box display='flex' marginTop='20px'>
                <AnimeSidebar />
                <Box width='70%'>
                    <VideoPlayer anime={data} />
                    <EpisodesBody episodes={data?.episodesList} />
                </Box>
                <GenreSidebar />
            </Box>
            <Footer />
        </Box>
    )
}

export default AnimeVideoPage