import type { PropsWithChildren } from 'react'
import clsx from 'clsx'

type CardProps = PropsWithChildren<{
  hover?: boolean
  className?: string
}>

export function Card({ hover, className, children }: CardProps) {
  return <div className={clsx(hover ? 'card-hover' : 'card', className)}>{children}</div>
}


