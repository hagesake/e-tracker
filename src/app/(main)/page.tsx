import { getUser } from '@/lib/utils/authInfo'

export default async function Home() {
  const user = await getUser()

  return (
    <main className="h-screen p-4 pt-20">
      <h1 className="font-Quicksand text-3xl font-black text-eerie_black dark:text-timberwolf">
        E-Tracker App
      </h1>

      {user && (
        <>
          <div className="rounded bg-white  p-4">
            <h4>User Data</h4>
            <p>{user.id}</p>
            <p>{user.email}</p>
            <p>{user.user_name}</p>
          </div>
        </>
      )}
    </main>
  )
}
