import { db } from '@/db'
import { type SelectOperations, operations } from '@/db/schemas/operations'

import { eq } from 'drizzle-orm'

export const getOperationsByUserId = async (data: {
  userId: string
}): Promise<SelectOperations[] | undefined> => {
  try {
    return await db
      .select()
      .from(operations)
      .where(eq(operations.user_id, data.userId))
  } catch (error) {
    console.log('Error getting operations from DB', error)
  }
}
