import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { searchType } from '../services/searchSlice'
import { Box, Typography } from '@mui/material'

const AnimeCard = ({ data, isSearch }) => {
    const search = useSelector(searchType)

    return (
        <Box
            sx={{
                textAlign: 'center',
                padding: '5px',
                margin: '2px',
                backgroundColor: '#fddcb5',
                width: { xs: '48.7%', sm: '32.5%', md: '24.5%', lg: 'auto' }
            }}
        >
            <Link style={{ textDecoration: 'none', }} to={`/animeDetails/${data?.animeId}`}>
                <Box
                    component='img'
                    src={data?.animeImg}
                    height='250px'
                    width='170px'
                />
            </Link>
            <Box paddingTop='10px'>
                <Link to={`/animeDetails/${data?.animeId}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <Typography fontSize='14px' fontWeight='bold' sx={{
                        width: { xs: '100%', sm: '100%', md: '100%', lg: '170px' }
                    }}>
                        {data?.animeTitle}
                    </Typography>
                </Link>

                {(search === 'recent-release' && !isSearch) ?
                    <Typography fontSize='14px'>Episode {data?.episodeNum}</Typography>
                    :
                    null
                }
            </Box>
        </Box >
    )
}

export default AnimeCard