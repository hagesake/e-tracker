'use server'

import z from 'zod'
import { Argon2id } from 'oslo/password'
import { generateId } from 'lucia'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { lucia } from '@/auth'
import { insertUserInDb, getUserWithCredentials } from '../data/func-users'
import { getSession } from '../utils/authInfo'

const UserSignUpSchema = z.object({
  userName: z.string().min(1, { message: 'Please provide a username' }),
  email: z
    .string()
    .min(1, { message: 'Please provide an email' })
    .email({ message: 'Must be a valid email address' }),
  password: z.string().min(1, { message: 'Please provide a password' })
  // role: z.enum(['admin', 'public'])
})

const UserSignInSchema = UserSignUpSchema.omit({ userName: true })

export type SignInFormState = {
  status: 'UNSET' | 'SUCCESS' | 'ERROR'
  message: string
  errors: Record<string, string[] | string | undefined>
}

export const signUp = async (state: unknown, formData: FormData) => {
  const parsedData = UserSignUpSchema.safeParse({
    userName: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password')
    // role: formData.get('role')
  })

  if (!parsedData.success) {
    return {
      message: 'Error. Invalid fields'
    }
  }

  const { userName, email, password } = parsedData.data

  const userId = generateId(36)
  const hashedPassword = await new Argon2id().hash(password)

  const response = await insertUserInDb({
    id: userId,
    user_name: userName,
    email,
    password: hashedPassword
  })

  if (response?.error) {
    return {
      message: response.message
    }
  }

  const session = await lucia.createSession(userId, {})
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

  return redirect('/login')
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
