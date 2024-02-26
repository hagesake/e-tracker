import { logOut } from '@/lib/actions/auth'

import { TbLogout } from 'react-icons/tb'

const LogOutButton = () => {
  return (
    <>
      <form action={logOut} className="">
        <button type="submit" className="flex w-fit items-center gap-4">
          <span>
            <TbLogout className="stroke-eerie_black dark:stroke-timberwolf h-8 w-8 " />
          </span>

          <span className="text-eerie_black dark:text-timberwolf whitespace-nowrap text-[16px] font-bold">
            Log out
          </span>
        </button>
      </form>
    </>
  )
}

export default LogOutButton
