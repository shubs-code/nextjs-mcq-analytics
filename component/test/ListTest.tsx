"use client"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function ListTest() {
  return (
    <List className='w-full ' >
        {
          [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4].map(()=><TestListItem/>)
        }
    </List>
  );
}

const TestListItem = ()=>{

    return (
        <ListItem button divider>
            <ListItemText primary="Drafts" />
        </ListItem>
    )
}