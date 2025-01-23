import {ButtonHTMLAttributes, ReactNode} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    textOnly: boolean,
    className?: string,
    children: ReactNode
}

export const Button = ({children, textOnly, className, ...rest}: ButtonProps): ReactNode => {

    return <button
        className={`${textOnly ? 'text-button' : 'button'} ${className || ''}`}
        {...rest}
    >
        {children}
    </button>
}