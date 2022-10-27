import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useGetRequestQuery, useGetAnimeDetailsQuery } from '../services/animeApi'

import Header from '../layout/Header'
import AnimeSidebar from '../layout/AnimeSidebar'
import GenreSidebar from '../layout/GenreSidebar'
import VideoPlayer from '../layout/VideoPlayer'
import EpisodesBody from '../layout/EpisodesBody'
import Loading from '../components/Loading'

const AnimeVideoPage = () => {
    const episodeId = useParams()
    useGetRequestQuery(episodeId)

    const animeId = (episodeId.episodeId.split('-episode'))[0]
    const { data, isFetching } = useGetAnimeDetailsQuery(animeId)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    if (isFetching) return (
        <>
            <Header isHome={false} />
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
                    flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
                    marginTop: '20px',
                    padding: '15px',
                }}>
                    <AnimeSidebar />
                    <Box sx={{ padding: '5px', width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <VideoPlayer anime={data} />
                        <EpisodesBody episodes={data?.episodesList} />
                    </Box>
                    <GenreSidebar />
                </Box>
            </Box>
        </>
    )
}

export default AnimeVideoPage