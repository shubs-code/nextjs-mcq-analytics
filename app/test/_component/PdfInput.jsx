"use client"
import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  
const PdfInput = ({setFile}) => {

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  return (
    <Button component="label" variant="outlined" >
        Open File
        <VisuallyHiddenInput type="file" onChange={onFileChange} />
    </Button>
  )
}

export default PdfInput