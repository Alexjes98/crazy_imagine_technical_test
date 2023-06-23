import { useEffect, useState } from "react"
import { AppBar, Avatar, Box, Container, IconButton, Toolbar, Tooltip, Typography } from "@mui/material"

import Link from '@mui/material/Link';

import appRoutes from '../../routes/appRoutes'

import sizeConfigs from "../../configs/sizeConfigs"
import colorConfigs from "../../configs/colorConfigs"

const Topbar = (props) => {
    const [userName, setUserName] = useState()
    const [userAvatar, setUserAvatar] = useState()

    useEffect(() => {
        const storedProfile = localStorage.getItem('profile');
        if (storedProfile) {
            const profileData = JSON.parse(storedProfile);
            setUserName(profileData[0].name);
            setUserAvatar(profileData[0].image_url);
        }
    }, [])

    return (
        <AppBar
            position="fixed"
            sx={{
                width: props.screenSize,
                ml: sizeConfigs.sidebar.width,
                boxShadow: "unset",
                backgroundColor: colorConfigs.topbar.background,
                color: colorConfigs.topbar.color,
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            color: colorConfigs.topbar.color,
                            textDecoration: 'none',
                            fontFamily: 'monospace',
                            mr: 2,
                        }}>
                        Bienvenido {userName}
                    </Typography>
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={() => { }} sx={{ p: 0 }}>
                                <Avatar alt="A" src={userAvatar??''} />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Topbar