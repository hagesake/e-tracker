import { create } from '@/lib/actions/operations'

import Link from 'next/link'
import { HiOutlineCheck } from 'react-icons/hi'

const CreateForm = () => {
  return (
    <>
      <form action={create} className="rounded bg-slate-200/70 p-4">
        <h2 className="text-slate-9000 text-2xl font-bold">
          Create an operation
        </h2>

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
                className="w-20 rounded p-2 py-1 text-slate-800"
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
                  className="peer/credit size-6  cursor-pointer appearance-none rounded bg-white checked:bg-teal-700"
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
                  className="peer/debit size-6 cursor-pointer appearance-none rounded bg-white checked:bg-teal-700"
                />
                <HiOutlineCheck className="invisible absolute top-0 size-6 stroke-white peer-checked/debit:visible" />
                <label htmlFor="debit">Debit</label>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="mt-12 flex items-center justify-end gap-2">
          <Link
            href={'/operations'}
            className="flex h-10 w-24 items-center justify-center rounded border border-slate-900 font-extrabold text-slate-900"
          >
            <span className="font-extrabold text-slate-900">Cancel</span>
          </Link>

          <button
            type="submit"
            className="h-10 w-24 rounded border-teal-700 bg-teal-700  font-extrabold text-slate-50"
          >
            Create
          </button>
        </div>
      </form>
    </>
  )
}

export default CreateForm
