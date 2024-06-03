import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: 'filled' | 'outlined',
    className?: string
}

const Button = ({ children, variant = 'filled', className, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className={`bg-primary-blue text-white rounded-[40px] w-[157px] max-h-12 h-12  duration-300 border-primary-blue border active:scale-[0.97] ${variant === 'outlined' ? 'hover:bg-opacity-50 bg-opacity-20' : "hover:bg-secondary-blue"} ${className}`}>
            {children}
        </button>
    )
}

export default Button