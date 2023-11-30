"use client"
import ListTest from '@/component/test/ListTest';
import Pagination from '@mui/material/Pagination'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React,{useEffect, useState} from 'react'


const Tests = () => {
  const router = useRouter();
  const { data: session  } = useSession();

  const [testInfo, setTestInfo] = useState({tests:[], pageNumber:1, pageCount:1, loading:true})
  const tests = [0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8]

  useEffect(()=>{
    if(session?.user?.name){
      fetch("/api/test",{
        method:"GET",
        credentials:"include"
      })
      .then((response)=>{
        return response.json()
      })
      .then((data)=>{
        console.log(data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }else {
      router.push("/dashboard")
    }
  },[session])
  return (
    <>
        <div className="h-0 grow overflow-clip overflow-y-auto no-scrollbar">
            <ListTest tests={tests} />
        </div>
        <div className='flex items-center justify-center my-2 sm:my-4'>
          <Pagination disabled={testInfo.loading} count={testInfo.pageCount} variant="outlined" 
            onChange={(event, page)=>{
              console.log(page)
            }}
          />
        </div>
    </> 
  )
}

export default Tests