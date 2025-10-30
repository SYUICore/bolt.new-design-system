import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Check } from "lucide-react";

const checkboxVariants = cva(
  "peer h-5 w-5 shrink-0 rounded border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#161616] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-[#161616] data-[state=checked]:bg-[#F99830] data-[state=checked]:border-[#161616]",
        primary:
          "border-[#161616] data-[state=checked]:bg-[#161616] data-[state=checked]:text-white",
        secondary:
          "border-[#161616] data-[state=checked]:bg-[#F9A858] data-[state=checked]:border-[#161616]",
      },
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  description?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { className, variant, size, label, description, id, ...props },
    ref
  ) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="flex items-start gap-3">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            id={checkboxId}
            className={cn(
              checkboxVariants({ variant, size }),
              "appearance-none cursor-pointer",
              className
            )}
            ref={ref}
            {...props}
          />
          <Check
            className={cn(
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 transition-opacity",
              size === "sm" && "w-3 h-3",
              size === "md" && "w-4 h-4",
              size === "lg" && "w-5 h-5"
            )}
            strokeWidth={3}
          />
          <style jsx>{`
            input:checked + svg {
              opacity: 1;
            }
          `}</style>
        </div>
        {(label || description) && (
          <div className="flex flex-col gap-1">
            {label && (
              <label
                htmlFor={checkboxId}
                className="[font-family:'Roc_Grotesk-Medium',Helvetica] font-medium text-[#161616] text-sm cursor-pointer"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="[font-family:'Roc_Grotesk-Regular',Helvetica] text-[#78716C] text-xs">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };
