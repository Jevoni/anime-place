import React from 'react'
import { Box, Typography } from '@mui/material'
import { useGetRequestQuery } from '../services/animeApi'

import AnimeCard from '../components/AnimeCard'

const AnimeSidebar = () => {
    const { data, isFetching } = useGetRequestQuery('recent-release')

    return (
        <Box display='flex' flexDirection='column'>
            <Typography paddingBottom='10px'>Recent Animes: </Typography>
            {data?.slice(0, 4).map((data, i) => (
                <AnimeCard data={data} key={i} />
            ))}
        </Box>
    )
}

export default AnimeSidebar