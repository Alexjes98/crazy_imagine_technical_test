import { List, Drawer} from '@mui/material'
import { ListItemButton} from '@mui/material'

import sizeConfigs from '../../configs/sizeConfigs'
import colorConfigs from '../../configs/colorConfigs'
import appRoutes from '../../routes/appRoutes'
import SidebarItem from './SidebarItem'

const Sidebar = () => {

  const handleLogout = () => {
    localStorage.removeItem('profile');
    window.location.reload();
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.background,
          color: colorConfigs.sidebar.color,
        }
      }}
    >
      <List disablePadding sx={{ height: '100%' }}>
        {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            <SidebarItem item={route} key={index} />
          ) : null
        )
        )
        }
      </List>
      <ListItemButton sx={{ marginTop: 'auto' }} onClick={handleLogout}>Log out</ListItemButton>

    </Drawer>
  )
}

export default Sidebar