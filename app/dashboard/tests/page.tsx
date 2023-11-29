"use client"
import ListTest from '@/component/test/ListTest';
import Pagination from '@mui/material/Pagination'
import React,{useEffect, useState} from 'react'

const page = () => {
  const [dataLoading, setDataLoading] = useState(false);
  return (
    <>
        <div className="h-0 grow overflow-clip overflow-y-auto no-scrollbar">
            <ListTest />
        </div>
        <div className='flex items-center justify-center my-2'>
          <Pagination disabled={dataLoading} count={8} variant="outlined" />
        </div>
    </> 
  )
}

export default page