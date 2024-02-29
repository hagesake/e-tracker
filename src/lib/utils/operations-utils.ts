import { ZodError } from 'zod'
import type { CreateFormState } from '../actions/operations'

export const EMPTY_FORM_STATE: CreateFormState = {
  status: 'UNSET' as const,
  message: '',
  errors: {},
  resetKey: Date.now()
}

export const fromErrorToFormState = (error: unknown) => {
  if (error instanceof ZodError) {
    return {
      status: 'ERROR' as const,
      message: '',
      errors: error.flatten().fieldErrors,
      resetKey: Date.now()
    }
  } else if (error instanceof Error) {
    return {
      status: 'ERROR' as const,
      message: error.message,
      errors: {},
      resetKey: Date.now()
    }
  } else {
    return {
      status: 'ERROR' as const,
      message: 'An unknown error occurred',
      errors: {},
      resetKey: Date.now()
    }
  }
}
