import React from 'react'

import { Typography } from '@mui/material'
const TestInfo = () => {
  return (
    <div className='p-2 pl-0 pointer-events-none cursor-not-allowed'>
        <Typography color="primary">
            Q.No: 1
            <span className='pl-2'> Time: 00</span>
        </Typography>
    </div>
  )
}

export default TestInfo