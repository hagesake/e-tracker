import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'

const client = createClient({
  url: process.env.DATABASE_URL!,
  // switch this one for the env variable for deploy
  authToken: 'DATABASE_AUTH_TOKEN'
})

export const db = drizzle(client)
