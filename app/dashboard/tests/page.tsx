"use client"
import ListTest from '@/component/test/ListTest';
import Pagination from '@mui/material/Pagination'
import React,{useEffect, useState} from 'react'

const Tests = () => {
  const [dataLoading, setDataLoading] = useState(false);
  const tests = [0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8]
  return (
    <>
        <div className="h-0 grow overflow-clip overflow-y-auto no-scrollbar">
            <ListTest tests={tests} />
        </div>
        <div className='flex items-center justify-center my-2 sm:my-4'>
          <Pagination disabled={dataLoading} count={8} variant="outlined" />
        </div>
    </> 
  )
}

export default Tests