import React from 'react'
import { Box, Typography } from '@mui/material'

const EpisodeCard = ({ episodeDetails }) => {
    return (
        <Box padding='10px' border='2px solid black' margin='2px'>
            <Typography fontSize='14px'>Episode {episodeDetails.episodeNum}</Typography>
        </Box>
    )
}

export default EpisodeCard