import { redirect } from 'next/navigation';

export default function Home() {
  redirect("/dashboard")
  return (
    <div className="min-h-screen flex flex-col justify-between"></div>
  )
}
