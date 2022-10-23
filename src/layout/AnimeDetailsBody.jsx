import React from 'react'

import { Typography, Box } from '@mui/material'

const AnimeDetailsBody = ({ data }) => {
    return (
        <Box sx={{
            padding: '10px',
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            border: '2px solid black',
            backgroundColor: '#c78c53'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: { xs: '100%', sm: '100%', md: '50%' },
                textAlign: 'center'
            }}>
                <Box component='img' src={data.animeImg} alt='Thumbnail of the anime' sx={{ boxShadow: '0px 0px 5px 2px black', height: { xs: '400px' }, width: { xs: '240px' } }} />
                <Box paddingTop='10px'>
                    <Typography fontSize='14px' fontWeight='bold'>{data.animeTitle}</Typography>
                </Box>
            </Box>
            <Box sx={{ padding: '5px', width: { xs: '100%', sm: '100%', md: '50%' } }}>
                <Typography fontSize='19px' fontWeight='bold'>{data.animeTitle}</Typography>
                <Box paddingTop='17px'>
                    <Typography fontSize='14px' fontWeight='bold' paddingTop='8px'>Other Names: <span style={{ fontWeight: 'normal' }}>{data.otherNames}</span> </Typography>
                    <Typography fontSize='14px' fontWeight='bold' paddingTop='8px'>Release Date: <span style={{ fontWeight: 'normal' }}>{data.releasedDate}</span></Typography>
                    <Typography fontSize='14px' fontWeight='bold' paddingTop='8px'>Status: <span style={{ fontWeight: 'normal' }}>{data.status}</span></Typography>
                    <Typography fontSize='14px' fontWeight='bold' paddingTop='8px'>Genres: <span style={{ fontWeight: 'normal' }}>{Object.values(data.genres) + ''}</span></Typography>
                    <Typography fontSize='14px' fontWeight='bold' paddingTop='8px'>Total Episodes: <span style={{ fontWeight: 'normal' }}>{data.totalEpisodes}</span></Typography>
                    <Typography fontSize='14px' fontWeight='bold' paddingTop='8px'>Summary: <span style={{ fontWeight: 'normal' }}>{data.synopsis}</span></Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default AnimeDetailsBody