import { ComponentProps, ReactNode } from "react"

type InputThisProps = ComponentProps<'input'>  & {
  children?: ReactNode
}

export function InputThis({ children, ...props}: InputThisProps) {
  return (
    <div className='flex items-center gap-2 bg-fn_dark_800/25 px-4 py-2 border-2 border-fn_dark_800 rounded h-12 outline-1 focus-within:outline '>
    {/* <div className='flex items-center gap-2 bg-fn_dark_800/25 px-4 py-2 border-2 border-fn_dark_800 rounded h-12 focus-within:border-white/55'> */}
        {children}
        <input {...props} className='bg-transparent w-full outline-none'/>
    </div>
  )
}

