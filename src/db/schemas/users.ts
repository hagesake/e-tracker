import { sql } from 'drizzle-orm'
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  user_name: text('user_name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  role: text('role', { enum: ['admin', 'public'] })
    .notNull()
    .default('public'),
  created_at: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  modified_at: text('modified_at').default(sql`CURRENT_TIMESTAMP`)
})

export const sessions = sqliteTable('sessions', {
  id: text('id').notNull().primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id),
  expiresAt: integer('expires_at').notNull()
})

export type InsertUser = typeof users.$inferInsert
export type SelectUser = typeof users.$inferSelect
