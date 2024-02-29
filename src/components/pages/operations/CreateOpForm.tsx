'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { create } from '@/lib/actions/operations'
import { EMPTY_FORM_STATE } from '@/lib/utils/operations-utils'
import { useFormReset } from '@/lib/hooks/useFormReset'

import Image from 'next/image'
import { DrawerClose } from '@/components/shadcn/components/ui/drawer'
import { HiOutlineCheck } from 'react-icons/hi'

const CreateForm = () => {
  const [formState, formAction] = useFormState(create, EMPTY_FORM_STATE)
  const formRef = useFormReset(formState)

  return (
    <>
      <p>{formState?.message}</p>

      <form
        // Hack to reset the form upon successful submission
        ref={formRef}
        action={formAction}
        className=" p-4"
      >
        <div className="w-full space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="h-8 rounded-md"
            />
            <span className="text-xs text-red-400">
              {formState?.errors['name']?.[0]}
            </span>
          </div>

          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col ">
              <label htmlFor="ammount">Ammount</label>
              <input
                type="number"
                step={'any'}
                role="none"
                name="ammount"
                id="ammount"
                className="h-8 rounded-md"
              />
              <span className="text-xs text-red-400">
                {formState?.errors['ammount']?.[0]}
              </span>
            </div>

            <div className="relative flex flex-col">
              <label htmlFor="currency">Currency</label>
              <select
                name="currency"
                id="currency"
                className="w-20 rounded p-2 py-1 text-eerie_black"
              >
                <option value="CUP" className="appearance-none">
                  CUP
                </option>
                <option value="USD">USD</option>
                <option value="MLC">MLC</option>
              </select>
            </div>
          </div>

          <fieldset>
            <legend className="text-center">Select an operation type</legend>

            <div className="flex items-center justify-center gap-4">
              <div className="relative flex items-center gap-2">
                <input
                  type="radio"
                  id="credit"
                  name="type"
                  value="credit"
                  defaultChecked
                  className="peer/credit size-6  cursor-pointer appearance-none rounded bg-white checked:bg-dark_slate_teal"
                />
                <HiOutlineCheck className="invisible absolute top-0 size-6 stroke-white peer-checked/credit:visible" />
                <label htmlFor="credit">Credit</label>
              </div>

              <div className="relative flex items-center gap-2">
                <input
                  type="radio"
                  id="debit"
                  name="type"
                  value="debit"
                  className="peer/debit size-6 cursor-pointer appearance-none rounded bg-white checked:bg-dark_slate_teal"
                />
                <HiOutlineCheck className="invisible absolute top-0 size-6 stroke-white peer-checked/debit:visible" />
                <label htmlFor="debit">Debit</label>
              </div>
            </div>
          </fieldset>
        </div>

        <FormControls />
      </form>
    </>
  )
}

export default CreateForm

const FormControls = () => {
  const { pending } = useFormStatus()

  return (
    <>
      <div className="mt-12 flex items-center justify-end gap-2">
        <DrawerClose className="flex h-10 w-24 items-center justify-center rounded border border-eerie_black dark:border-timberwolf">
          <span className="font-Quicksand font-extrabold text-eerie_black dark:text-timberwolf">
            Cancel
          </span>
        </DrawerClose>

        <button
          type="submit"
          className="flex h-10 w-24 items-center justify-center  rounded border-dark_slate_teal bg-dark_slate_teal"
        >
          {pending ? (
            <>
              <span>
                <Image
                  src={'/icons/loading-spinner.svg'}
                  alt="Loading spinner"
                  width={24}
                  height={24}
                  className=""
                />
              </span>
            </>
          ) : (
            <>
              <span className="font-Quicksand font-extrabold text-timberwolf">
                Create
              </span>
            </>
          )}
        </button>
      </div>
    </>
  )
}
