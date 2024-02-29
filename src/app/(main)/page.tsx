import { getUser } from '@/lib/utils/authInfo'

import { Hero } from '@/components/pages/root'

export default async function Home() {
  const user = await getUser()
  console.log({ user })

  if (!user) {
    return (
      <div className="flex h-dvh flex-col items-center justify-center p-4 pb-24 sm:justify-normal sm:pb-0 sm:pt-28">
        <Hero />
      </div>
    )
  } else {
    return (
      <>
        <div>
          <h1 className="pt-40">HomePage</h1>
        </div>
      </>
    )
  }
}
