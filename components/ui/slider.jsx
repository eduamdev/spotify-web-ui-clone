"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "group relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-slate-200 dark:bg-stone-600">
      <SliderPrimitive.Range className="absolute h-full bg-slate-900  dark:bg-white group-hover:bg-green-500" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="hidden group-hover:block h-3 w-3 rounded-full border-2 border-slate-900 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-100 dark:bg-white dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
