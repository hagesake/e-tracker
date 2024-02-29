import { validateRequest } from '@/lib/utils/authInfo'

import Image from 'next/image'
import MobileNavMenu from './MobileNavMenu'
import DesktopNavMenu from './DesktopNavMenu'
import { ThemeToggler } from '@/components/ui/ThemeToggler'

const TopBar = async () => {
  const { user } = await validateRequest()

  return (
    <>
      <header className="fixed top-0 w-full bg-base bg-opacity-10 p-4 filter backdrop-blur dark:bg-eerie_black dark:bg-opacity-80 dark:filter dark:backdrop-blur sm:px-8 sm:pb-2">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
          <div className="relative flex items-center gap-2">
            {user && <MobileNavMenu userData={user} />}
            <Image
              src={'/img/logo.svg'}
              alt="E-Tracker log"
              width={38}
              height={30}
              className=""
            />
          </div>

          {user && <DesktopNavMenu />}

          <div className="flex items-center">
            {user && (
              <>
                <div className="w-20 px-[2px]">
                  <p className="text-center font-Quicksand font-semibold leading-none text-eerie_black dark:text-timberwolf">
                    Hello,
                  </p>
                  <p className="truncate text-center font-Quicksand leading-none text-cadet_gray-200 dark:text-cadet_gray">
                    {user.user_name}
                  </p>
                </div>
              </>
            )}
            <ThemeToggler />
          </div>
        </div>
      </header>
    </>
  )
}

export default TopBar
