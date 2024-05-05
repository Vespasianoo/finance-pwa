import { TrendingUpIcon, TrendingDownIcon, CircleDollarSign } from 'lucide-react'
import { Card } from './card'

interface HeaderProps {
  income: string,
  expense: string,
  total: string
}

export function Header({ income, expense, total }: HeaderProps) {
  return (
    <header className='flex items-center flex-col gap-4 lg:justify-between lg:flex-row'>
      <Card title='Entradas totais' value={income} icon={TrendingUpIcon} color='#0AE360' />
      <Card title='Gastos totais' value={expense} icon={TrendingDownIcon} color='#EB5B64' />
      <Card title='Balanço total' value={total} icon={CircleDollarSign} />
    </header>
  )
}