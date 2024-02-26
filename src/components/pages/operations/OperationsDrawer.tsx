'use client'

import { useFormState, useFormStatus } from 'react-dom'

import Image from 'next/image'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/shadcn/components/ui/drawer'
import { create } from '@/lib/actions/operations'
import { HiOutlineCheck } from 'react-icons/hi'

const CreateOpDrawer = () => {
  const [state, formAction] = useFormState(create, {
    errors: false,
    resetKey: undefined
  })

  return (
    <>
      <Drawer modal>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerOverlay className="bg-eerie_black-200/10" />
        <DrawerContent className="bg-timberwolf dark:bg-eerie_black">
          <DrawerHeader>
            <DrawerTitle>Do you want to create a new operation?</DrawerTitle>
          </DrawerHeader>

          <DrawerFooter>
            <form
              // Hack to reset the form upon submission, not sure if that is correct
              key={state?.resetKey}
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
                </div>

                <div className="flex items-center justify-between gap-2">
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
                  <legend className="text-center">
                    Select an operation type
                  </legend>

                  <div className="flex items-center justify-center gap-4">
                    <div className="relative flex items-center gap-2">
                      <input
                        type="radio"
                        id="credit"
                        name="type"
                        value="credit"
                        defaultChecked
                        className="peer/credit checked:bg-dark_slate_teal  size-6 cursor-pointer appearance-none rounded bg-white"
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
                        className="peer/debit checked:bg-dark_slate_teal size-6 cursor-pointer appearance-none rounded bg-white"
                      />
                      <HiOutlineCheck className="invisible absolute top-0 size-6 stroke-white peer-checked/debit:visible" />
                      <label htmlFor="debit">Debit</label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <FormControls />
            </form>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CreateOpDrawer

const FormControls = () => {
  const { pending, action } = useFormStatus()

  console.log({ pending, action })
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
          className="border-dark_slate_teal bg-dark_slate_teal flex h-10 w-24  items-center justify-center rounded"
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
