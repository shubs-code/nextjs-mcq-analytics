import ResponsiveAppBar from "@/component/dashboard/ResponsiveAppBar"
import TakeTestButton from "@/component/test/TakeTestButton";
import Paper from '@mui/material/Paper';

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <ResponsiveAppBar/>
      <Paper elevation={3} className="h-0 flex justify-center items-center m-8 grow">
        <TakeTestButton/>          
      </Paper>
    </div>
  )
}
