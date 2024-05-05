import { ChangeEvent, FormEvent, useId, useState } from 'react'
import { BookMinusIcon, CoinsIcon, Plus } from 'lucide-react'
import { Input } from './input'
import { toast } from 'sonner'

interface NewTransaction {
  onTransferCreated: (desc: string, amount: string, expense: boolean) => void
}

export function NewTransaction({ onTransferCreated }: NewTransaction) {
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')
  const [isExpense, setIsExpense] = useState(false)
  
  const inputDescriptionId = useId()
  const inputValueId = useId()

  function handleDescChange(event: ChangeEvent<HTMLInputElement>) {
    setDesc(event.target.value)
  }

  function handleValueChange(event: ChangeEvent<HTMLInputElement>) {
    if(event.target.value) {
      setAmount(event.target.value)
    } else {
      setAmount('')
    }
  }

  function handleIsExpenseChange() {
    setIsExpense(!isExpense)
  }

  function handleSaveTransfer(event: FormEvent) {
    event.preventDefault()
    
    if(!desc || !amount) {
      toast.error('Informa a descrição e valor!')
      return
    }
    
    if(Number(amount) < 0) {
      toast.error('Informe um valor positivo!')
      return
    }

    onTransferCreated(desc, amount, isExpense)
    toast.success('Transferência registrada com sucesso!', )

    setDesc('')
    setAmount('')
    setIsExpense(false)
  }

  return (
    <form onSubmit={handleSaveTransfer} autoComplete='off' className='bg-fn_dark_800/25 w-[320px] mx-auto rounded flex flex-col items-center gap-4 py-4 lg:gap-9 mt-14 lg:py-7 lg:px-8 lg:flex-row lg:justify-between lg:w-full'>
      <Input.Root>
        <Input.Label label='Descrição' htmlFor={inputDescriptionId}/>
        <Input.InputThis placeholder='Descrição' type='text' id={inputDescriptionId} onChange={handleDescChange} value={desc} >
          <Input.Icon icon={BookMinusIcon}/>
        </Input.InputThis>
      </Input.Root>

      <Input.Root>
        <Input.Label label='Valor' htmlFor={inputValueId}/>
        <Input.InputThis placeholder='Quanto foi?' type='number' id={inputValueId} onChange={handleValueChange} value={amount}>
          <Input.Icon icon={CoinsIcon}/>
        </Input.InputThis>
      </Input.Root>

      <div className='self-end'>
        <input 
          id='entrada' 
          type="radio" 
          name='type' 
          value="entrada"
          className='absolute opacity-0 h-0 w-0 peer' 
          tabIndex={0} 
          onChange={handleIsExpenseChange}
          checked={isExpense == false}
        />
        <label htmlFor='entrada' className='flex items-center justify-center flex-shrink-0 h-12 min-w-20 px-[10px] rounded overflow-hidden bg-fn_dark_800/25 border-2  border-fn_dark_800  peer-checked:border-emerald-400  focus-within:border-emerald-400 lg:self-end lg:w-auto'>
          Entrada
        </label>
      </div>

      <div className='self-end'>
        <input 
          id='saida' 
          type="radio" 
          name='type' 
          value="saida" 
          className='absolute opacity-0 h-0 w-0 peer' 
          tabIndex={0} 
          onChange={handleIsExpenseChange} 
          checked={isExpense == true}
        />
        <label htmlFor='saida' className='flex items-center justify-center flex-shrink-0 h-12 min-w-20 px-[10px] rounded overflow-hidden bg-fn_dark_800/25 border-2 border-fn_dark_800 peer-checked:border-red-400  focus-within:border-red-400 lg:self-end lg:w-auto'>
          Saida
        </label>
      </div>

      <button className='flex items-center justify-center rounded w-72 h-12 bg-emerald-500 lg:self-end'>
        <Plus />
        Nova operação
      </button>
    </form>
  )
}