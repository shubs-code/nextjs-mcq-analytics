"use client"
import React from 'react'
import { Modal, Button, Box, Typography, TextField } from "@mui/material";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TestNameInput = ({open, onInterrupt}:{open:boolean, onInterrupt:Function}) => {

  const [inputText, setInputText] = React.useState("")

  const handleClose = () => {onInterrupt({input:"",hasInput:false})};
  const handleModalCanccel = () => {onInterrupt({input:"",hasInput:false})};
  const handleModalContinue = () => {onInterrupt({input:inputText,hasInput:true})};
  
    return (
      <Modal
        open={open}
        onClose={handleClose}
        keepMounted={false}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Enter the name for Test
          </Typography>
          <TextField sx={{mt:"0.5rem"}} value={inputText} onChange={event=>setInputText(event.target.value)} id="standard-basic" label="Name" variant="standard" />
          <Box sx={{mt:"2rem", display:"flex", justifyContent:"space-between"}}>
            <Button variant='outlined' sx={{color:'GrayText',backgroundColor:"GrayText",borderColor:"GrayText"}} onClick={handleModalCanccel}>
              <Typography sx={{fontSize:'0.8rem'}}>
                cancel
              </Typography>
            </Button>
            <Button disabled={!inputText.length} variant='outlined' sx={{}} onClick={handleModalContinue}>
              <Typography sx={{fontSize:'0.8rem'}}>
                Continue
              </Typography>
            </Button>
          </Box>
        </Box>
      </Modal>
  )
}

export default TestNameInput