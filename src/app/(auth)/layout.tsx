import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import '../globals.css'

import { ThemeProvider } from '@/components/shared/ThemeProvider'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-Quicksand'
})

export const metadata: Metadata = {
  title: 'E-Tracker Login ',
  description: 'E-Tracker Login Page'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${quicksand.className} bg-timberwolf-800 dark:bg-eerie_black`}
      >
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
