"use client"
import React, {useState} from 'react'

import Typography from '@mui/material/Typography';

import Fab from '@mui/material/Fab';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';

const FAB_ACTIONS = ["Take test", "Refresh", "Open Pdf", "Dashboard"];

const FAB = ({state, setState}) => {
    const router = useRouter()
    const [anchorElActions, setAnchorElActions] = useState(null);
    const handleOpenFAB = (event) => {
        setAnchorElActions(event.target);
    };

    const handleCloseFAB = () => {
        setAnchorElActions(null);
    };

    const handleMenuItemSelected = (itemName) => {
        handleCloseFAB();
        switch(itemName){
            case FAB_ACTIONS[0]:{
                setState({...state, takeTest:true})
                break;
            }
            case FAB_ACTIONS[1]:{
                break;
            }
            case FAB_ACTIONS[2]:{
                break;
            }
            case FAB_ACTIONS[3]:{
              router.push("dashboard")
              break;
            }
            default:{
                console.log(itemName)
            }
        }
    };

  return (
    <div className="fixed bottom-6 right-6">
        <Fab color="secondry" aria-label="edit"
          onClick={handleOpenFAB}
        >
          <MenuIcon />
        </Fab>
        <Menu
          sx={{ mr: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElActions}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={Boolean(anchorElActions)}
          onClose={handleCloseFAB}
        >
          {FAB_ACTIONS.map((itemName) => (
            <MenuItem key={itemName} onClick={()=>{handleMenuItemSelected(itemName)}} >
              <Typography textAlign="center">{itemName}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </div>
  )
}

export default FAB