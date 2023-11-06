"use client"
import React from 'react'
import { Button } from "@mui/material";
import { useRouter } from 'next/navigation'

const TakeTestButton = () => {
    const router = useRouter()
    
    return (
    <Button
        variant="outlined"
        onClick={()=>{
            router.push("/test")
        }}
    >
        Take Test
    </Button>
  )
}

export default TakeTestButton