import NavLinkList from '@/components/ui/NavLinkList'

const DesktopNavMenu = () => {
  return (
    <>
      <nav className="hidden sm:inline-flex">
        <NavLinkList icons={false} className="mt-1 flex items-center gap-8" />
      </nav>
    </>
  )
}

export default DesktopNavMenu
