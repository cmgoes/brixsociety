import React from 'react';
import { Box } from '@mui/material';
import GameStatus from '../components/GameStatus';
import FeaturedAssets from '../components/FeaturedAssets';

const Store = () => {
    return (
        <Box sx={{
            minHeight: '100vh',
            pt: { xs: '84px', sm: '108px' }
        }}>
            <GameStatus />
            <FeaturedAssets />
        </Box>
    )
}

export default Store;