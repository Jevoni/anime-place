import React from 'react'
import { Box, Typography } from '@mui/material'
import { AiFillLinkedin, AiFillGithub, } from 'react-icons/ai'

const Footer = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            padding: '15px',
            paddingBottom: '0px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#c78c53',
            borderTop: '2px solid black'
        }}>
            <Typography>
                Made by <a href='https://jalenj.com/' target='_blank' style={{ textShadow: '1.5px 1.5px black', color: '#F55887', fontWeight: 'bold', textDecoration: 'none' }}>Jalen Johnson</a> using <a href='https://reactjs.org/' target='_blank' style={{ textShadow: '1.5px 1.5px black', color: 'skyblue', fontWeight: 'bold', textDecoration: 'none' }}>React.js</a> and <a href='https://github.com/riimuru/gogoanime-api' target='_blank' style={{ textShadow: '1.5px 1.5px black', color: 'green', fontWeight: 'bold', textDecoration: 'none' }}>GoGo Anime API</a>
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                <a rel="noreferrer" style={{ textDecoration: 'none', color: 'black', padding: '7px' }} href='https://www.linkedin.com/in/jalenjohnson23/' target='_blank'>
                    <AiFillLinkedin size={25} />
                </a>
                <a rel="noreferrer" style={{ textDecoration: 'none', color: 'black', padding: '7px' }} href='https://github.com/Jevoni' target='_blank'>
                    <AiFillGithub size={25} />
                </a>
            </Box>
        </Box>
    )
}

export default Footer