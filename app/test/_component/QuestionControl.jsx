import React from 'react'
import { Button } from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const QuestionControl = () => {
  return (
    <div className='pt-4 pr-1 flex justify-between'>
        <Button variant="text" size='small' startIcon={<ArrowBackIcon />}>
            <span className='text-sm'>prev</span>
        </Button>
        <Button variant="text" size='small' endIcon={<ArrowForwardIcon />}>
            <span className='text-sm'>next</span>
        </Button>
    </div>
  )
}

export default QuestionControl