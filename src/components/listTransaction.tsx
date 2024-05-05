import { TransactionItem } from "./transactionItem";
import { Transaction } from '../app';

interface ListTransactionProps {
  Transactions: Transaction[]
  onDelete: ( id:string ) => void
}

export function ListTransaction({ Transactions, onDelete }:ListTransactionProps) {
  return (
    <div className="mt-3 rounded overflow-hidden">
      <ul className='w-full space-y-3'>
        {Transactions.map(item => {
          return <TransactionItem transaction={item} onDelete={onDelete} />
        })}
      </ul>
    </div>
  )
}