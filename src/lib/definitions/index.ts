export interface Operation {
  id: string
  name: string
  description?: string
  op_type: 'debit' | 'credit'
  amount: number
  currency: 'CUP' | 'USD' | 'MLC'
  createdAt?: string
}
