/*
    Este componente es responsable de renderizar el menú de navegación de la aplicación.
    Solo es visible en dispositivos de pantalla pequeña.
    Cada elemento del menú es un enlace a una ruta de la aplicación.
    Permitiendo la navegación para dispositivos con pantallas pequeñas.
    En las que la barra lateral no es visible.
    Utiliza el vector de rutas de la aplicación para generar los elementos del menú.
    Se renderiza por medio de un elemento Drawer de Material UI.
*/

import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Drawer,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuList,
    MenuItem
} from '@mui/material';
import {
    Menu as MenuIcon,
} from '@mui/icons-material';

import appRoutes from '../routes/appRoutes'

const NavigationMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(true);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('profile');
        window.location.reload();
    }

    return (
        <Fragment>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
            >
                <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={menuOpen} onClose={handleMenuClose}>
                <MenuList>
                    {appRoutes.map((item, index) => {
                        return (
                            <Link style={{textDecoration: 'none', color: 'inherit'}} to={item.path} key={index}>
                                <MenuItem  onClick={handleMenuClose}>
                                    <ListItemIcon>
                                        {item.sidebarProps?.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.sidebarProps?.displayText} />
                                </MenuItem>
                            </Link>
                        )
                    })
                    }
                    <MenuItem sx={{ marginTop: 'auto' }} onClick={handleLogout}>Log out</MenuItem>
                </MenuList>
            </Drawer>
        </Fragment>
    );
};

export default NavigationMenu;