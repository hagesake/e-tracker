import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/components/shared/ThemeProvider'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-Quicksand'
})

export const metadata: Metadata = {
  title: 'E-Tracker App',
  description:
    'E-Tracker is an app that help you manage your expenses with a beautifull interface and a simple and straight forward experience'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.className} bg-base dark:bg-eerie_black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
