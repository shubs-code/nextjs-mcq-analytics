import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeRegistry from '@/component/ThemeRegistry/ThemeRegistry'
import Provider from '@/component/providers/Provider'
import { getServerSession } from 'next-auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mcq Analytics',
  description: 'Test your preparations of MCQ questions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = getServerSession()
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <ThemeRegistry>
          <Provider session={session}>
            {children}
          </Provider>
        </ThemeRegistry>
      </body>
    </html>
  )
}
