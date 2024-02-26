import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import '../globals.css'

import { ThemeProvider } from '@/components/shared/ThemeProvider'
import MobileTopBar from '@/components/shared/MobileTopBar'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-Quicksand'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${quicksand.className} bg-timberwolf dark:bg-eerie_black`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MobileTopBar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}