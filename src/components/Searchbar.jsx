import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setSearch, search } from '../services/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, TextField } from '@mui/material'

const Searchbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const search_ = useSelector(search)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        navigate(`/search/${search_}`)
    }

    return (
        <Box sx={{
            paddingBottom: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <form onSubmit={onSubmitHandler}>
                <input
                    placeholder='Search Anime...'
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                    value={search_}
                    style={{
                        width: '250px',
                        height: '30px',
                        borderRadius: '13px',
                        border: '2px solid black'
                    }} />
                <Button type='submit' variant='filled' sx={{ fontSize: { xs: '9.5px', sm: '10px', md: '11px', lg: '12px' }, fontWeight: 'bold', backgroundColor: '#FF6347', borderRadius: '13px', height: '30px', border: '1.2px solid black', boxShadow: '1.5px 1.5px', }}>
                    Search
                </Button>
            </form>
        </Box>
    )
}

export default Searchbar