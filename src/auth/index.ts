import { Lucia } from 'lucia'

import { db } from '../db'
import { users, sessions } from '@/db/schemas/users'
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle'

const adapter = new DrizzleSQLiteAdapter(db, sessions, users)

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === 'production'
    }
  },
  getUserAttributes: attributes => {
    return {
      id: attributes.id,
      email: attributes.email,
      user_name: attributes.user_name
    }
  }
})

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia
    DatabaseUserAttributes: DatabaseUserAttributes
  }
}

interface DatabaseUserAttributes {
  id: string
  email: string
  user_name: string
}
