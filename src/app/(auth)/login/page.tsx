import { validateRequest } from '@/lib/utils/authInfo'
import { redirect } from 'next/navigation'

import { LogInForm } from '@/components/pages/login'

const LoginPage = async () => {
  const { user } = await validateRequest()

  if (user) {
    return redirect('/')
  }

  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center bg-slate-700 px-8 py-20">
        <div className="space-y-8 rounded bg-slate-200 p-4">
          <div>
            <h1>Welcome!</h1>
            <h4>Please sign in</h4>
          </div>

          <LogInForm />
        </div>
      </main>
    </>
  )
}

export default LoginPage
