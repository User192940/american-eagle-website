import React from "react";
import { Link } from "react-router-dom";
export function Logo({
  top
}) {
  return <div id={`${top ? "ae-top" : ""}`} className="flex h-[70px] w-full justify-center">
          <Link to="/home" className='text-[22px] pt-4 text-blue-950'>
          AMERICAN EAGLE
          </Link>
        </div>;
}
  