"use client"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';

export default function ListTest({tests}:{tests:any}) {
  return (
    <List className='w-full ' >
        {
          tests?.map((item:any, i:number)=><TestListItem key={i} />)
        }
    </List>
  );
}

const TestListItem = ()=>{

  return (
        <ListItemButton divider>
            <ListItemText primary="Drafts" />
        </ListItemButton>
    )
}