const AuthLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <main
      // className={` bg-timberwolf dark:bg-eerie_black`}
      >
        {children}
      </main>
    </>
  )
}

export default AuthLayout
