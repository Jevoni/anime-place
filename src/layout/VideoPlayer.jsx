import React from 'react'
import { Box, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { useGetStreamingUrlQuery } from '../services/animeApi'

const VideoPlayer = ({ anime }) => {
    const episodeId = useParams()
    const { data, isFetching } = useGetStreamingUrlQuery(episodeId)

    const episodeNum = episodeId?.episodeId.split('episode-')[1]

    return (
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Typography sx={{
                fontWeight: 'bold',
                fontSize: { xs: '18px', sm: '20px', md: '21.5px', lg: '23px' },
                paddingBottom: '25px'
            }}
            >
                {anime?.animeTitle}
            </Typography>

            <Box width='100%' display='flex' justifyContent='center'>
                <ReactPlayer height='490px' width='850px' controls url={data?.sources_bk[0].file} config={{
                    file: {
                        forceHLS: true
                    }
                }} />
            </Box>
            <Typography paddingTop='15px'>
                Episode {episodeNum}
            </Typography>
        </Box >
    )
}

export default VideoPlayer