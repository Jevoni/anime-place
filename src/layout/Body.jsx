import React, { useEffect } from 'react'
import { Box } from '@mui/material'

import AnimeCard from '../components/AnimeCard'

const Body = ({ data, isSearch }) => {
    if (!data) return 'No Data...'

    return (
        <Box sx={{ maxWidth: '1844px' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', }}>
                {data?.map((anime) => (
                    <AnimeCard data={anime} isSearch={isSearch} />
                ))}
            </Box>
        </Box >
    )
}

export default Body