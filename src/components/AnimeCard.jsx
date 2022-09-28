import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { searchType } from '../services/searchSlice'
import { Box, Typography } from '@mui/material'

const AnimeCard = ({ data, isSearch }) => {
    const search = useSelector(searchType)

    return (
        <Box
            textAlign='center'
            padding='5px'
            margin='2px'
            backgroundColor='#fddcb5'
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
                <Link to={`/animeDetails/${data?.animeId}`} style={{ textDecoration: 'none', color: 'black' }}><Typography fontSize='14px' fontWeight='bold' width='170px'>{data?.animeTitle}</Typography></Link>
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