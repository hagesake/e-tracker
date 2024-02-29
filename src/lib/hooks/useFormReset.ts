import { useRef, useEffect } from 'react'
import type { CreateFormState } from '../actions/operations'

const useFormReset = (formState: CreateFormState) => {
  const formRef = useRef<HTMLFormElement>(null)
  const prevTimestamp = useRef(formState.resetKey)

  useEffect(() => {
    if (!formRef.current) return
    if (
      formState.status === 'SUCCESS' &&
      formState.resetKey !== prevTimestamp.current
    ) {
      formRef.current.reset()

      prevTimestamp.current = formState.resetKey
    }
  }, [formState.status, formState.resetKey])

  return formRef
}

export { useFormReset }
