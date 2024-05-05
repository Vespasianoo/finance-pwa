import { TrendingUpIcon, TrendingDownIcon, XIcon } from "lucide-react";
import { toast } from "sonner";

interface TransactionItemProps {
  transaction: {
    id: string,
    date: Date,
    desc: string,
    amount: number,
    expense: boolean
  },
  onDelete: ( id:string ) => void
}
export function TransactionItem({ transaction, onDelete}:TransactionItemProps) {
  function handleDeleteTransaction() {
    onDelete(transaction.id)
    toast.success('Transferência deletada com sucesso!')
  }

  return (
    <li className='flex justify-between bg-fn_dark_800/25 p-2'>
      <div className='flex gap-2'>
        {transaction.expense 
          ? <TrendingDownIcon className="text-red-500" /> 
          : <TrendingUpIcon className="text-emerald-500" />}
        <span>
          {transaction.desc}
        </span>
      </div>

      <div className='flex gap-2'>
        <span className='text-emerald-500'>R$ {transaction.amount}</span>
        <XIcon className='text-red-500 cursor-pointer' onClick={handleDeleteTransaction}/>
      </div>
    </li>
  )
}