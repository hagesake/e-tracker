'use client'

import { useFormState } from 'react-dom'
import { signUp } from '@/lib/actions/auth'

import Link from 'next/link'

const SignUpForm = () => {
  const [state, formAction] = useFormState(signUp, { message: '' })

  return (
    <>
      <form action={formAction}>
        <label htmlFor="username">Username</label>
        <input name="username" id="username" type="text" />
        <br />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
        <br />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <br />

        {/* <fieldset>
          <legend>Role selection</legend>

          <div>
            <div>
              <input type="radio" name="role" id="admin" value={'admin'} />
              <label htmlFor="admin">Admin</label>
            </div>

            <div>
              <input type="radio" name="role" id="public" value={'public'} />
              <label htmlFor="admin">Public</label>
            </div>
          </div>
        </fieldset> */}
        <button>Continue</button>
      </form>
      <Link href="/login">Sign in</Link>

      <p>{state?.message}</p>
    </>
  )
}

export default SignUpForm
