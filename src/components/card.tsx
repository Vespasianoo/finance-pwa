import { ElementType } from "react";

interface CardProps {
  value: string,
  title: string,
  icon: ElementType,
  color?: string
}

export function Card({title, value, icon: Icon, color = '#fff'}: CardProps) {
  return (
    <div className='w-80 h-28 border-2 border-fn_dark_800 rounded flex items-center gap-4 p-6'>
      <Icon className='text-slate-50' color={color} size={40} />
      <div className='flex flex-col'>
        <span>
          {title}
        </span>
        <span className='font-bold text-3xl'>
          {value}
        </span>
      </div>
    </div>
  )
}