'use client'

import type { User } from 'lucia'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent
} from '@/components/shadcn/components/ui/sheet'
import NavLinkList from '@/components/ui/NavLinkList'
import LogOutButton from '@/components/ui/LogOutButton'
import { TbLogin, TbMenu2, TbSquareRoundedX } from 'react-icons/tb'

type Props = {
  userData?: User | undefined | null
}

const MobileNavMenu = ({ userData }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Sheet modal open={isOpen}>
        <SheetTrigger asChild>
          <button
            onClick={() => {
              setIsOpen(true)
            }}
            className="sm:hidden"
          >
            <TbMenu2 className="h-6 w-6 stroke-eerie_black dark:stroke-timberwolf" />
          </button>
        </SheetTrigger>

        <SheetContent
          side={'left'}
          onInteractOutside={e => {
            e.preventDefault()
          }}
          className="w-5/6 border-none p-0"
        >
          <SheetClose asChild>
            <button
              onClick={() => {
                setIsOpen(false)
              }}
              className="absolute right-4 top-4"
            >
              <TbSquareRoundedX className="h-8 w-8 stroke-eerie_black dark:stroke-timberwolf" />
            </button>
          </SheetClose>

          <nav className="flex h-screen w-full flex-col justify-between bg-timberwolf px-6 pb-20 pt-12 dark:bg-eerie_black">
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <Image
                  src={'/img/logo.svg'}
                  alt="E-Tracker log"
                  width={38}
                  height={30}
                  className=""
                />
                <h2 className="whitespace-nowrap font-Quicksand text-2xl font-black text-eerie_black dark:text-timberwolf">
                  E-Tracker
                </h2>
              </div>

              <NavLinkList onClick={handleNavigation} className="space-y-6" />
            </div>

            <div className="">
              {!userData ? (
                <>
                  <Link
                    href={'/login'}
                    className="flex w-fit items-center gap-4"
                  >
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
        </SheetContent>
      </Sheet>
    </>
  )
}

export default MobileNavMenu
