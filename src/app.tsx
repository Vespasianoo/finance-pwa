import { useState } from 'react'
import { Header } from './components/header'
import { NewTransaction } from './components/newTransaction'
import { sumArray } from './utils/sumArrayNumbers'
import { formatNumberIntoMoneyBRL } from './utils/formatNumberIntoMoneyBRL'
import { ListTransaction } from './components/listTransaction'

export interface Transaction {
  id: string,
  date: Date,
  desc: string,
  amount: number,
  expense: boolean
}

export function App() {
  const [transactions, setTransaction] = useState<Transaction[]>(() => {
    const transfersOnStorage = localStorage.getItem('transactions')
    return transfersOnStorage ? JSON.parse(transfersOnStorage) : [];
  })

  function onTransferCreated(desc: string, amount: string, expense: boolean) {
    const newAmount = Number(amount)
    const newTransfer = {
      id: crypto.randomUUID(),
      date: new Date(),
      desc,
      amount: newAmount,
      expense
    }

    const transferArray = [...transactions, newTransfer]
    setTransaction(transferArray)
    localStorage.setItem('transactions', JSON.stringify(transferArray))
  }

  const amountExpense = transactions
    .filter(item => item.expense)
    .map(transactionsItem => Number(transactionsItem.amount))

  const amountIncome = transactions
    .filter(item => !item.expense)
    .map(transactionsItem => Number(transactionsItem.amount))

  const totalIncome = sumArray(amountIncome)
  const totalExpense = sumArray(amountExpense)
  const resultTotal = totalIncome - totalExpense

  const totalIncomeFormated = formatNumberIntoMoneyBRL(totalIncome)
  const totalExpenseFormated = formatNumberIntoMoneyBRL(totalExpense)
  const resultTotalFormated = formatNumberIntoMoneyBRL(resultTotal);

  function onDelete(id: string) {
    const newArray = transactions.filter(transaction => transaction.id !== id)
    setTransaction(newArray)
    localStorage.setItem("transactions", JSON.stringify(newArray))
  }

  console.log('aloo mundo')

  return (
    <div className='px-5 mt-8'>
      <Header
        income={totalIncomeFormated}
        expense={totalExpenseFormated}
        total={resultTotalFormated}
      />
      <NewTransaction onTransferCreated={onTransferCreated} />
      <ListTransaction Transactions={transactions} onDelete={onDelete} />
    </div>
  )
}
