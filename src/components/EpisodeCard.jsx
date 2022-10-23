import React from 'react'
import { Box, Typography } from '@mui/material'

const EpisodeCard = ({ episodeDetails }) => {
    return (
        <Box sx={{ padding: '10px', border: '2px solid black', margin: '2px', backgroundColor: '#FF6347', width: '102px' }}>
            <Typography fontSize='12px'>Episode {episodeDetails.episodeNum}</Typography>
        </Box>
    )
}

export default EpisodeCard