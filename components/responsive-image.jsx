import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

import { cn } from "@/lib/utils";

export function ResponsiveImage({
  ratio = 16 / 9,
  className,
  alt,
  width,
  height,
  rounded = true,
  priority = false,
  ...props
}) {
  return (
    <div
      style={{ width: width }}
      className={cn("max-w-full overflow-hidden", rounded && "rounded-md")}
    >
      <AspectRatio ratio={ratio}>
        <Image
          className={cn("object-cover", className)}
          alt={alt}
          fill
          priority={priority}
          {...props}
        />
      </AspectRatio>
    </div>
  );
}
