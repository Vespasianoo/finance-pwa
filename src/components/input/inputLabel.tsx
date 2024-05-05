import { ComponentProps, ReactNode } from "react"

type LabelProps = ComponentProps<'label'>  & {
  children?: ReactNode,
  label: string
}

export function InputLabel({ label, ...props }: LabelProps) {
  return ( 
    <label {...props}>{label}</label>
  )
}