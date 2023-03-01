import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Slider } from "@/components/ui/slider";

export function MediaPlayer() {
  return (
    <div className="min-w-[760px] w-full flex flex-1 flex-row items-center justify-between bg-[#181818] border-t border-stone-600/30 px-4 overflow-hidden">
      <div className="w-[30%] flex flex-row items-center justify-start gap-x-3">
        <div className="group/coverArt relative h-[56px] w-[56px] shrink-0 bg-gradient-to-br from-violet-800 to-teal-500 rounded-sm">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="hidden group-hover/coverArt:block absolute right-1 top-1 h-7 w-7 p-3 rounded-full dark:bg-black/80">
                  <Icons.chevronUp className="absolute inset-0 m-auto h-4 w-4 text-white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Expand</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex flex-col items-start justify-center gap-y-[3px]">
          <p className="text-white max-w-[100px] truncate lg:max-w-none font-semibold text-[13px] lg:text-sm">
            Never Gonna Give You Up
          </p>
          <p className="text-xs text-stone-400">Rick Astley</p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm">
                <Icons.heart className="h-4 w-4 text-green-500" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Remove from your Library</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="w-[40%] flex flex-col items-center justify-center gap-y-2 max-w-[722px]">
        <div className="flex items-center justify-center gap-x-2 lg:gap-x-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Icons.shuffle className="h-4 w-4 text-stone-200"></Icons.shuffle>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Enable shuffle</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Icons.previous className="h-4 w-4 text-stone-200"></Icons.previous>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Previous</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="mx-2 bg-white h-8 w-8 p-1 dark:hover:bg-white rounded-full">
                  <Icons.play className="h-4 w-4 text-black"></Icons.play>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Play</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Icons.next className="h-4 w-4 text-stone-200"></Icons.next>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Next</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Icons.repeat className="h-4 w-4 text-stone-200"></Icons.repeat>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Enable repeat</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="w-full flex flex-row items-center justify-center gap-x-2">
          <span className="text-xs tracking-wider font-semibold text-stone-400">
            0:00
          </span>
          <div className="max-w-[200px] lg:max-w-md w-full">
            <Slider defaultValue={[0]} max={100} step={1} />
          </div>
          <span className="text-xs tracking-wider font-semibold text-stone-400">
            3:33
          </span>
        </div>
      </div>
      <div className="w-[30%] flex flex-row items-center justify-end">
        <div className="flex flex-row items-center justify-center gap-x-0 lg:gap-x-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="sm" variant="ghost">
                  <Icons.lyrics className="h-4 w-4 text-stone-200"></Icons.lyrics>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Lyrics</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="sm" variant="ghost">
                  <Icons.queue className="h-4 w-4 text-stone-200"></Icons.queue>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Queue</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="sm" variant="ghost">
                  <Icons.devices className="h-4 w-4 text-stone-200"></Icons.devices>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Connect to a device</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="sm" variant="ghost">
                  <Icons.volume className="h-4 w-4 text-stone-200"></Icons.volume>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Mute</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="w-16 lg:w-24">
            <Slider defaultValue={[70]} max={100} step={1} />
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="sm" variant="ghost">
                  <Icons.fullScreen className="h-4 w-4 text-stone-200"></Icons.fullScreen>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Full screen</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
