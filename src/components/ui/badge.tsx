import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#161616]",
  {
    variants: {
      variant: {
        default:
          "bg-[#F99830] text-[#161616] border-2 border-[#161616] shadow-[2px_2px_0px_#161616]",
        secondary:
          "bg-[#FFFAF3] text-[#161616] border-2 border-[#161616]",
        outline:
          "bg-transparent text-[#161616] border-2 border-[#161616]",
        success:
          "bg-[#4ADE80] text-[#161616] border-2 border-[#161616]",
        warning:
          "bg-[#FBBF24] text-[#161616] border-2 border-[#161616]",
        error:
          "bg-[#EF4444] text-white border-2 border-[#161616]",
      },
      size: {
        sm: "px-2 py-1 text-xs rounded-lg",
        md: "px-3 py-1.5 text-sm rounded-xl",
        lg: "px-4 py-2 text-base rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(badgeVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
