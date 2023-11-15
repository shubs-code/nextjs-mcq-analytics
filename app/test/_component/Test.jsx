"use client"
import React, {useEffect, useMemo, useState} from 'react'

import Paper from '@mui/material/Paper';
import TestMenu from '../_component/TestMenu';
import QuestionControl from '../_component/QuestionControl';

import { Button } from '@mui/material';

const initialResponseData = {
  selectedOption:"",
  timeTaken:0,
}

const initialTestState = {
  responseData:[{...initialResponseData}],
  currentQuestionIndex:0,
  time:0,
}

const timer = (state, setState)=>{
  const newResponseData  = [ ...state.responseData ];
  newResponseData[state.currentQuestionIndex].timeTaken +=1;
  setState({...state, responseData: newResponseData})  
}
const Test = () => {

  const [state, setState] = useState(initialTestState)
  const [timerActive, setTimerActive] = useState(true);

  const currentResponse = state.responseData[state.currentQuestionIndex];

  
  useEffect(() => {
    const interval = setTimeout(() => timerActive && timer(state, setState), 1000);
    
    return () => clearTimeout(interval);
  }, [currentResponse.timeTaken]);

  const setResponse = (selectedOption)=>{
    const newResponseData  = [ ...state.responseData ];
    newResponseData[state.currentQuestionIndex].selectedOption = selectedOption
    setState({...state, responseData: newResponseData})
  }

  const nextQuestion = ()=>{
    if(state.responseData[state.currentQuestionIndex+1]){
      setState({ ...state, currentQuestionIndex:state.currentQuestionIndex+1 })
    }else{
      const newResponseData  = [ ...state.responseData, {...initialResponseData} ];      
      setState({...state, responseData: newResponseData, currentQuestionIndex:state.currentQuestionIndex+1})
    }
  }

  const prevQuestion = ()=>{
    if(state.currentQuestionIndex>0){
      setState({ ...state, currentQuestionIndex:state.currentQuestionIndex-1 })
    }
  }

  return (
  <div className='fixed bottom-4 right-4 w-64 '>
    <Paper elevation={4} className='h-full p-4 pt-2 rounded-lg '>
      <TestMenu questionNumber={state.currentQuestionIndex+1} timeTaken={currentResponse.timeTaken } state={state} />
        <div className=''>
          <div className='grid grid-cols-2 gap-2 '>
            <Button variant='outlined' size='small' disabled={currentResponse.selectedOption=="A"} onClick={()=>{setResponse("A")}} >
              A
            </Button>
            <Button variant='outlined' size='small' disabled={currentResponse.selectedOption=="B"} onClick={()=>{setResponse("B")}} >
              B
            </Button>
            <Button variant='outlined' size='small' disabled={currentResponse.selectedOption=="C"} onClick={()=>{setResponse("C")}} >
              C
            </Button>
            <Button variant='outlined' size='small' disabled={currentResponse.selectedOption=="D"} onClick={()=>{setResponse("D")}} >
              D
            </Button>
          </div>
          <QuestionControl nextQuestion={nextQuestion} prevQuestion={prevQuestion} />
        </div>
      </Paper>
  </div>
  )
}

export default Test