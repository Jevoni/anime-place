import React from 'react'
import { Box, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { useGetStreamingUrlQuery } from '../services/animeApi'

import Loading from '../components/Loading'

const VideoPlayer = ({ anime }) => {
    const episodeId = useParams()
    const { data, isFetching } = useGetStreamingUrlQuery(episodeId)

    const episodeNum = episodeId?.episodeId.split('episode-')[1]

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '18px', sm: '20px', md: '21.5px', lg: '23px' }, paddingBottom: '25px' }}>
                {anime?.animeTitle}
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ boxShadow: '0px 0px 5px 2px black', width: { xs: '100%', sm: '95%', lg: '90%' } }}>
                    {(isFetching) ?
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                            <Loading />
                        </Box>
                        :
                        <ReactPlayer width='100%' height='auto' controls url={data?.sources_bk[0].file} config={{
                            file: {
                                forceHLS: true
                            }
                        }} />
                    }
                </Box>
            </Box>
            <Typography paddingTop='15px'>
                Episode {episodeNum}
            </Typography>
        </Box >
    )
}

export default VideoPlayer