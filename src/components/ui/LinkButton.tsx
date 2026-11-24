import { Link } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'
import { buttonBase, buttonVariants } from './buttonStyles'
import type { ButtonVariant } from './buttonStyles'

type LinkButtonProps = LinkProps & { variant?: ButtonVariant; fullWidth?: boolean }

/** Navigation that looks like a button. Use this (not Button) whenever it changes the page. */
export function LinkButton({
    variant = 'primary',
    fullWidth = false,
    className = '',
    ...rest
}: LinkButtonProps) {
    return (
        <Link
            className={`${buttonBase} ${buttonVariants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
            {...rest}
        />
    )
}