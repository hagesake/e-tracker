'use client'

import type { User } from 'lucia'

import { useState } from 'react'
import { cn } from '@/components/shadcn/lib/utils'

import Link from 'next/link'
import NavLinkList from '@/components/ui/NavLinkList'
import LogOutButton from '@/components/ui/LogOutButton'
import { TbMenu2, TbSquareRoundedX } from 'react-icons/tb'

import { TbLogin } from 'react-icons/tb'

type Props = {
  userData?: User | undefined | null
}

const MobileNavMenu = ({ userData }: Props) => {
  const [openNavMenu, setOpenNavMenu] = useState(false)

  const handleNavigation = () => {
    setOpenNavMenu(false)
  }
  return (
    <>
      <button onClick={() => setOpenNavMenu(true)}>
        <TbMenu2 className="h-6 w-6 stroke-eerie_black dark:stroke-timberwolf" />
      </button>

      <div
        id="overlay"
        className={cn([
          'absolute left-0 top-0 z-10 h-screen bg-eerie_black-200/80 dark:bg-black/80',
          openNavMenu &&
            'w-full opacity-100 transition-all duration-500 ease-in-out',
          !openNavMenu &&
            'w-0 opacity-10 transition-all duration-700 ease-in-out'
        ])}
      ></div>

      <nav
        className={cn([
          'absolute left-0 top-0 z-20 flex h-screen flex-col justify-between overflow-hidden bg-timberwolf opacity-95 dark:bg-eerie_black dark:opacity-100',
          openNavMenu &&
            'w-5/6 px-6 pb-20 pt-10 transition-all duration-700 ease-in-out',
          !openNavMenu &&
            'w-0 px-0 pb-20 pt-10 opacity-0 transition-all duration-700 ease-in-out'
        ])}
      >
        <button
          onClick={() => setOpenNavMenu(false)}
          className={cn([
            'absolute right-4 top-4',
            !openNavMenu && 'opacity-0 transition-all duration-500'
          ])}
        >
          <TbSquareRoundedX className="h-8 w-8 stroke-eerie_black dark:stroke-timberwolf" />
        </button>

        <div className="space-y-8">
          <h2 className="whitespace-nowrap font-Quicksand text-2xl font-black text-eerie_black dark:text-timberwolf">
            E-Tracker
          </h2>

          <NavLinkList onClick={handleNavigation} />
        </div>

        <div className="">
          {!userData ? (
            <>
              <Link href={'/login'} className="flex w-fit items-center gap-4">
                <span>
                  <TbLogin className="h-8 w-8 stroke-slate-900 dark:stroke-slate-100" />
                </span>

                <span className="whitespace-nowrap text-[16px] font-bold text-eerie_black dark:text-timberwolf">
                  Log in
                </span>
              </Link>
            </>
          ) : (
            <>
              <LogOutButton />
            </>
          )}
        </div>
      </nav>
    </>
  )
}

export default MobileNavMenu
