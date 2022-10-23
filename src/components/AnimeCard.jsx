import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { searchType } from '../services/searchSlice'
import { Box, Typography } from '@mui/material'

const AnimeCard = ({ data, isSearch }) => {
    const search = useSelector(searchType)

    return (
        <Box sx={{
            textAlign: 'center',
            padding: '5px',
            margin: '2px',
            backgroundColor: '#fbb869',
            // backgroundColor: '#3d7dbb',
            backgroundColor: '#69a3db',
            width: { xs: '48.7%', sm: '24.3%', md: '19.5%', lg: '180px' },
            boxShadow: '1.5px 1.5px'
        }}>
            <Link style={{ textDecoration: 'none', }} to={`/animeDetails/${data?.animeId}`}>
                <Box component='img'
                    src={data?.animeImg}
                    height='auto'
                    width='100%'
                    minHeight='245px'
                    sx={{
                        boxShadow: '0px 0px 1px 1px black'
                    }}
                />
            </Link>
            <Box paddingTop='10px'>
                <Link to={`/animeDetails/${data?.animeId}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <Typography fontSize='14px' fontWeight='bold' sx={{ width: { xs: '100%', sm: '100%', md: '100%', lg: '170px' } }}>
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