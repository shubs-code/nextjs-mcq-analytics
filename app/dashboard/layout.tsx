"use client"
import React,{useEffect} from 'react'
import ResponsiveAppBar from "@/component/dashboard/ResponsiveAppBar"

interface DashboardLayoutProps {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    useEffect(()=>{ 
        document.body.classList.add('no-scrollbar');
        return ()=>{
            document.body.classList.remove('no-scrollbar');
        }
    },[])
    return (
        <div className='min-h-screen flex flex-col'>
            <ResponsiveAppBar/>
            {children}
        </div>
    )
  }
  