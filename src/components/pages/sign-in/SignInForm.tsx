'use client'

import type { SignInFormState } from '@/lib/actions/auth'

import { useFormState, useFormStatus } from 'react-dom'
import { signIn } from '@/lib/actions/auth'

import Link from 'next/link'
import Image from 'next/image'
import { TbArrowBearLeft, TbAlertSquareRounded } from 'react-icons/tb'

const SignInForm = () => {
  const initState: SignInFormState = {
    status: 'UNSET',
    message: '',
    errors: {}
  }

  const [formState, formAction] = useFormState(signIn, initState)

  return (
    <>
      <form action={formAction} className="@container mt-8 flex flex-col gap-8">
        <div className="space-y-2">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="ml-2 font-Quicksand text-eerie_black dark:text-timberwolf"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="email@example.com"
              className="form-input rounded-[8px] border-none bg-timberwolf-900 px-2 py-1 font-Quicksand text-eerie_black shadow placeholder:font-Quicksand placeholder:text-cadet_gray focus:inset-0 focus:outline-transparent focus:ring-2 focus:ring-cadet_gray focus-visible:ring-2 focus-visible:ring-cadet_gray dark:bg-eerie_black-900/20 dark:text-timberwolf"
            />

            <p className="ml-2 mt-1 font-Quicksand text-xs text-red-600 dark:text-red-800">
              {formState?.errors['email']?.[0]}
            </p>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="ml-2 font-Quicksand text-eerie_black dark:text-timberwolf"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="mypassword"
              className="form-input rounded-[8px] border-none bg-timberwolf-900 px-2 py-1 font-Quicksand text-eerie_black shadow placeholder:text-justify placeholder:font-Quicksand placeholder:text-cadet_gray focus:inset-0 focus:outline-transparent focus:ring-2 focus:ring-cadet_gray focus-visible:ring-2 focus-visible:ring-cadet_gray dark:bg-eerie_black-900/20 dark:text-timberwolf"
            />

            <p className="ml-2 mt-1 font-Quicksand text-xs text-red-600 dark:text-red-800">
              {formState?.errors['password']?.[0]}
            </p>
          </div>

          {formState.errors['dbError'] && (
            <div className="flex items-center justify-center gap-1 rounded-[8px] bg-red-400/50 py-1">
              <span>
                <TbAlertSquareRounded className="h-6 w-6 stroke-red-600 dark:stroke-red-800" />
              </span>
              <p className="text-center font-Quicksand text-xs font-bold text-red-600 dark:text-red-800">
                {formState?.message}
              </p>
            </div>
          )}
        </div>

        <div className="@[380px]:flex-row-reverse @[380px]:justify-between flex flex-col gap-4">
          <FormControls />

          <div className="@[380px]:block @[380px]:m-0 mx-auto flex items-center gap-1">
            <p className="font-Quicksand text-xs font-light text-eerie_black-600 dark:text-timberwolf-300">
              {"Don't have an account yet?"}
            </p>

            <div className="flex items-center gap-1">
              <p className="font-Quicksand text-xs text-eerie_black-600 dark:text-timberwolf-300">
                Sign up
              </p>

              <Link href={'/sign-up'} className="relative">
                <TbArrowBearLeft className="absolute -bottom-3 -left-[10px] h-6 w-6 rotate-[115deg] animate-pulse stroke-dark_slate_teal" />
                <span className="text-sm font-bold text-dark_slate_teal">
                  here
                </span>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default SignInForm

const FormControls = () => {
  const { pending } = useFormStatus()

  return (
    <>
      <div className="flex items-center justify-end gap-4">
        <Link
          href={'/'}
          className="flex h-10 w-24 items-center justify-center rounded-[8px] border-2 border-eerie_black dark:border-timberwolf-400"
        >
          <span className="font-Quicksand font-extrabold text-eerie_black dark:text-timberwolf-400">
            Cancel
          </span>
        </Link>

        <button
          type="submit"
          className="flex h-10 w-24 items-center justify-center rounded-[8px] border-2 border-dark_slate_teal bg-dark_slate_teal"
        >
          {pending ? (
            <>
              <span>
                <Image
                  src={'/icons/loading-spinner.svg'}
                  alt="Loading spinner"
                  width={24}
                  height={24}
                  className=""
                />
              </span>
            </>
          ) : (
            <>
              <span className="font-Quicksand font-extrabold text-timberwolf">
                Sign in
              </span>
            </>
          )}
        </button>
      </div>
    </>
  )
}
