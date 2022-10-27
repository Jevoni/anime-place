import React from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useGetAnimeDetailsQuery } from '../services/animeApi'

import Header from '../layout/Header'
import Sidebar from '../layout/GenreSidebar'
import AnimeDetailsBody from '../layout/AnimeDetailsBody'
import AnimeSidebar from '../layout/AnimeSidebar'
import EpisodesBody from '../layout/EpisodesBody'
import Loading from '../components/Loading'

const AnimeDetailsPage = () => {
    const animeId = useParams()
    const { data, isFetching } = useGetAnimeDetailsQuery(animeId.animeId)
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
                }}
                >
                    <AnimeSidebar />
                    <Box sx={{ padding: '5px', width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <AnimeDetailsBody data={data} />
                        <EpisodesBody episodes={data.episodesList} />
                    </Box>
                    <Sidebar />
                </Box>
            </Box >
        </>
    )
}

export default AnimeDetailsPage