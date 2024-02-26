import { sql } from 'drizzle-orm'
import { integer, real, text, sqliteTable } from 'drizzle-orm/sqlite-core'

import { users } from './users'

export const operations = sqliteTable('operations', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  user_id: text('user_id').references(() => users.id),
  name: text('name').notNull(),
  description: text('description'),
  op_type: text('op_type', { enum: ['credit', 'debit'] }).notNull(),
  ammount: real('ammount').notNull(),
  currency: text('currency', { enum: ['CUP', 'USD', 'MLC'] }).notNull(),
  created_at: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  modified_at: text('modified_at').default(sql`CURRENT_TIMESTAMP`)
})

export type InsertOperations = typeof operations.$inferInsert
export type SelectOperations = typeof operations.$inferSelect
