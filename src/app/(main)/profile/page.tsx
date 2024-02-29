import { validateRequest } from '@/lib/utils/authInfo'

import Link from 'next/link'
import LogOutButton from '@/components/ui/LogOutButton'

const ProfilePage = async () => {
  const { user } = await validateRequest()

  if (!user) {
    return (
      <>
        <div className="h-screen p-4 pt-20">
          <h1>You are not logged in!</h1>
          <p>Please log in to see your profile info</p>
          <Link
            href={'/login'}
            className="rounded-md bg-slate-600 px-3 py-1 text-lg font-bold text-white"
          >
            Go to login
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="h-screen p-4 pt-20">
        <h1>ProfilePage</h1>
        <LogOutButton />
      </div>
    </>
  )
}

export default ProfilePage
