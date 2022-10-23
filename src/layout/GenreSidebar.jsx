import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

const GenreSidebar = () => {
    const genres = [{ name: 'Action', value: 'action' }, { name: 'Adventure', value: 'adventure' }, { name: 'Cars', value: 'cars' }, { name: 'Comedy', value: 'comedy ' }, { name: 'Crime', value: 'crime' }, { name: 'Dementia', value: 'dementia' }, { name: 'Demons', value: 'demons' }, { name: 'Drama', value: 'drama' }, { name: 'Dub', value: 'dub' }, { name: 'Ecchi', value: 'ecchi' }, { name: 'Family', value: 'family' }, { name: 'Fantasy', value: 'fantasy' }, { name: 'Game', value: 'game' }, { name: 'Gourmet', value: 'gourmet' }, { name: 'Harem', value: 'harem' }, { name: 'Hentai', value: 'hentai' }, { name: 'Historical', value: 'historical' }, { name: 'Horror', value: 'horror' }, { name: 'Josei', value: 'josei' }, { name: 'Kids', value: 'kids' }, { name: 'Magic', value: 'magic' }, { name: 'Martial Arts', value: 'martial-arts' }, { name: 'Mecha', value: 'mecha' }, { name: 'Military', value: 'military' }, { name: 'Music', value: 'music' }, { name: 'Mystery', value: 'mystery' }, { name: 'Parody', value: 'parody' }, { name: 'Police', value: 'police' }, { name: 'Psychological', value: 'psychological' }, { name: 'Romance', value: 'romance' }, { name: 'Samurai', value: 'samurai' }, { name: 'School', value: 'school' }, { name: 'Sci - Fi', value: 'sci-fi' }, { name: 'Seinen', value: 'seinen' }, { name: 'Shoujo', value: 'shoujo' }, { name: 'Shoujo - Ai', value: 'shoujo-ai' }, { name: 'Shounen', value: 'shounen' }, { name: 'Shounen - Ai', value: 'shounen-ai' }, { name: 'Slice of Life', value: 'slice-of-life' }, { name: 'Space', value: 'space' }, { name: 'Sports', value: 'sports' }, { name: 'Super Power', value: 'super-power' }, { name: 'Supernatural', value: 'supernatural' }, { name: 'Suspense', value: 'suspense' }, { name: 'Thriller', value: 'thriller' }]

    return (
        <Box className='anime-bar' sx={{ maxHeight: '1200px', backgroundColor: '#FF6347', boxShadow: '1px 1px', padding: '10px', textAlign: 'center', border: '2px solid black', }}>
            <Typography style={{ fontWeight: 'bold' }}>
                Anime Genres
            </Typography>
            <Box component='ul' sx={{ listStyleType: 'none', margin: 0, padding: 0, }}>
                {genres.map(({ name, value }, i) => (
                    <Link to={`/genre/${value}`} key={i} style={{ textDecoration: 'none', color: 'black' }} value={value}><li>{name}</li></Link>
                ))}
            </Box>
        </Box >
    )
}

export default GenreSidebar