import { ReactNode } from "react"

interface InputRootProps {
  children: ReactNode
}

export function InputRoot({ children }:InputRootProps) {
  return (
    <div className='flex flex-col gap-1 w-72'>
      {children}
    </div>
  )
}