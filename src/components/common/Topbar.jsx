import { useEffect, useState } from "react"
import { AppBar, Avatar, Box, Container, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material"

import Link from '@mui/material/Link';
import NavigationMenu from "../NavMenu"

import appRoutes from '../../routes/appRoutes'

import sizeConfigs from "../../configs/sizeConfigs"
import colorConfigs from "../../configs/colorConfigs"

const Topbar = (props) => {
    const theme = useTheme();

    const [userName, setUserName] = useState()
    const [userAvatar, setUserAvatar] = useState()

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

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
                    {isSmallScreen && <Box sx={{ flexGrow: 1 }}>
                        <NavigationMenu></NavigationMenu>
                    </Box>}
                    <Box sx={{ flexGrow: 1 }}>
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

                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Avatar alt="A" src={userAvatar ?? ''} />
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Topbar