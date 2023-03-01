import { Icons } from "@/components/icons";

export function Card({ title, text }) {
  return (
    <div className="group py-4 px-4 bg-[#181818] rounded-md hover:bg-[#282828] transition-colors cursor-pointer">
      <div className="relative h-36 w-full bg-gradient-to-br from-violet-800 to-teal-500 rounded-md">
        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute bottom-3 right-3 h-14 w-14 rounded-full bg-green-500 z-10 shadow-md flex items-center justify-center">
          <Icons.play className="h-5 w-5 text-black" />
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <p className="font-semibold text-white">{title}</p>
        <p className="font-semibold text-stone-400 text-sm line-clamp-2">
          {text}
        </p>
      </div>
    </div>
  );
}
