"use client"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Checkbox, IconButton, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArticleIcon from '@mui/icons-material/Article';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ListTest({tests,loading}:{tests:any,loading:boolean}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [currentMenuItem, setCurrentMenuItem] = React.useState<String>("hii");
  const [selectTestInfo, setSelectTestInfo] = React.useState<{active:Boolean, selected:String[]}>({ active:false, selected:[]});
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, itemId:String) => {
    setCurrentMenuItem(itemId)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuTestSelect = () => {
    handleClose();
    setSelectTestInfo({...selectTestInfo, active:true,selected:[currentMenuItem] });
  };
  const handleOnSelected = (id:string) => {
    if(selectTestInfo?.selected.includes(id)){
      const newSelectedItemArray = selectTestInfo?.selected.filter((item)=>item!=id);
      if(newSelectedItemArray.length){
        setSelectTestInfo({...selectTestInfo, selected:newSelectedItemArray  });
      }else{
        setSelectTestInfo({...selectTestInfo, active:false, selected:[] });
      }
    }else{
      const newSelectedItemArray = [ ...selectTestInfo?.selected, id ]
      setSelectTestInfo({...selectTestInfo, selected:newSelectedItemArray  });
    }
    
  };
  
  return (
    <>
      <List className='w-full ' >
        {
          tests?.map((test:any, i:number)=><TestListItem test={test} key={i} handleClick={handleClick} selectTestInfo={selectTestInfo} onSelected={handleOnSelected}/>)
        }
      </List>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        
      >
        <MenuItem onClick={handleClose} dense>
          <ListItemIcon >
              <ArticleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>View</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose} dense>
          <ListItemIcon >
              <NoteAltIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuTestSelect} dense>
          <ListItemIcon  >
              <LibraryAddCheckIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Select</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose} dense>
          <ListItemIcon >
              <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </>
    
    
  );
}

const TestListItem = ({test, handleClick, selectTestInfo, onSelected}:{test:any, handleClick:Function, selectTestInfo:any, onSelected:Function})=>{
  // console.log(test)
  return (
    <ListItem
      secondaryAction={
        <IconButton disabled={selectTestInfo?.active} edge="end" aria-label="comments" onClick={(event)=>{handleClick(event,test.id)}}>
          <MoreVertIcon />
        </IconButton>
      }
      disablePadding
      divider
    >
      <ListItemButton role={undefined} onClick={()=>{onSelected(test.id)}}>
        {
          selectTestInfo?.active && (
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={selectTestInfo?.selected.includes(test.id)}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': "test" }}
              />
            </ListItemIcon>
          )
        }
        
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