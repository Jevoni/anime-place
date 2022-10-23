import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import EpisodeCard from '../components/EpisodeCard'

const EpisodesBody = ({ episodes }) => {

    return (
        <Box sx={{ margin: '10px', padding: '15px', backgroundColor: '#c78c53', border: '2px solid black' }}>
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