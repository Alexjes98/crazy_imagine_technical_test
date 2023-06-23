import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Drawer,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuList,
    MenuItem,
    Typography
} from '@mui/material';
import {
    Menu as MenuIcon,
    Calculate as CalculateIcon,
    AccountCircle as AccountCircleIcon,
    LibraryBooks as LibraryBooksIcon,
    PhotoLibrary as PhotoLibraryIcon,
    Home as HomeIcon,
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

    return (
        <div>
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
                </MenuList>
            </Drawer>
        </div>
    );
};

export default NavigationMenu;