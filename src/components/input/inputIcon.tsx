import { ElementType } from "react"

interface IconProps {
  icon: ElementType
}

export function InputIcon({ icon: Icon }: IconProps) {
  return (
    <Icon />
  )
}