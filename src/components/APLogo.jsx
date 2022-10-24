import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchVariable } from '../services/searchSlice'
import { Box, Button, Typography } from '@mui/material'

import styles from './APLogo.module.css'

const APLogo = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onClickHandler = (e) => {
        dispatch(setSearchVariable('recent-release'))
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: { xs: 'center', lg: 'flex-start' },
            marginLeft: { lg: '10px' }
        }}>
            {/* <Box component='img' sx={{ height: { xs: '20px', md: '30px' } }}
                src="https://see.fontimg.com/api/renderfont4/zAqL/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/QU5JTUUgUExBQ0U/one-piece.png"
                alt="Anime fonts" value='recent-release' onClick={onClickHandler} /> */}
            <Link to='/' className={styles.logo} onClick={onClickHandler}>Anime <span style={{ color: '#69a3db' }}>Place</span></Link>
        </Box >
    )
}

export default APLogo