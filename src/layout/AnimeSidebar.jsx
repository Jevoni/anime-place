import React from 'react'
import { Box, Typography } from '@mui/material'
import { useGetRequestQuery } from '../services/animeApi'

import AnimeCard from '../components/AnimeCard'

const AnimeSidebar = () => {
    const { data, isFetching } = useGetRequestQuery('recent-release')

    return (
        <Box className='anime-bar' sx={{ border: '2px solid black', padding: '5px', backgroundColor: '#c78c53' }}>
            <Typography paddingBottom='10px' fontWeight='bold'>Recent Releases: </Typography>
            {data?.slice(0, 4).map((data, i) => (
                <AnimeCard data={data} key={i} />
            ))}
        </Box>
    )
}

export default AnimeSidebar