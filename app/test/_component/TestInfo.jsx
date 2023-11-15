import React from 'react'

import { Typography } from '@mui/material'
const TestInfo = ({questionNumber, timeTaken}) => {
  return (
    <div className='p-2 pl-0 pointer-events-none cursor-not-allowed'>
        <Typography color="primary">
            Q.No: {questionNumber}
            <span className='pl-2'> Time: {timeTaken}</span>
        </Typography>
    </div>
  )
}

export default TestInfo