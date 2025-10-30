import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const headingVariants = cva("font-bold text-[#161616] leading-tight", {
  variants: {
    level: {
      h1: "[font-family:'Roc_Grotesk-Bold',Helvetica] text-[56px] md:text-[64px] lg:text-[72px]",
      h2: "[font-family:'Roc_Grotesk-Bold',Helvetica] text-[40px] md:text-[48px] lg:text-[56px]",
      h3: "[font-family:'Roc_Grotesk-Bold',Helvetica] text-[32px] md:text-[36px]",
      h4: "[font-family:'Roc_Grotesk-Bold',Helvetica] text-[24px] md:text-[28px]",
    },
  },
  defaultVariants: {
    level: "h2",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, as, ...props }, ref) => {
    const Comp = as || (level as "h1" | "h2" | "h3" | "h4") || "h2";
    return (
      <Comp
        className={cn(headingVariants({ level, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";

const textVariants = cva("[font-family:'Roc_Grotesk-Regular',Helvetica]", {
  variants: {
    variant: {
      body: "text-[#161616] text-[16px] md:text-[18px] leading-[24px]",
      large: "text-[#161616] text-[18px] md:text-[20px] leading-[28px]",
      small: "text-[#78716C] text-[14px] md:text-[16px] leading-[20px]",
      muted: "text-[#78716C] text-[16px] md:text-[18px] leading-[24px]",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, as = "p", ...props }, ref) => {
    const Comp = as;
    return (
      <Comp
        className={cn(textVariants({ variant, className }))}
        ref={ref as any}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";

const blockquoteVariants = cva(
  "[font-family:'Roc_Grotesk-Medium',Helvetica] border-l-4 pl-6 italic",
  {
    variants: {
      variant: {
        default: "border-[#F99830] text-[#161616] text-[18px] leading-[28px]",
        muted: "border-[#78716C] text-[#78716C] text-[16px] leading-[24px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BlockquoteProps
  extends React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
    VariantProps<typeof blockquoteVariants> {}

const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <blockquote
        className={cn(blockquoteVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Blockquote.displayName = "Blockquote";

export { Heading, headingVariants, Text, textVariants, Blockquote, blockquoteVariants };
