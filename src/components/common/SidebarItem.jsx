import { ListItemButton, ListItemIcon } from '@mui/material'
import { Link } from 'react-router-dom'

import colorConfigs from '../../configs/colorConfigs'
import { Typography } from '@mui/material'

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