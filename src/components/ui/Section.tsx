import type { PropsWithChildren } from 'react'
import clsx from 'clsx'

type SectionProps = PropsWithChildren<{
  id?: string
  muted?: boolean
  className?: string
}>

export function Section({ id, muted, className, children }: SectionProps) {
  return (
    <section id={id} className={clsx('section', muted && 'section-muted', className)}>
      <div className="container-page">{children}</div>
    </section>
  )
}


