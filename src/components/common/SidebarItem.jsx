/*
  Este componente es responsable de renderizar cada elemento del menú lateral.
  Cada elemento del menú es un enlace a una ruta de la aplicación.
  tiene aplicado un estilo personalizado para que se muestre de forma vertical
  y al desplace el cursor sobre el elemento se muestre un color de fondo diferente.
  uen sus propiedades recibe el objeto item que contiene la información de la ruta
  a la que enlaza y las propiedades del elemento del menú.
*/
import { ListItemButton, ListItemIcon, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import colorConfigs from '../../configs/colorConfigs'

const SidebarItem = ({ item }) => {
  return (
    item.sidebarProps && item.path ? (
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          "&: hover": {
            backgroundColor: colorConfigs.sidebar.hoverBg,
          },
          height: "64px",
          padding: "12px 24px",
        }}
      >
        <ListItemIcon sx={{ color: colorConfigs.sidebar.color }}>
          {item.sidebarProps?.icon}
        </ListItemIcon>
        <Typography>
          {item.sidebarProps?.displayText}
        </Typography>
      </ListItemButton>
    ) : null
  )
}

export default SidebarItem