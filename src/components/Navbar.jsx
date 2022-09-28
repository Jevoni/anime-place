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
        <Box style={{
            color: 'black',
            paddingTop: '15px'
        }}>
            <Button variant='filled' style={{ fontWeight: 'bold', border: '2px solid #fddcb5', marginRight: '3px', borderRadius: '20px' }} value='recent-release' onClick={onClickHandler}>Recent Episodes</Button>
            <Button variant='filled' style={{ fontWeight: 'bold', border: '2px solid #fddcb5', marginRight: '3px', borderRadius: '20px' }} value='popular' onClick={onClickHandler}>Popular Anime</Button>
            <Button variant='filled' style={{ fontWeight: 'bold', border: '2px solid #fddcb5', marginRight: '3px', borderRadius: '20px' }} value='anime-movies' onClick={onClickHandler}>Anime Movies</Button>
            {isHome ?
                <Typography paddingTop='20px' paddingBottom='35px' fontSize='16.5px'>Showing: {searchT}</Typography>
                : null
            }
            {isGenre ?
                <Typography paddingTop='20px' paddingBottom='35px' fontSize='16.5px'>Showing: {genre} animes</Typography>
                : null
            }

        </Box>
    )
}

export default Navbar