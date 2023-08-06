import React from "react";
export function Logo({
  top
}) {
  return <div id={`${top ? "ae-top" : ""}`} className="flex h-[70px] w-full justify-center">
          <a className='text-[22px] pt-4 text-blue-950' href="#">
          AMERICAN EAGLE
          </a>
        </div>;
}
  