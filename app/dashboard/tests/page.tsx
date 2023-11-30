"use client"
import ListTest from '@/component/test/ListTest';
import Pagination from '@mui/material/Pagination'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React,{useEffect, useState} from 'react'


const Tests = () => {
  const router = useRouter();
  const { data: session  } = useSession();

  const [testInfo, setTestInfo] = useState({tests:[],limit:10 ,pageNumber:1, pageCount:1, loading:true})

  useEffect(()=>{
    if(session?.user?.name){
      fetch(`/api/test?offset=${testInfo.limit*(testInfo.pageNumber-1)}`,{
        method:"GET",
        credentials:"include"
      })
      .then((response)=>{
        return response.json()
      })
      .then((data)=>{
        console.log(data)
        setTestInfo({ ...testInfo, tests:data.tests, pageCount:Math.ceil(data.count/testInfo.limit), loading:false})
      })
      .catch((err)=>{
        console.log(err)
      })
    }else {
      router.push("/dashboard")
    }
  },[session, testInfo.pageNumber])
  return (
    <>
        <div className="h-0 grow overflow-clip overflow-y-auto no-scrollbar">
            <ListTest tests={testInfo.tests} loading={testInfo.loading}/>
        </div>
        <div className='flex items-center justify-center my-2 sm:my-4'>
          <Pagination disabled={testInfo.loading} count={testInfo.pageCount} variant="outlined" 
            onChange={(event, page)=>{
              if(page == testInfo.pageNumber){
                return;
              }else{
                setTestInfo({...testInfo, pageNumber:page, loading:true});
              }
            }}
          />
        </div>
    </> 
  )
}

export default Tests