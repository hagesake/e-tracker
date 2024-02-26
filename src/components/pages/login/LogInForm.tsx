'use client'

import { useFormState } from 'react-dom'
import { logIn } from '@/lib/actions/auth'

import Link from 'next/link'

const LogInForm = () => {
  const [state, formAction] = useFormState(logIn, { message: '', error: '' })

  return (
    <>
      <form action={formAction} className="space-y-20">
        <div>
          <div className="flex flex-col">
            <label htmlFor="email">Username</label>
            <input type="text" id="email" name="email" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Username</label>
            <input type="password" id="password" name="password" />
          </div>
        </div>

        <p>{state?.message}</p>
        <p>{state?.error}</p>

        <div className="flex items-center justify-end gap-4">
          <Link href={'/'}>Cancel</Link>

          <button type="submit">Log In</button>
        </div>
      </form>
    </>
  )
}

export default LogInForm
