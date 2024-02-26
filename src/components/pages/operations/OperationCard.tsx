import type { SelectOperations } from '@/db/schemas/operations'

import OperationBadge from '@/components/ui/OperationBadge'

type Props = {
  operation: SelectOperations
}

const OperationCard = ({ operation: op }: Props) => {
  const formatedDate = op.created_at?.split(' ')[0]

  return (
    <>
      <li>
        <article className="flex max-w-sm items-start justify-between gap-2 rounded-md bg-timberwolf-900 px-4 py-2 shadow-md dark:bg-eerie_black-300">
          <div className="flex w-[60%] flex-col gap-1">
            <h4 className="truncate font-Quicksand text-lg font-medium text-eerie_black dark:text-timberwolf">
              {op.name}
            </h4>
            <p className="font-Quicksand text-sm text-eerie_black dark:text-timberwolf">
              {formatedDate}
            </p>
          </div>

          <div className="flex flex-col items-end justify-center gap-2">
            <OperationBadge type={op.op_type} value={op.ammount} />
            <p className="">
              <span className="font-Quicksand text-sm font-medium text-eerie_black dark:text-timberwolf">
                {op.ammount}
              </span>{' '}
              <span className="font-Quicksand text-sm font-bold text-eerie_black dark:text-timberwolf">
                {op.currency}
              </span>
            </p>
          </div>
        </article>
      </li>
    </>
  )
}

export default OperationCard
