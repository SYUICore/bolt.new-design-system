import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { ChevronDown } from "lucide-react";

const accordionVariants = cva("w-full", {
  variants: {
    variant: {
      default: "space-y-4",
      compact: "space-y-2",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface AccordionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof accordionVariants> {
  type?: "single" | "multiple";
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        className={cn(accordionVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Accordion.displayName = "Accordion";

const accordionItemVariants = cva(
  "border-2 border-[#161616] overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-white rounded-[24px]",
        minimal: "bg-transparent rounded-lg border-b-2 border-t-0 border-x-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AccordionItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof accordionItemVariants> {
  value: string;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        className={cn(accordionItemVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
AccordionItem.displayName = "AccordionItem";

export interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(
  (
    { className, children, icon, iconPosition = "right", ...props },
    ref
  ) => {
    return (
      <button
        className={cn(
          "w-full flex items-center justify-between p-6 text-left [font-family:'Roc_Grotesk-Medium',Helvetica] font-medium text-[#161616] text-[18px] md:text-[20px] leading-[26px] hover:bg-[#FFF8F0] transition-colors",
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="pr-4">{children}</span>
        <div className="flex-shrink-0 transition-transform duration-300">
          {icon || <ChevronDown className="w-6 h-6 text-[#161616]" />}
        </div>
      </button>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";

export interface AccordionContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
}

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, isOpen = false, ...props }, ref) => {
  return (
    <div
      className={cn(
        "transition-all duration-300 ease-in-out",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        className
      )}
      ref={ref}
    >
      <div className="px-6 pb-6">
        <div
          className="[font-family:'Roc_Grotesk-Regular',Helvetica] font-normal text-[#161616] text-[16px] md:text-[18px] leading-[24px]"
          {...props}
        />
      </div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export {
  Accordion,
  accordionVariants,
  AccordionItem,
  accordionItemVariants,
  AccordionTrigger,
  AccordionContent,
};
