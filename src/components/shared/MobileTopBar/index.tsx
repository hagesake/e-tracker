// import Image from 'next/image'
import { validateRequest } from '@/lib/utils/authInfo'

import MobileNavMenu from './MobileNavMenu'
import { ThemeToggler } from '@/components/ui/ThemeToggler'

const MobileTopBar = async () => {
  const { user } = await validateRequest()

  return (
    <>
      <header className="fixed top-0 flex w-full items-center justify-between border-b border-eerie_black/80 bg-timberwolf p-2 dark:border-timberwolf dark:bg-eerie_black">
        <div className="flex items-center gap-8">
          <MobileNavMenu userData={user} />
          <div className="bg-dark_slate_teal h-8 w-8 rounded">
            {/* <Image></Image> */}
          </div>
        </div>

        <div>
          <ThemeToggler />
        </div>
      </header>
    </>
  )
}

export default MobileTopBar
