import { cn } from '@/components/shadcn/lib/utils'

import { Badge } from '@/components/shadcn/components/ui/badge'
import { TbTransferIn, TbTransferOut } from 'react-icons/tb'

type Props = {
  type: 'credit' | 'debit'
  value: number
}

const OperationBadge = ({ type, value }: Props) => {
  return (
    <>
      <Badge
        className={cn([
          'space-x-2 border-none px-2 py-1',
          type === 'credit' &&
            'bg-green-200 hover:bg-green-200 dark:bg-green-400',
          type === 'debit' && 'bg-red-200 hover:bg-red-200 dark:bg-red-400'
        ])}
      >
        {type === 'credit' ? (
          <>
            <TbTransferIn className="h-4 w-4 stroke-green-500 dark:stroke-green-800" />
          </>
        ) : (
          <>
            <TbTransferOut className="h-4 w-4 stroke-red-500 dark:stroke-red-800" />
          </>
        )}

        {/* <span
          className={cn([
            'font-Inter text-sm font-semibold',
            type === 'credit' && 'text-green-500 dark:text-green-800',
            type === 'debit' && 'text-red-500 dark:text-red-800 '
          ])}
        >
          {type === 'credit' ? '+' : '-'} {value}%
        </span> */}
      </Badge>
    </>
  )
}

export default OperationBadge
