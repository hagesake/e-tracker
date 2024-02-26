import { MAIN_ROUTES } from '@/lib/constants/main_routes'

import Link from 'next/link'

type Props = {
  onClick?: () => void
}

const NavLinkList = ({ onClick }: Props) => {
  return (
    <>
      <ul className="space-y-6">
        {MAIN_ROUTES.map(route => {
          return (
            <li key={route.href}>
              <Link
                href={route.href}
                onClick={onClick}
                className="group/link flex w-fit items-center gap-4 text-[16px] font-bold text-eerie_black dark:text-timberwolf"
              >
                <span>
                  {route.icon({
                    className:
                      'w-8 h-8 stroke-eerie_black dark:stroke-timberwolf'
                  })}
                </span>

                <span className="relative font-Quicksand text-[18px] text-eerie_black dark:text-timberwolf">
                  {route.name}
                  <span className="bg-dark_slate_teal absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 transform transition-all duration-500 group-hover/link:w-full dark:bg-slate-100"></span>
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
