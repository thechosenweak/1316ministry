import * as React from 'react';
import "./styles.scss";
import { NavLink } from 'react-router-dom';
import { Drawer, Box, ListItemButton, List } from "@mui/material";
import { menuData } from './menuData';
import Footer from './../Footer';

const Sidebar = ({children}) => {
  
  const drawerWidth = 240;
  const [openDrawer, setOpenDrawer] = React.useState(true);
  
  const onDrawerClose = () => {

  }

  return (
    <Box>
      <Box className='container-sidebar'>
        <Drawer
            className='drawer'
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                paddingTop: 3,
              },
            }}
            BackdropProps={{ invisible: true }}
            anchor={"left"}
            open={openDrawer}
            onClose={onDrawerClose}
            variant="permanent"
          > 
            {/* <img className="logo" src={logo} /> */}

            <List
              sx={{
                marginTop: 2,
                width: '100%',
              }}
            >
              {
                menuData.map((data, index) => {
                  return (
                    <NavLink to={data.route} key={index} className={({ isActive }) => isActive ? "active": 'navLink'}>
                      <ListItemButton
                        sx={{paddingLeft: 3}}
                        key={index}
                      >
                        {data.icon}
                        <div className='menuName'>{data.name}</div>
                      </ListItemButton>
                    </NavLink>
                  )
                })
              }
            </List>
            
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Sidebar;