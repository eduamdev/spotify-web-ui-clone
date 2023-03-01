import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image, { ImageProps } from "next/image";

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
          alt={alt}
          fill
          className={cn("object-cover", className)}
          priority={priority}
          {...props}
        />
      </AspectRatio>
    </div>
  );
}
