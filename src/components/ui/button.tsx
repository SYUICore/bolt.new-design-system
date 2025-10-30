import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#161616] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[#161616] text-[#FFFAF3] border-2 border-[#F99830] shadow-[2px_2px_0px_#F99830] hover:shadow-[3px_3px_0px_#F99830] hover:translate-x-[-1px] hover:translate-y-[-1px] active:shadow-[1px_1px_0px_#F99830] active:translate-x-[1px] active:translate-y-[1px]",
        secondary:
          "bg-[#F9A858] text-[#161616] border-2 border-[#161616] shadow-none hover:bg-[#FF9D42] hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] active:translate-y-[0px] active:shadow-none",
        outline:
          "bg-transparent text-[#161616] border-2 border-[#161616] shadow-none hover:bg-[#161616] hover:text-[#FFFAF3] hover:shadow-[2px_2px_0px_#F99830] active:shadow-[1px_1px_0px_#F99830]",
        ghost:
          "bg-transparent text-[#161616] border-2 border-transparent hover:border-[#161616] hover:shadow-none",
        destructive:
          "bg-[#EF4444] text-white border-2 border-[#161616] shadow-[2px_2px_0px_#161616] hover:shadow-[3px_3px_0px_#161616] hover:translate-x-[-1px] hover:translate-y-[-1px] active:shadow-[1px_1px_0px_#161616] active:translate-x-[1px] active:translate-y-[1px]",
      },
      size: {
        sm: "h-10 px-6 py-2 text-base rounded-full",
        md: "h-12 px-8 py-3 text-lg rounded-full",
        lg: "h-14 px-10 py-4 text-xl rounded-full",
        icon: "h-12 w-12 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
