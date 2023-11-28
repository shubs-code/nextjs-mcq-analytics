import ResponsiveAppBar from "@/component/dashboard/ResponsiveAppBar"

interface DashboardLayoutProps {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div>
            <ResponsiveAppBar/>
            {children}
        </div>
    )
  }
  