import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-brand-primary text-white hover:bg-brand-dark",
                secondary: "bg-brand-secondary text-white hover:bg-brand-primary",
                outline: "border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900",
                ghost: "hover:bg-neutral-100 hover:text-neutral-900",
                link: "text-brand-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-full px-3",
                lg: "h-11 rounded-full px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, children, ...props }, ref) => {
        const classes = cn(buttonVariants({ variant, size, className }))

        if (asChild) {
            if (!React.isValidElement(children)) {
                return null
            }

            const childProps = children.props as { className?: string }
            const mergedProps = {
                ...props,
                className: cn(classes, childProps.className),
            }

            return React.cloneElement(children, mergedProps)
        }

        return (
            <button className={classes} ref={ref} {...props}>
                {children}
            </button>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
