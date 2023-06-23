/*
    Este componente es el encargado de mostrar la barra superior de la aplicación.
    esta conformado por un AppBar de Material UI en el que se renderiza el nombre del usuario y su avatar.
    El nombre y el avatar se obtienen del perfil almacenado en el local storage.
    este tiene un elemento <NavigationMenu> que se encarga de mostrar el menú de navegación.
    el componente <NavigationMenu> solo se muestra en dispositivos de pantalla pequeña.
    utiliza la función useMediaQuery de Material UI para determinar si el dispositivo es de pantalla pequeña.
*/
import { useEffect, useState } from "react"
import {
    AppBar,
    Avatar,
    Box,
    Container,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material"

import NavigationMenu from "../NavMenu"

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