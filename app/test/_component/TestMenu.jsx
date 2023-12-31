import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ListItemIcon } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import TimerOffIcon from '@mui/icons-material/TimerOff';
import TaskIcon from '@mui/icons-material/Task';
import CloseIcon from '@mui/icons-material/Close';

import TestInfo from '../_component/TestInfo';

import {AddTestData} from "@/lib/reactApi/test"


export default function TestMenu({testName, questionNumber, timeTaken, state, endTest, timerActive, setTimerActive}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleTestExit = ()=>{
    endTest()
  }
  const handleTimerStop = ()=>{
    setTimerActive(false)
    handleClose()
  }
  const handleTimerStart = ()=>{
    setTimerActive(true)
    handleClose()
  }
  const handleTestSubmit = async ()=>{
    handleClose()
    console.log(state.responseData)
    const response = await AddTestData(testName, state.responseData)
    console.log(response)
    if(response?.id){
      endTest();
    }
  }
  return (
    <div>
      <div className='flex justify-between items-center pb-2'>
        <TestInfo questionNumber={questionNumber} timeTaken={timeTaken} />
        <span className=''>
            <MenuIcon color='primary' onClick={handleClick} />
        </span>
      </div>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleTestSubmit}>
            <ListItemIcon>
                <TaskIcon fontSize="small" />
            </ListItemIcon>
            Complete Test
        </MenuItem>
        {
          timerActive?<MenuItem onClick={handleTimerStop}>
            <ListItemIcon>
                <TimerOffIcon fontSize="small" />
            </ListItemIcon>
            Stop Timer
        </MenuItem>:
        <MenuItem onClick={handleTimerStart}>
            <ListItemIcon>
                <TimerOffIcon fontSize="small" />
            </ListItemIcon>
            Start Timer
        </MenuItem>

        }
        
        <MenuItem onClick={handleTestExit}>
            <ListItemIcon>
                <CloseIcon fontSize="small" />
            </ListItemIcon>
            Exit Test
        </MenuItem>
      </Menu>
    </div>
  );
}