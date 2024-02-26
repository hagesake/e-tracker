'use server'

import z from 'zod'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { db } from '@/db'
import { operations } from '@/db/schemas/operations'
import { validateRequest } from '../utils/authInfo'

const OperationSchema = z.object({
  name: z
    .string({ required_error: 'This field is required' })
    .min(1, { message: 'This field is required' }),
  ammount: z.coerce
    .number({
      required_error: 'This field is required',
      invalid_type_error: 'Please enter a valid number dumbass'
    })
    .min(1, { message: 'This field is required' }),
  currency: z.enum(['CUP', 'USD', 'MLC'], {
    required_error: 'This field is required'
  }),
  op_type: z.enum(['debit', 'credit'] as const)
})

export type CreateFormState = z.infer<typeof OperationSchema>

export const create = async (state: any, formData: FormData) => {
  console.log('executing CREATE_OPERATION action...')

  const parsedData = OperationSchema.safeParse({
    name: formData.get('name'),
    ammount: formData.get('ammount'),
    currency: formData.get('currency'),
    op_type: formData.get('type')
  })

  if (!parsedData.success) {
    console.log('wrong data!')
    return {
      errors: true,
      resetKey: undefined
    }
  }

  const { name, ammount, currency, op_type } = parsedData.data

  const userId = (await validateRequest()).user?.id!
  console.log({ name, ammount, currency, op_type, userId })
  const response = await db
    .insert(operations)
    .values({
      user_id: userId,
      name,
      ammount,
      currency,
      op_type
    })
    .returning({ insertedId: operations.id, userId: operations.user_id })

  if (response[0].insertedId) {
    revalidatePath('/operations')
    // redirect('/operations')
    return {
      errors: false,
      resetKey: response[0].insertedId
    }
  }
}
