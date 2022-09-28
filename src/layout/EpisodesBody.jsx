import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import EpisodeCard from '../components/EpisodeCard'

const EpisodesBody = ({ episodes }) => {

    return (
        <Box margin='10px' padding='15px'>
            <Typography paddingBottom='10px'>Episodes:</Typography>
            <Box display='flex' flexWrap='wrap'>
                {[...episodes].reverse().map((details) => (
                    <Link to={`/watch/${details.episodeId}`} style={{ textDecoration: 'none', color: 'black' }}><EpisodeCard episodeDetails={details} /></Link>
                ))}
            </Box>
        </Box>
    )
}

export default EpisodesBody