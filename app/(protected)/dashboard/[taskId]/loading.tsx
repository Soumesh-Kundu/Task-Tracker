import { Ring } from "ldrs/react";
import "ldrs/react/Ring.css";

export default function loading() {
  return (
    <div className="space-y-4 max-w-6xl w-full h-[calc(100dvh-80px)] scrollbar px-2 lg:px-0 grid place-items-center">
      <div className="w-[calc(100%-20px)] lg:w-1/3 rounded-xl  p-4 shadow-xl pb-0">
        <div className="flex p-10 scrollbar  flex-col items-center w-full  gap-10 overflow-y-auto  text-gray-500 justify-center">
          <Ring stroke={2} size={40} color=" rgb(107, 114, 128)"></Ring>
          <span className="font-medium ">Just a min...</span>
        </div>
      </div>
    </div>
  );
}
