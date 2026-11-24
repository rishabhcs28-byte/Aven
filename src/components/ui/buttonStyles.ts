export type ButtonVariant = 'primary' | 'listener' | 'secondary' | 'ghost'

export const buttonBase =
  'inline-flex min-h-12 items-center justify-center rounded-xl px-5 font-medium transition-colors'

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'bg-terracotta-strong text-white hover:bg-terracotta-strong/90',
  listener: 'bg-teal-deep text-cream hover:bg-teal-deep/90',
  secondary: 'border border-teal-deep text-teal-deep hover:bg-teal-deep/5',
  ghost: 'text-teal-deep hover:bg-teal-deep/5',
}
