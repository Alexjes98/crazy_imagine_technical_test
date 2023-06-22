import { ListItemButton, ListItemIcon } from '@mui/material'
import { Link } from 'react-router-dom'

import colorConfigs from '../../configs/colorConfigs'
import { Typography } from '@mui/material'
// import { useSelector } from 'react-redux'
// import { RootState } from '../../redux/store'

const SidebarItem = ({ item }) => {

  //   const { appState } = useSelector((state) => state.appState)

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
          //backgroundColor: appState === props.state ? colorConfigs.sidebar.activeBg : "unset",
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