import type { ButtonHTMLAttributes } from 'react'
import { buttonBase, buttonVariants } from './buttonStyles'
import type { ButtonVariant } from './buttonStyles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  loading?: boolean
  fullWidth?: boolean
}

export function Button({
  variant = 'primary',
  loading = false,
  fullWidth = false,
  disabled,
  className = '',
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={`${buttonBase} ${buttonVariants[variant]} disabled:cursor-not-allowed disabled:opacity-50 ${fullWidth ? 'w-full' : ''} ${className}`}
      {...rest}
    >
      {loading ? 'Please wait…' : children}
    </button>
  )
}