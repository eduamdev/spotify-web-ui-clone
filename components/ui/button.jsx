import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-stone-800 hover:text-stone-100 disabled:opacity-50 focus:ring-stone-400 disabled:pointer-events-none focus:ring-offset-stone-900 data-[state=open]:bg-stone-800",
  {
    variants: {
      variant: {
        default: "bg-black/80 text-white",
        ghost:
          "hover:bg-stone-800 text-stone-100 hover:text-stone-100 data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline text-stone-100 hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
