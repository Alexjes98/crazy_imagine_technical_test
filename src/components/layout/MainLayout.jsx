/*
    Este componente representa el diseño principal de la interfaz de la aplicación.
    contiene la barra superior, la barra lateral y el contenido principal.
    El contenido principal es un componente de enrutamiento 
    que se renderiza en función de la ruta actual.
    el contenido principal se renderiza en un componente <Outlet> de react-router-dom.
    la interfaz usa una variable llamada isSmallScreen para determinar si el dispositivo es de pantalla pequeña.
    la variable isSmallScreen se usa para determinar si se debe mostrar la barra lateral.
    de este tamaño de pantalla se calcula el ancho de la barra lateral y cuanto de debe 
    desplazar el contenido principal.
*/
import { Outlet } from 'react-router-dom'
import {
    Box,
    Toolbar,
    useMediaQuery,
    useTheme
} from '@mui/material'

import Sidebar from '../common/Sidebar'
import Topbar from '../common/Topbar'

import sizeConfigs from '../../configs/sizeConfigs';
import colorConfigs from '../../configs/colorConfigs';

const MainLayout = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const screenSize = isSmallScreen ? `calc(100%)` : `calc(100% - ${sizeConfigs.sidebar.width})`

    return (
        <Box
            sx={{ display: "flex" }}>
            <Topbar screenSize={screenSize} />
            {!isSmallScreen && <Box
                component="nav"
                sx={{
                    width: sizeConfigs.sidebar.width,
                    flexShrink: 0,
                }}
            >
                <Sidebar />
            </Box>
            }
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: screenSize,
                    minHeight: "100vh",
                    backgroundColor: colorConfigs.background.main,
                }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    )
}

export default MainLayout