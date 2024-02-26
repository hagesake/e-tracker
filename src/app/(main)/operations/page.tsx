import { getUser } from '@/lib/utils/authInfo'
import { getOperationsByUserId } from '@/lib/data/func-operations'

import Link from 'next/link'
import { OperationCard, CreateOpDrawer } from '@/components/pages/operations'

const OperationsPage = async () => {
  const user = await getUser()

  const operations = await getOperationsByUserId({
    userId: user?.id!
  })

  if (!user) {
    return (
      <>
        <main className="h-screen p-4 pt-20">
          <h1>You are not logged in!</h1>
          <p>Please log in to see your operations</p>
          <Link
            href={'/login'}
            className="rounded-md bg-slate-600 px-3 py-1 text-lg font-bold text-white"
          >
            Go to login
          </Link>
        </main>
      </>
    )
  }

  return (
    <>
      <main className="h-screen p-4 pt-16">
        <h1 className="font-Quicksand text-3xl font-black text-eerie_black dark:text-timberwolf">
          Your operations
        </h1>
        <Link
          href={'/operations/create'}
          className="rounded-md bg-slate-600 px-3 py-1 text-lg font-bold text-white"
        >
          Create
        </Link>

        <CreateOpDrawer />

        <div>
          <ul className="space-y-2">
            {operations?.map(op => {
              return (
                <>
                  <OperationCard key={op.id} operation={op} />
                </>
              )
            })}
          </ul>
        </div>
      </main>
    </>
  )
}

export default OperationsPage
