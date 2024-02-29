// import { ThemeProvider } from '@/components/shared/ThemeProvider'
import TopBar from '@/components/shared/TopBar'

const MainLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <TopBar />
      <main
      // className={` bg-timberwolf dark:bg-eerie_black`}
      >
        {children}
      </main>
    </>
  )
}

export default MainLayout
