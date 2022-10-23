import React from 'react'
import { Box } from '@mui/material'

import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import AnimeLogo from '../components/APLogo'

const Header = ({ isHome, isGenre }) => {
    return (
        <Box sx={{
            marginBottom: '10px',
            backgroundColor: '#c78c53',
            paddingLeft: { xs: '0px', sm: '5px', md: '10px', lg: '15px' },
            paddingRight: { xs: '0px', sm: '5px', md: '10px', lg: '15px' },
            borderBottom: '1.5px solid black'
        }}>
            <AnimeLogo />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
                <Navbar isHome={isHome} isGenre={isGenre} />
                <Searchbar />
            </Box>
        </Box>
    )
}

export default Header