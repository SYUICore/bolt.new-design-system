import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { ChevronDown } from "lucide-react";

const selectVariants = cva(
  "flex h-12 w-full items-center justify-between rounded-full border-2 bg-white px-4 py-3 text-lg [font-family:'Roc_Grotesk-Regular',Helvetica] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-[#161616] text-[#161616] focus:ring-[#161616]",
        outline:
          "border-[#FFFAF3] bg-[#FFFAF333] text-[#161616] focus:ring-[#161616]",
      },
      size: {
        sm: "h-10 px-3 py-2 text-base",
        md: "h-12 px-4 py-3 text-lg",
        lg: "h-14 px-5 py-4 text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          className={cn(
            selectVariants({ variant, size }),
            "appearance-none cursor-pointer",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#161616] pointer-events-none" />
      </div>
    );
  }
);
Select.displayName = "Select";

export interface SelectOptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {}

const SelectOption = React.forwardRef<HTMLOptionElement, SelectOptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <option
        className={cn(
          "[font-family:'Roc_Grotesk-Regular',Helvetica] text-[#161616] bg-white",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
SelectOption.displayName = "SelectOption";

export { Select, selectVariants, SelectOption };
