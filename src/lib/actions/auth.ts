'use server'

import z from 'zod'
import { Argon2id } from 'oslo/password'
import { generateId } from 'lucia'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { lucia } from '@/auth'
import { insertUserInDb, getUserWithCredentials } from '../data/func-users'
import { getSession } from '../utils/authInfo'

const UserSignUpSchema = z
  .object({
    userName: z.string().min(1, { message: 'Please provide a username' }),
    email: z
      .string()
      .min(1, { message: 'Please provide an email' })
      .email({ message: 'Must be a valid email address' }),
    password: z.string().min(1, { message: 'Please provide a password' }),
    confirmedPassword: z
      .string()
      .min(1, { message: 'Please type again your password' })
    // role: z.enum(['admin', 'public'])
  })
  .refine(data => data.password === data.confirmedPassword, {
    message: 'Passwords do not match',
    path: ['confirmedPassword']
  })

const UserSignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Please provide an email' })
    .email({ message: 'Must be a valid email address' }),
  password: z.string().min(1, { message: 'Please provide a password' })
})

export type SignInFormState = {
  status: 'UNSET' | 'SUCCESS' | 'ERROR'
  message: string
  errors: Record<string, string[] | string | undefined>
}

export const signUp = async (state: SignInFormState, formData: FormData) => {
  const parsedData = UserSignUpSchema.safeParse({
    userName: formData.get('userName'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmedPassword: formData.get('confirmPassword')
    // role: formData.get('role')
  })

  if (!parsedData.success) {
    return {
      status: 'ERROR' as const,
      message: 'Invalid fields',
      errors: parsedData.error.flatten().fieldErrors
    }
  }

  const { userName, email, password } = parsedData.data
  const generatedId = generateId(36)
  const hashedPassword = await new Argon2id().hash(password)

  const response = await insertUserInDb({
    id: generatedId,
    user_name: userName,
    email,
    password: hashedPassword
  })
  const { message, error } = response!

  if (response?.error) {
    return {
      status: 'ERROR' as const,
      message,
      errors: { dbError: error }
    }
  }

  const session = await lucia.createSession(generatedId, {})
  const sessionCookie = lucia.createSessionCookie(session.id)
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )

  console.log({
    session: { ...session },
    cokkie: { ...sessionCookie }
  })

  return redirect('/sign-in')
}

export const signIn = async (state: SignInFormState, formData: FormData) => {
  const parsedData = UserSignInSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  })

  if (!parsedData.success) {
    return {
      status: 'ERROR' as const,
      message: 'Invalid fields',
      errors: parsedData.error.flatten().fieldErrors
    }
  }

  const { email, password } = parsedData.data

  const response = await getUserWithCredentials({ email, password })
  const { message, error, data } = response!

  if (response?.error) {
    return {
      status: 'ERROR' as const,
      message: message!,
      errors: { dbError: error! }
    }
  }

  const session = await lucia.createSession(data?.id!, {})
  const sessionCookie = lucia.createSessionCookie(session.id)
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )

  return redirect('/')
}

export const logOut = async () => {
  console.log('loging you out')

  const session = await getSession()
  if (!session) {
    return {
      error: 'Unauthorized'
    }
  }

  await lucia.invalidateSession(session.id)

  const sessionCookie = lucia.createBlankSessionCookie()
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )
  return redirect('/')
}
