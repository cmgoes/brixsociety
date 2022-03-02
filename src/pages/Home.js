import React from 'react';
import { makeStyles } from '@mui/styles';
import {
    Box,
    Container,
    Typography,
    Button,
    IconButton,
    Link
} from '@mui/material';
import BackgroundImage from '../assets/images/background.png';
import GooglePlusIcon from '../assets/images/Google+.svg';
import FacebookIcon from '../assets/images/Facebook.svg';
import InstagramIcon from '../assets/images/Instagram.svg';
import TwitterIcon from '../assets/images/Twitter.svg';

const useStyles = makeStyles(theme => ({
    actionButton: {
        color: '#fff!important',
        textTransform: 'capitalize!important',
        padding: '10px 18px!important',
        borderRadius: '28px!important'
    },
    socialButtton: {
        backgroundColor: '#c54523!important',
        width: '48px!important',
        height: '48px!important',
        marginRight: '15px!important',
        "&:hover": {
            backgroundColor: '#c54523!important',
        }
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <Box sx={{
            background: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            pt: { xs: '84px', sm: '108px' }
        }}>
            <Box
                component={Container}
                sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: '1',
                py: '20px'
            }}>
                <Box>
                    <Typography
                        variant='h1'
                        textAlign="center"
                        sx={{
                            fontSize: { xs: 40, md: 50, lg: 60, xl: 70 },
                            fontFamily: 'Oswald-Bold',
                            maxWidth: { xs: 600, lg: 800, xl: 870 },
                            mb: '27px',
                            mx: 'auto',
                            color: '#fff'
                        }}
                    >
                        BrixSociety<br/>Who we are:
                    </Typography>
                    <Typography
                        variant='h4'
                        textAlign="center"
                        sx={{
                            fontSize: { xs: 16, sm: 20 },
                            fontWeight: 400,
                            maxWidth: 675,
                            color: '#fff',
                            mx: 'auto',
                            mb: '57px'
                        }}
                    >
                        Community based on the wax chain of 10k MiniBrix NFTs currently developing a staking platform, built in store, 
                        and multiple arcade style games coming 2022
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: '76px'
                    }}>
                        <Button
                            variant="text"
                            className={classes.actionButton}
                            sx={{
                                fontSize: {xs: 16, md: 20}
                            }}
                        >
                            Explorer More
                        </Button>
                        <Button
                            variant="outlined"
                            className={classes.actionButton}
                            sx={{
                                fontSize: {xs: 16, md: 20},
                                border: '1px solid #c54523',
                                ml: '30px',
                                "&:hover": {
                                    border: '1px solid #c54523',
                                }
                            }}
                        >
                            Create account
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <IconButton
                            component={Link}
                            href="https://google.com/"
                            target="_blank"
                            className={classes.socialButtton}
                        >
                            <img src={GooglePlusIcon} alt="" />
                        </IconButton>
                        <IconButton
                            component={Link}
                            href="/"
                            target="_blank"
                            className={classes.socialButtton}
                        >
                            <img src={FacebookIcon} alt="" />
                        </IconButton>
                        <IconButton
                            component={Link}
                            href="/"
                            target="_blank"
                            className={classes.socialButtton}
                        >
                            <img src={TwitterIcon} alt="" />
                        </IconButton>
                        <IconButton
                            component={Link}
                            href="/"
                            target="_blank"
                            className={classes.socialButtton}
                        >
                            <img src={InstagramIcon} alt="" />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Home;