import React from "react";

export function DrawerMenu({
  changeScroll
}) {
  return <nav className="drawer-menu">
        <nav>
          <ul class="flex h-10 w-full top-0">
            <li class="w-3/5 pt-2 text-blue-950">AMERICAN EAGLE</li>
            <li class="w-2/5 pt-2 bg-neutral-200">aerie</li>
            </ul>
            </nav>
              <div className='flex justify-end w-full mt-8 h-[18px]'>
                <button onClick={changeScroll} className='w-[18px] h-[18px] mr-6'>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 5L19 19M5 19L19 5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                
                </button>
              </div>
              <ul className='navigation flex w-full flex-col just'>
                <li className='ml-10 text-left'>
                <span className='w-full text-3xl font-semibold'>Shop AE</span>
                </li>
                <li className='ml-10 mt-6 text-left'>
                  Explore AE
                </li>
                <li className='ml-10 text-left'>Women</li>
                <li className='ml-10 text-left'>Men</li>
                <li className='ml-10 text-left'>Jeans</li>
                <li className='ml-10 text-left'>Shoes & Accessories</li>
              </ul>
            </nav>;
}
  