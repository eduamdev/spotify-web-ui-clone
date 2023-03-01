import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@/components/ui/context-menu";
import { Icons } from "@/components/icons";

export function Card({ id, title, text }) {
  const firstItemId = "s01_c01";

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="group py-4 px-4 bg-[#181818] rounded-md hover:bg-[#282828] transition-colors cursor-pointer">
            <div className="relative h-36 w-full bg-gradient-to-br from-violet-800 to-teal-500/80 rounded-md">
              {id === firstItemId && (
                <span className="absolute flex h-5 w-5 animate-bounce items-center justify-center inset-0 m-auto z-10">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                </span>
              )}
              <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute bottom-3 right-3 h-14 w-14 rounded-full bg-green-500 z-10 shadow-md flex items-center justify-center">
                <Icons.play className="h-5 w-5 text-black" />
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <p className="font-semibold text-white truncate" title={title}>
                {title}
              </p>
              <p className="font-semibold text-stone-400 text-sm line-clamp-2">
                {text}
              </p>
            </div>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Add to queue</ContextMenuItem>
          <ContextMenuItem>Go to playlist radio</ContextMenuItem>
          <ContextMenuItem>
            <div className="w-full flex flex-row items-center justify-between">
              <span>Report</span>
              <Icons.externalLink className="h-4 w-4 text-white" />
            </div>
          </ContextMenuItem>
          <ContextMenuItem>Add to Your Library</ContextMenuItem>
          <ContextMenuItem>Exclude from your taste profile</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Copy link to playlist</ContextMenuItem>
              <ContextMenuItem>Embed playlist</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>About recommendations</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Open in Desktop app</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </>
  );
}
