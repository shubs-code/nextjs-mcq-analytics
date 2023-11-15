import React from 'react'

import Paper from '@mui/material/Paper';
import TestMenu from '../_component/TestMenu';
import QuestionControl from '../_component/QuestionControl';


import { Button } from '@mui/material';



const Test = () => {
  return (
  <div className='fixed bottom-4 right-4 w-64 '>
    <Paper elevation={4} className='h-full p-4 pt-2 rounded-lg '>
      <TestMenu/>
        <div className=''>
          <div className='grid grid-cols-2 gap-2 '>
            <Button variant='outlined' size='small' >
              A
            </Button>
            <Button variant='outlined' size='small' >
              B
            </Button>
            <Button variant='outlined' size='small' >
              C
            </Button>
            <Button variant='outlined' size='small' >
              D
            </Button>
          </div>
          <QuestionControl/>
        </div>
      </Paper>
  </div>
  )
}

export default Test