"use client"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Checkbox, IconButton, ListItemIcon, Typography } from '@mui/material';

import CommentIcon from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function ListTest({tests,loading}:{tests:any,loading:boolean}) {
  return (
    <List className='w-full ' >
        {
          tests?.map((test:any, i:number)=><TestListItem test={test} key={i} />)
        }
    </List>
  );
}

const TestListItem = ({test}:{test:any})=>{
  // console.log(test)
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments">
          <MoreVertIcon />
        </IconButton>
      }
      disablePadding
      divider
    >
      <ListItemButton role={undefined} onClick={()=>{}}>
        <ListItemIcon
            hidden={true}
        
        >
          <Checkbox
            edge="start"
            checked={true}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': "test" }}
          />
        </ListItemIcon>
        <ListItemText >
          <div className='flex justify-between line-clamp-1'>
            {test.name} 
            <span style={{color:"rgb(148 163 184)",display:"flex", fontSize:"0.8rem"}}>
               {test.createdAt.substr(0,10)}
            </span>
          </div>
          <div className='flex  gap-2' style={{color:"rgb(148 163 184)",display:"flex", fontSize:"0.8rem"}}>
            <span style={{width:"10em"}}>Questions <span>{test.correct_answers}/{test.total_questions}</span></span>
            
          </div>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  )
}