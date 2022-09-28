import React from 'react'

import { Typography, Box } from '@mui/material'

const AnimeDetailsBody = ({ data }) => {
    return (
        <Box
            padding='5px'
            width='70%'
            display='flex'
        >
            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                width='60%'
                textAlign='center'
            >
                <Box
                    component='img'
                    height='500px'
                    width='340px'
                    src={data.animeImg}
                    alt='Thumbnail of the anime'
                />
                <Box paddingTop='10px'>
                    <Typography fontSize='14px' fontWeight='bold'>{data.animeTitle}</Typography>
                </Box>
            </Box>
            <Box
                padding='5px'
                width='50%'
            >
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