import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
    AppBar,
    Box,
    Toolbar,
    Button,
    Typography,
    IconButton,
    Menu,
    Container,
    Tooltip,
    MenuItem,
    List,
    ListItem
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Web3 from 'web3';
import LogoImage from '../assets/images/logo.png';

const useStyles = makeStyles(theme => ({
    appBar: {
        padding: '14px 0',
        backgroundColor: 'transparent!important',
        boxShadow: 'none!important'
    },
    menuButton: {
        display: 'block!important',
        color: '#fff!important',
        fontSize: '20px!important',
        fontWeight: '400!important',
        textTransform: 'capitalize!important',
    },
    mobileListItem: {
        fontSize: '20px!important',
        color: '#000000cc!important',
        textTransform: 'capitalize!important',
        marginBottom: '8px!important'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const history = useHistory();
    const [account, setAccount] = useState(null);
    const [mobileDrawer, setMobileDrawer] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const ethEnabled = async () => {
		if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            window.web3 = new Web3(window.ethereum);
            return true;
		}
		return false;
    }
    const clickConnectWallet = async () => {
		if (typeof window.web3 === 'undefined') {
		    return;
		}
        await ethEnabled()
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setAccount(accounts[0]);
    }

    useEffect( async () => {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setAccount(accounts[0]);
    }, [])
    return (
        <Fragment>
            <AppBar position="static" className={classes.appBar}>
                <Container>
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        <Box
                            component="img"
                            src={LogoImage}
                            alt=""
                            sx={{ width: { xs: 160, sm: 238 } }}
                        />
                        <Box
                            sx={{
                                flexGrow: 1, 
                                display: 'none',
                                justifyContent: 'center',
                                "@media (min-width: 1024px)": {
                                    display: 'flex'
                                }
                            }}
                        >
                            <Button 
                                className={classes.menuButton}
                                sx={{ mr: {md: '20px', lg: '44px'} }}
                                onClick={() => history.push('/home')}
                            >
                                Home
                            </Button>
                            <Button 
                                className={classes.menuButton}
                                sx={{ mr: {md: '20px', lg: '44px'} }}
                                onClick={() => history.push('/activity')}
                            >
                                Activity
                            </Button>
                            <Button 
                                className={classes.menuButton}
                                sx={{ mr: {md: '20px', lg: '44px'} }}
                                onClick={() => history.push('/shop')}
                            >
                                Shop
                            </Button>
                            <Button 
                                className={classes.menuButton}
                                sx={{ mr: {md: '20px', lg: '44px'} }}
                                onClick={() => history.push('/page')}
                            >
                                Page
                            </Button>
                        </Box>
                        <Button
                            variant="outlined"
                            sx={{
                                display: 'none',
                                justifyContent: 'center',
                                color: '#fff',
                                border: '1px solid #ded53b',
                                borderRadius: '26px',
                                fontSize: '20px',
                                p: '10px 18px',
                                textTransform: 'capitalize',
                                mr: '28px',
                                "&:hover": {
                                    border: '1px solid #ded53b',
                                },
                                "@media (min-width: 1024px)": {
                                    display: 'block'
                                }
                            }}
                            onClick={clickConnectWallet}
                        >
                            Connect Wallet
                        </Button>
                        <Box sx={{ flexGrow: 0 }}>
                            
                            <IconButton sx={{ 
                                mr: { xs: '8px', sm: '20px' },
                                color: '#fff'
                            }}>
                                <ShoppingBagIcon />
                            </IconButton>
                            <Tooltip title="Open settings">
                                <IconButton 
                                    onClick={handleOpenUserMenu} 
                                    sx={{ 
                                        color: '#fff',
                                        mr: {xs: '8px', sm: '20px', lg: '0'},
                                    }}
                                >
                                    <PersonIcon />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">Profile</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">Log out</Typography>
                                </MenuItem>
                            </Menu>
                            <IconButton
                                onClick={() => setMobileDrawer(true)}
                                sx={{
                                    display: 'inline-flex',
                                    color: '#fff',
                                    "@media (min-width: 1024px)": {
                                        display: 'none'
                                    }
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    overflow: 'auto',
                    backgroundColor: '#fff',
                    minWidth: 280,
                    padding: { xs: '24px 16px', sm: '24px' },
                    zIndex: 2000,
                    transition: 'transform 0.3s',
                    transform: mobileDrawer ? 'translateX(0)' : 'translateX(100%)'
                }}
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    py: { xs: '2px', sm: '10px' }
                }}>
                    <IconButton onClick={() => setMobileDrawer(false)}>
                        <CloseOutlinedIcon />
                    </IconButton>
                </Box>
                <List sx={{
                    mb: '20px'
                }}>
                    <ListItem
                        component={Button}
                        className={classes.mobileListItem}
                        onClick={() => history.push('/home')}
                    >
                        Home
                    </ListItem>
                    <ListItem
                        component={Button}
                        className={classes.mobileListItem}
                        onClick={() => history.push('/activity')}
                    >
                        Activity
                    </ListItem>
                    <ListItem
                        component={Button}
                        className={classes.mobileListItem}
                        onClick={() => history.push('/shop')}
                    >
                        Shop
                    </ListItem>
                    <ListItem
                        component={Button}
                        className={classes.mobileListItem}
                        onClick={() => history.push('/page')}
                    >
                        Page
                    </ListItem>
                </List>
                <Button
                    variant='outlined'
                    fullWidth
                    sx={{
                        color: '#000000cc',
                        border: '1px solid #ded53b',
                        borderRadius: '26px',
                        fontSize: '20px',
                        p: '10px 18px',
                        textTransform: 'capitalize',
                        mr: '28px',
                        "&:hover": {
                            border: '1px solid #ded53b',
                        }
                    }}
                    onClick={clickConnectWallet}
                >
                    Connect Wallet
                </Button>
            </Box>
        </Fragment>
    );
}