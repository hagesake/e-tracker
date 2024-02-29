import type { InsertUser } from '@/db/schemas/users'

import { LibsqlError } from '@libsql/client'
import { eq } from 'drizzle-orm'
import { Argon2id } from 'oslo/password'

import { db } from '@/db'
import { users } from '@/db/schemas/users'

export type LogInResponse = {
  message?: string
  error?: string
  data?: {
    id: string
    user_name: string
    email: string
    role: string
  } | null
}

export const insertUserInDb = async (data: InsertUser) => {
  try {
    const response = await db.insert(users).values(data).returning({
      id: users.id,
      email: users.email
    })

    if (response) {
      return {
        message: 'Success inserting user in DB',
        error: null
      }
    }
  } catch (error) {
    if (error instanceof LibsqlError) {
      const { code, message, name } = error

      console.log('Error creating User', { code, message, name })
      return {
        message: 'Error inserting user in DB',
        error: message
      }
    }
  }
}

export const getUserWithCredentials = async (data: {
  email: string
  password: string
}): Promise<LogInResponse | undefined> => {
  const { email, password } = data

  try {
    const retrievedPassword = await db
      .select({
        password: users.password
      })
      .from(users)
      .where(eq(users.email, email))

    if (retrievedPassword.length === 0) {
      return {
        message: 'Error getting user data',
        error: `User doesn't exist`,
        data: null
      }
    }
    const isCorrectPassword = await new Argon2id().verify(
      retrievedPassword[0].password,
      password
    )

    if (!isCorrectPassword) {
      return {
        message: 'Error getting user data',
        error: 'Wrong credentials',
        data: null
      }
    }

    const response = await db
      .select({
        id: users.id,
        user_name: users.user_name,
        email: users.email,
        role: users.role
      })
      .from(users)
      .where(eq(users.email, email))

    if (response) {
      return {
        message: 'Success getting user from DB',
        error: undefined,
        data: { ...response[0] }
      }
    }
  } catch (error) {
    console.log('Error getting user from DB', error)
    return {
      message: 'Error getting user data',
      error: 'Something went wrong'
    }
  }
}
