'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../ThemeRegistry/theme';

interface AppDrawerProps {
    state: boolean
    setState: (b: boolean) => void
  }

export default function AppDrawer({state, setState}:AppDrawerProps): React.JSX.Element {

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  
  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState( open );
    };

  const list = (anchor= "left") => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer( false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}

      <Divider/>

        <ListItem  disablePadding>
          <ListItemButton onClick={()=>{
            console.log("toggle color mode")
            colorMode.toggleColorMode()
          }}>
            <ListItemIcon>
              {0 % 2 === 0 ? <LightModeIcon /> : <DarkModeIcon />}
            </ListItemIcon>
            <ListItemText primary={`${theme.palette.mode==="dark"?"Light":"Dark"} Theme`} />
          </ListItemButton>
        </ListItem>
        
      </List>
     </Box>
  );

  return (
    <Drawer
        anchor='left'
        open={state}
        onClose={toggleDrawer(false)}
        >
        {list('left')}
    </Drawer>
  );
}