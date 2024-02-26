import { TbHome, TbTransfer, TbUser } from 'react-icons/tb'
import { IconType } from 'react-icons/lib'

type MainRoute = {
  name: string
  href: string
  icon: IconType
}

export const MAIN_ROUTES: MainRoute[] = [
  {
    name: 'Home',
    href: '/',
    icon: TbHome
  },
  {
    name: 'Operations',
    href: '/operations',
    icon: TbTransfer
  },

  {
    name: 'Profile',
    href: '/profile',
    icon: TbUser
  }
]
