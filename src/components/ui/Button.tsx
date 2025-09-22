import { ButtonHTMLAttributes, AnchorHTMLAttributes, PropsWithChildren } from 'react'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'outline'

type CommonProps = {
  variant?: ButtonVariant
  className?: string
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export function Button({ variant = 'primary', className, children, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <button {...props} className={clsx('btn', resolveVariant(variant), className)}>
      {children}
    </button>
  )
}

export function ButtonLink({ variant = 'primary', className, children, ...props }: PropsWithChildren<LinkProps>) {
  return (
    <a {...props} className={clsx('btn', resolveVariant(variant), className)}>
      {children}
    </a>
  )
}

function resolveVariant(variant: ButtonVariant) {
  if (variant === 'secondary') return 'btn-secondary'
  if (variant === 'outline') return 'btn-outline'
  return 'btn-primary'
}


