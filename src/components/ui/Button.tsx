import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'listener' | 'secondary' | 'ghost'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  loading?: boolean
  fullWidth?: boolean
}

const variants: Record<Variant, string> = {
  primary: 'bg-terracotta text-white hover:bg-terracotta/90',
  listener: 'bg-teal-deep text-cream hover:bg-teal-deep/90',
  secondary: 'border border-teal-deep text-teal-deep hover:bg-teal-deep/5',
  ghost: 'text-teal-deep hover:bg-teal-deep/5',
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
      className={`inline-flex min-h-12 items-center justify-center rounded-xl px-5 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...rest}
    >
      {loading ? 'Please wait…' : children}
    </button>
  )
}
