import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card
} from '@mui/material';
import BackgroundImage from '../assets/images/gameStatusBg.png';
import ChartImage from '../assets/images/chart.png';
import ScifiImage from '../assets/images/scifi.png';
import UserImage from '../assets/images/user.png';

const lists = ['Blue Color', 'Cold', 'Crypto Art', 'Blue Filter', 'Defragmentation', 'Hexagon', 'Light', 'Motion', 'Sparks', 'Edition 1 of 1']

const StatusCard = ({title, subtitle, chart}) => {
    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000',
            maxWidth: 255,
            minHeight: 165,
            p: '10px',
            mx: 'auto',
            boxShadow: '3px 9px 5px rgba(197,69,35,0.0784313725490196)'
        }}>
            <Typography sx={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 21,
                fontWeight: '700',
                mb: '21px',
            }}>
                {title}
            </Typography>
            {subtitle && <Typography sx={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 22,
                fontWeight: '700',
            }}>
                {subtitle}
            </Typography>}
            <Box sx={{
                maxWidth: 195
            }}>
                {chart}
            </Box>
        </Card>
    )
}

const GameStatus = () => {
    return (
        <Box sx={{
            background: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
        }}>
            <Box
                component={Container}
                sx={{ py: '20px' }}
            >
                <Box sx={{
                    p: '120px 0 110px'
                }}>
                    <Grid container sx={{ mb: '80px' }}>
                        <Grid item xs={12} sm={6} md={3} sx={{px: '12px', mb: '20px'}}>
                            <StatusCard title="NFT/Collection Count" subtitle="50.89" chart={null} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} sx={{px: '12px', mb: '20px'}}>
                            <StatusCard title={<>Build(Mine) rate{<br />}Per Hour</>} subtitle="50.89" chart={null} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} sx={{px: '12px', mb: '20px'}}>
                            <StatusCard title="Game Status" subtitle={null} chart={<img src={ChartImage} width="100%" alt="" />} />
                        </Grid> 
                        <Grid item xs={12} sm={6} md={3} sx={{px: '12px', mb: '20px'}}>
                            <StatusCard title="Balance" subtitle="50.89" chart={null} />
                        </Grid>
                    </Grid>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Button 
                            variant='contained'
                            sx={{
                                color: '#fff',
                                fontSize: 20,
                                backgroundColor: '#ded53b',
                                p: '16px 64px',
                                borderRadius: '28px',
                                mr: '12px',
                                textTransform: 'capitalize',
                                "&:hover": {
                                    backgroundColor: '#ded53b'
                                }
                            }}
                        >
                            Claim
                        </Button>
                        <Button
                            variant='outlined'
                            sx={{
                                color: '#c54523',
                                fontSize: 20,
                                borderColor: '#c54523',
                                p: '16px 28px',
                                borderRadius: '28px',
                                textTransform: 'capitalize',
                                "&:hover": {
                                    borderColor: '#c54523'
                                }
                            }}
                        >
                            Wallet Address
                        </Button>
                    </Box>
                </Box>

                <Grid container sx={{ pb: '130px' }} alignItems="center">
                    <Grid item xs={9} sm={6} md={4} lg={4} sx={{ mx: 'auto', mb: { xs: '20px', md: 0 } }}>
                        <img src={ScifiImage} alt="" width='100%' />
                    </Grid>
                    <Grid 
                        item 
                        xs={12} sm={12} md={8} lg={8}
                        sx={{ pl: {xs: 0, md: '60px'} }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Oswald-Bold',
                                fontSize: { xs: 30, sm: 50 },
                                lineHeight: '60px',
                                color: '#fff',
                                mb: '32px'
                            }}
                        >
                            Geometrical heart-fire dispersion
                        </Typography>
                        <Typography sx={{
                            color: '#fff',
                            opacity: '0.8500000238418579',
                            fontSize: 19,
                            mb: '48px'
                        }}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't
                            look even slightly believable.
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            width: { xs: '100%', lg: '60%' }
                        }}>
                            {lists.map((item, index) => (
                                <Box key={index} sx={{
                                    background: '#0e1e45',
                                    p: '15px 14px',
                                    borderRadius: '8px',
                                    color: '#ebf3ff',
                                    fontSize: 9,
                                    mr: '16px',
                                    mb: '16px'
                                }}>
                                    {item}
                                </Box>
                            ))}
                        </Box>
                        <Box sx={{ 
                            display: 'flex',
                            mb: '46px'
                        }}>
                            <Box sx={{ mr: '40px' }}>
                                <Typography sx={{
                                    fontSize: 16,
                                    color: '#fff',
                                    opacity: '0.8500000238418579',
                                    mb: '25px'
                                }}>
                                    Artist
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <img src={UserImage} alt="" width={31} height={31} />
                                    <Typography sx={{
                                        color: '#fff',
                                        fontSize: 10,
                                        ml: '8px'
                                    }}>
                                        CameronWill
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography sx={{
                                    fontSize: 16,
                                    color: '#fff',
                                    opacity: '0.8500000238418579',
                                    mb: '25px'
                                }}>
                                    Owner
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <img src={UserImage} alt="" width={31} height={31} />
                                    <Typography sx={{
                                        color: '#fff',
                                        fontSize: 10,
                                        ml: '8px'
                                    }}>
                                        WilliamSon
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Typography sx={{
                            fontSize: 18,
                            color: '#fff',
                            opacity: '0.8500000238418579',
                            mb: '18px'
                        }}>
                            List Price:
                        </Typography>
                        <Typography sx={{
                            fontSize: 32,
                            color: '#fff'
                        }}>
                            10.433 WAX
                            <Typography
                                component="span"
                                sx={{
                                    ml: '15px',
                                    fontSize: 14
                                }}
                            >
                                $43.33
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default GameStatus;