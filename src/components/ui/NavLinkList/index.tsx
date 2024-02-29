import { MAIN_ROUTES } from '@/lib/constants/main_routes'
import { cn } from '@/components/shadcn/lib/utils'

import Link from 'next/link'
import * as React from 'react'

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {}

type Props = {
  icons?: boolean
  className?: ListProps['className']
  onClick?: () => void
}

const NavLinkList = ({ icons = true, className, onClick }: Props) => {
  return (
    <>
      <ul className={cn([className])}>
        {MAIN_ROUTES.map(route => {
          return (
            <li key={route.href}>
              <Link
                href={route.href}
                onClick={onClick}
                className="group/link flex w-fit items-center gap-4 text-[16px] font-bold text-eerie_black dark:text-timberwolf"
              >
                {icons && (
                  <span>
                    {route.icon({
                      className:
                        'w-8 h-8 stroke-eerie_black dark:stroke-timberwolf'
                    })}
                  </span>
                )}

                <span className="relative font-Quicksand text-[18px] text-eerie_black dark:text-timberwolf">
                  {route.name}
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 transform bg-dark_slate_teal transition-all duration-500 group-hover/link:w-full"></span>
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default NavLinkList
