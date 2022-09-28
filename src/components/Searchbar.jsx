import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setSearch, search } from '../services/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/material'

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
            paddingRight: '8px',
            paddingLeft: '8px',
            paddingTop: '6px',
            paddingBottom: '6px',
        }}>
            <form
                onSubmit={onSubmitHandler}
            >
                <input
                    placeholder='Search Anime...'
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                    value={search_}
                    style={{
                        width: '250px',
                        height: '30px'
                    }}
                />
                <button style={{
                    height: '30px'
                }}
                    type='submit'
                >
                    Search
                </button>
            </form>
        </Box>
    )
}

export default Searchbar