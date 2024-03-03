import { validateRequest } from '@/lib/utils/authInfo'
import { redirect } from 'next/navigation'

import Image from 'next/image'
import { SignUpForm } from '@/components/pages/signup'

const SigUpPage = async () => {
  const { user } = await validateRequest()
  if (user) {
    return redirect('/')
  }

  return (
    <>
      <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-2 px-4 py-20">
        <div className="flex items-end">
          <Image
            src={'/img/logo.svg'}
            alt="E-Tracker logo"
            width={80}
            height={80}
          />

          <h1 className="font-Quicksand text-4xl font-black text-eerie_black dark:text-timberwolf">
            E-Tracker
          </h1>
        </div>

        <div className="mx-auto w-full max-w-lg rounded-[20px] bg-gradient-to-br from-base/20 to-cadet_gray/20 p-8 dark:bg-gradient-to-br dark:from-eerie_black/20 dark:to-cadet_gray-400/20">
          <div>
            <h2 className="font-Quicksand text-2xl font-black tracking-wider text-eerie_black dark:text-timberwolf">
              Welcome!
            </h2>
            <p className="font-Quicksand text-lg text-cadet_gray-200 dark:text-timberwolf-400">
              Please fill the fields to create your profile
            </p>
          </div>

          <SignUpForm />
        </div>
      </div>
    </>
  )
}

export default SigUpPage
