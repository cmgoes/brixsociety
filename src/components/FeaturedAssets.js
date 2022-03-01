import React from 'react';
import {
    Box,
    Container,
    Typography,
    Badge
} from '@mui/material';
import FeaturedBgImage from '../assets/images/FeaturedBg.png';
import FeaturedAsset1 from '../assets/images/featured-asset1.jpg';
import FeaturedAsset2 from '../assets/images/featured-asset2.jpg';
import FeaturedAsset3 from '../assets/images/featured-asset3.jpg';
import FeaturedAsset4 from '../assets/images/featured-asset4.jpg';
import FeaturedAsset5 from '../assets/images/featured-asset5.jpg';
import FeaturedAsset6 from '../assets/images/featured-asset6.jpg';
import FeaturedAsset7 from '../assets/images/featured-asset7.jpg';
import FeaturedAsset8 from '../assets/images/featured-asset8.jpg';
import FeaturedAsset9 from '../assets/images/featured-asset9.jpg';
import FeaturedAsset10 from '../assets/images/featured-asset10.jpg';

import AssetsUserImage1 from '../assets/images/assetsUser1.png';
import AssetsUserImage2 from '../assets/images/assetsUser2.png';
import HeartImage from '../assets/images/heart.png';

const assetsLists = [
    {
        image: FeaturedAsset1,        
        price: 235.22,
        likeNumber: 320
    },
    {
        image: FeaturedAsset2,        
        price: 235.22,
        likeNumber: 320
    },
    {
        image: FeaturedAsset3,        
        price: 235.22,
        likeNumber: 320
    },
    {
        image: FeaturedAsset4,        
        price: 235.22,
        likeNumber: 320
    },
    {
        image: FeaturedAsset5,        
        price: 235.22,
        likeNumber: 320
    },
    {
        image: FeaturedAsset6,        
        price: 235.22,
        likeNumber: 320
    },
    {
        image: FeaturedAsset7,        
        price: 235.22,
        likeNumber: 320
    },
    {
        image: FeaturedAsset8,        
        price: 235.22,
        likeNumber: 320
    },
    {
        image: FeaturedAsset9,        
        price: 235.22,
        likeNumber: 320
    },
    {
        image: FeaturedAsset10,        
        price: 235.22,
        likeNumber: 320
    }
]

const FeaturedAssets = () => {
    return (
        <Box sx={{
            background: `url(${FeaturedBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
        }}>
            <Box
                component={Container}
                sx={{ py: '120px' }}
            >
                <Typography sx={{
                    fontSize: { xs: 30, sm: 50 },
                    fontWeight: '700',
                    color: '#fff',
                    textAlign: 'center',
                    mb: '114px'
                }}>
                    Featured Assets
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: { xs: 'center', sm: 'space-between' }
                }}>
                    {assetsLists.map((list, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: { xs: '90%', sm: '47%', md: '23%', lg: '18%' },
                                mb: '60px'
                            }}
                        >
                            <Box
                                component="img"
                                src={list.image}
                                alt=""
                                width="100%"
                                sx={{ mb: '10px' }}
                            />
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                mb: '20px'
                            }}>
                                <Box sx={{ display: 'flex' }}>
                                    <img src={AssetsUserImage1} alt="" width={40} height={40} />
                                    <Badge
                                        badgeContent=" "
                                        color="primary"
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        sx={{
                                            ml: '10px',
                                            "& .MuiBadge-colorPrimary": {
                                                backgroundColor: 'yellow',
                                                minWidth: 10,
                                                maxWidth: 10,
                                                p: 0,
                                                height: 10
                                            }
                                        }}
                                    >
                                        <img src={AssetsUserImage2} alt="" width={40} height={40} />
                                    </Badge>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box sx={{
                                        backgroundColor: '#262525',
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        mr: '12px'
                                    }}>
                                        <img src={HeartImage} alt="" />
                                    </Box>
                                    <Typography sx={{
                                        color: '#9e9e9e',
                                        fontSize: 15
                                    }}>
                                        {list.likeNumber} Likes
                                    </Typography>
                                </Box>
                            </Box>
                            {/* <Typography sx={{
                                color: '#fff',
                                fontSize: '18px',
                                mb: '20px'
                            }}>
                                {list.text}
                            </Typography> */}
                            <Box sx={{
                                backgroundColor: '#1d1d1d',
                                p: '12px 10px',
                                borderRadius: '8px',
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <Typography sx={{
                                    color: '#c2c2c2',
                                    fontSize: 15
                                }}>
                                    Current Price
                                </Typography>
                                <Typography sx={{
                                    color: '#fff',
                                    fontSize: 16
                                }}>
                                    {list.price} WAX
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default FeaturedAssets;