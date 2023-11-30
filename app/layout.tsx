import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeRegistry from '@/component/ThemeRegistry/ThemeRegistry'
import Provider from '@/component/providers/Provider'

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
  
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <ThemeRegistry>
          <Provider >
            {children}
          </Provider>
        </ThemeRegistry>
      </body>
    </html>
  )
}
