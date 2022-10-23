import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Button, Typography } from '@mui/material'

import { searchType, setSearchVariable } from '../services/searchSlice'

const Navbar = ({ isHome, isGenre }) => {
    const dispatch = useDispatch()
    const searchT = useSelector(searchType)
    const navigate = useNavigate()
    const { genre } = useParams()

    const onClickHandler = (e) => {
        dispatch(setSearchVariable(e.target.value))
        navigate('/')
    }

    return (
        <Box sx={{ paddingTop: '15px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
                <Button variant='filled' sx={{ backgroundColor: '#FF6347', boxShadow: '1.5px 1.5px', fontWeight: 'bold', border: '1.2px solid black', marginRight: '3px', borderRadius: '20px', fontSize: { xs: '9.5px', sm: '10px', md: '11px', lg: '12px' } }} value='recent-release' onClick={onClickHandler}>
                    Recent Episodes
                </Button>
                <Button variant='filled' sx={{ backgroundColor: '#FF6347', boxShadow: '1.5px 1.5px', fontWeight: 'bold', border: '1.2px solid black', marginRight: '3px', borderRadius: '20px', fontSize: { xs: '9.5px', sm: '10px', md: '11px', lg: '12px' } }} value='popular' onClick={onClickHandler}>
                    Popular Anime
                </Button>
                <Button variant='filled' sx={{ backgroundColor: '#FF6347', boxShadow: '1.5px 1.5px', fontWeight: 'bold', border: '1.2px solid black', marginRight: '3px', borderRadius: '20px', fontSize: { xs: '9.5px', sm: '10px', md: '11px', lg: '12px' } }} value='anime-movies' onClick={onClickHandler}>
                    Anime Movies
                </Button>
            </Box>
            {isHome ?
                <Typography className='anime-bar' paddingBottom='10px' fontSize='12px'>Showing: {searchT}</Typography>
                : null
            }
            {isGenre ?
                <Typography className='anime-bar' paddingBottom='10px' fontSize='12px'>Showing: {genre} animes</Typography>
                : null
            }
        </Box>
    )
}

export default Navbar

// <Button variant='filled' sx={{ boxShadow: '1.5px 1.5px', fontWeight: 'bold', border: '1.2px solid #fddcb5', marginRight: '3px', borderRadius: '20px', fontSize: { xs: '9.5px', sm: '10px', md: '11px', lg: '12px' } }} value='anime-movies' onClick={onClickHandler}>
// Anime Movies
// </Button>