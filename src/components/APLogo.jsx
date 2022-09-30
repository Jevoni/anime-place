import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchVariable } from '../services/searchSlice'
import { Box, Button } from '@mui/material'

const APLogo = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onClickHandler = (e) => {
        dispatch(setSearchVariable(e.target.value))
        navigate('/')
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Button variant='filled' style={{ fontWeight: 'bold', padding: '0' }} value='recent-release' onClick={onClickHandler}>Anime Place</Button>
        </Box >
    )
}

export default APLogo