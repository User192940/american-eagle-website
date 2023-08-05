import './App.css';
import React, {useEffect, useState} from "react";

function App() {
  const [top, setTop] = useState(false);
  const [scroll, setScroll] = useState(true);
  useEffect(() => {
    if(typeof window !== "undefined"){
      window.addEventListener("scroll", () => {
        setTop(window.scrollY > 40)
    })
    }
  }, [])
  return (
    <div className="App">
      <nav>
        <ul className="flex h-10 w-full">
          <li className="w-3/5 pt-2 text-blue-950">
            AMERICAN EAGLE
          </li>
          <li className="w-2/5 pt-2 bg-neutral-200">
            aerie
          </li>
        </ul>
      </nav>
      <nav id={`${
          top ? "top" : "normal"
        }`} className="h-12 w-full bg-white border-b-black z-10">
        <ul className="flex flex-row justify-around list-none">
          <li className="md:h-[30] md:w-[27px] md:top-[1px] h-10 w-8 pt-2">
            <div className='relative'>
            <input type='checkbox' className='hidden checked' id='checked'/>
            <label className='h-10 w-8 block fixed cursor-pointer' for="checked">
            <svg viewBox="0 0 42 36" xmlns="http://www.w3.org/2000/svg" className="md:h-[30] md:w-[27px] md:top-[1px] h-[24px] w-[24px] pt-1 content-center "><g fill-rule="nonzero" fill="#000"><path d="M39.673 3.208H1.89C.846 3.208 0 2.595 0 1.84 0 1.085.846.473 1.89.473h37.783c1.044 0 1.89.612 1.89 1.367s-.846 1.368-1.89 1.368zM39.673 19.47H1.89C.846 19.47 0 18.858 0 18.103s.846-1.367 1.89-1.367h37.783c1.044 0 1.89.612 1.89 1.367s-.846 1.367-1.89 1.367zM39.673 35.733H1.89C.846 35.733 0 35.121 0 34.366s.846-1.367 1.89-1.367h37.783c1.044 0 1.89.612 1.89 1.367s-.846 1.367-1.89 1.367z"></path></g></svg>
            </label>
            <nav className="drawer-menu">
              <div className='flex justify-end w-full mt-2 h-[18px]'>
                <button onClick={changeScroll} className='w-[18px] h-[18px]'>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 5L19 19M5 19L19 5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                
                </button>
              </div>
              <span>Shop AE</span>
              <ul>
                <li>
                  Explore AE
                </li>
                <li>Women</li>
                <li>Men</li>
                <li>Jeans</li>
                <li>Shoes & Accessories</li>
              </ul>
            </nav>
            </div>
          </li>
          <li className="md:h-[30] md:w-[27px] md:top-[1px] h-[28px] pt-2 hover:cursor-pointer">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="md:h-[30] md:w-[27px] md:top-[1px] h-[28px] content-center"><path fill="inherit" d="M22.535 22.647l-.394.908-.707-.309-.619-.619-.883-.972L18.12 19.8l-.664-1.562.865-.725 1.566.961 1.15 1.15 2.28 1.433.106 1.041-.888.55"/><path d="M23.316 21.056l-3.181-3.182a1.682 1.682 0 00-1.814-.362s0-.028-.028-.028l-1.535-1.535c3.349-3.768 3.21-9.544-.39-13.144-3.74-3.74-9.824-3.74-13.563 0-3.74 3.74-3.74 9.823 0 13.562 1.87 1.87 4.325 2.791 6.781 2.791 2.288 0 4.549-.81 6.363-2.428l1.507 1.507a1.658 1.658 0 00.279 2.01l3.181 3.18c.335.336.754.503 1.172.503.419 0 .865-.167 1.172-.502.726-.67.726-1.73.056-2.372zM3.642 15.558c-3.293-3.293-3.293-8.651 0-11.972a8.458 8.458 0 015.972-2.484 8.41 8.41 0 015.972 2.484c3.321 3.321 3.321 8.68.028 11.972-3.293 3.321-8.68 3.321-11.972 0zm18.893 7.089a.54.54 0 01-.782 0l-3.18-3.182a.54.54 0 010-.781.551.551 0 01.39-.168c.14 0 .279.056.39.168l3.182 3.153a.573.573 0 010 .81z" fill="currentColor" fill-rule="nonzero"/></svg>
          </li>
          <li className="md:h-[30] md:w-[27px] md:top-[1px] h-[28px] pt-2 hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 31" className="md:h-[30] md:w-[27px] md:top-[1px] h-[28px] content-center"><path fill="currentColor" d="M12.1 27.368c.2.2.2.5 0 .6-.1.1-.2.1-.3.1-.1 0-.2 0-.3-.1l-3-3c-.2-.2-.2-.5 0-.6.2-.2.5-.2.6 0l3 3zm-4.1-4.1c-.2-.2-.5-.2-.6 0-.2.2-.2.5 0 .6l.2.2c.1.1.2.2.3.2.1 0 .2 0 .3-.1.2-.2.2-.5 0-.6l-.2-.3zm-.9-.9c-.2-.2-.5-.2-.6 0-.1.2-.2.5 0 .6.1.1.2.1.3.1s.2 0 .3-.1c.2-.1.2-.4 0-.6zm23.8-18.7c-.8 1.3-2 2.7-3.5 4l-1.8 1.5.2.1c.1.1.1.2.1.3l.6 6.3c0 .1 0 .2-.1.4L12 30.568c-.1.1-.2.1-.3.1-.1 0-.2 0-.3-.1L.1 19.268c-.2-.2-.2-.5 0-.6l14.4-14.3c.1-.1.2-.1.4-.1l6.3.6c.1 0 .2.1.3.1l3.5 3.5c.6-.5 1.2-.9 1.8-1.5 1.4-1.3 2.6-2.7 3.3-3.8.8-1.3.8-1.9.6-2-.5-.3-3.4 1.4-7.1 4.7-.2.2-.5.1-.6 0s-.1-.5 0-.6c1.2-1 6.9-6.2 8.3-4.6.6.5.4 1.6-.4 3zm-5.8 6.2l-.2-.2c-.6.5-1.3.8-1.9 1.1-.1.1-.3.1-.4.2 0 .6-.3 1.2-.7 1.6-.5.5-1.2.8-1.9.8s-1.3-.2-1.9-.8c-.5-.5-.8-1.2-.8-1.9s.3-1.4.8-1.9c1-1 2.7-1 3.7 0 .3.3.6.7.7 1.2 0 0 .1 0 .1-.1.5-.2 1.1-.6 1.6-.9l-3.4-3.4-5.8-.5-13.9 13.9 10.6 10.6 13.9-13.9-.5-5.8zm-4.6.1c0 .2 0 .4.1.5.1.1.4.2 1.1 0-.1-.3-.2-.6-.5-.9-.4-.4-.8-.5-1.2-.5s-.9.2-1.2.5c-.3.3-.5.8-.5 1.2s.2.9.5 1.2c.7.7 1.8.7 2.5 0 .2-.2.3-.4.4-.7-.2.1-.5.1-.7.1-.4 0-.8-.1-1-.4-.2-.3-.4-.7-.3-1.2 0-.2.3-.4.5-.3.2 0 .3.2.3.5zm-4.1 4.7c.6.7.7 1.6.4 2.4-.1.2-.4.3-.6.1l-.1-.1c-.2-.2-.2-.3-.1-.5.1-.4 0-.8-.2-1.2l-2.1 2.1c.7 1.4 1 2.6 0 3.6s-2.5.9-3.6 0l-.2.2c-.2.2-.4.2-.5 0-.1-.1-.1-.3 0-.5l.2-.2c-.7-.9-.8-2.1-.4-3 .1-.2.4-.2.6 0l.1.1c.2.2.2.3.1.6-.2.6-.1 1.3.2 1.8l2.4-2.4c-.7-1.3-.8-2.3.1-3.2s2.1-.9 3.2-.1l.2-.2c.2-.2.4-.2.5 0 .1.1.1.3 0 .5h-.2zm-3.4 3.5l-2.3 2.3c.7.6 1.6.6 2.3 0 .5-.6.5-1.3 0-2.3zm2.3-3.3c-.7-.5-1.4-.3-1.9.1-.5.5-.4 1 0 1.8l1.9-1.9z"></path></svg>
          </li>
          <li className="md:h-[30] md:w-[27px] md:top-[1px] h-[28px] pt-2 hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" className="md:h-[30] md:w-[27px] md:top-[1px] h-[28px]"><path fill="inherit" d="M4.2 19.6l.144-1.175.47-.47.724-.797.76-.362.725-.362.905-.29.651-.361h4.959l1.919.072.833.109 1.339.543s.543.362.688.434c.145.073.869.76.869.76l.76.797.154 1.102-.661 1.178-.724.724-1.267.616-1.267.47-1.665.435L12.1 23l-2.181.131-1.557-.434-1.303-.507-1.52-.724-.978-.833L4.2 19.6M8.125 7.5l.313-.969.437-.875.563-.468.78-.532.595-.312.843-.188 1.188-.031.75.25.656.344.594.656.687.625.25.688.313.562.125.781.062.969v.906l-.375.875-.406.906-.656.844-.625.469-.906.5-.97.063h-1.53l-.532-.376-.781-.468-.5-.75-.469-.719-.281-.75-.313-.719V8.97l.032-.75z"></path><path fill="currentColor" d="M12.1 14.2c2.6 0 4.7-2.4 4.7-5.3s-2.1-5.3-4.7-5.3S7.4 6 7.4 8.9s2.1 5.3 4.7 5.3zm0-9.6c2.1 0 3.7 1.9 3.7 4.3s-1.7 4.3-3.7 4.3c-2.1 0-3.7-1.9-3.7-4.3s1.6-4.3 3.7-4.3z"></path><path fill="currentColor" d="M12.1 0C5.5 0 .1 5.4.1 12c0 3.1 1.2 6 3.2 8.1 0 .1.1.1.1.1 2.2 2.3 5.3 3.8 8.7 3.8 6.6 0 12-5.4 12-12s-5.4-12-12-12zm0 1c6.1 0 11 4.9 11 11 0 2.6-.9 4.9-2.4 6.8-1.2-2.1-3.4-3.4-5.8-3.4H9.2c-2.4 0-4.6 1.3-5.8 3.3C2 16.9 1.1 14.6 1.1 12c0-6.1 4.9-11 11-11zm0 22c-3.1 0-5.9-1.3-7.9-3.4 1-1.9 2.9-3.2 5.1-3.2H15c2.2 0 4.1 1.2 5.1 3.2-2.1 2.1-4.9 3.4-8 3.4z"></path></svg>
          </li>
          <li className="md:h-[30] md:w-[27px] md:top-[1px] h-[28px] pt-2 hover:cursor-pointer">
          <svg viewBox="0 0 25 23" xmlns="http://www.w3.org/2000/svg" className="md:h-[30] md:w-[27px] md:top-[1px] h-[28px]"><path d="M23.508 6.917a5.876 5.876 0 00-5.879-5.878c-2.359 0-4.37 1.353-5.298 3.364l-.039-.038-.038.038c-.078-.077-.116-.116-.116-.193A5.927 5.927 0 006.878 1 5.876 5.876 0 001 6.878c0 1.508.58 2.9 1.508 3.945l9.746 11.447 9.745-11.447c.928-1.044 1.509-2.398 1.509-3.906z"></path></svg>
          </li>
          <li className="md:h-[30] md:w-[27px] md:top-[1px] h-[28px] pt-2 hover:cursor-pointer">
          <svg viewBox="0 0 21 26" xmlns="http://www.w3.org/2000/svg" className="md:h-[30] md:w-[27px] md:top-[1px] h-[28px]"><path fill="inherit" d="M.957 7.02l3.24-.486 5.79.135 9.778.351.378 2.12-1.185 13.44-.677 1.355-1.083.948-1.591.508-10.597.067-1.523-.575-1.253-1.117-.474-1.49-.44-4.232L.372 7.651z"></path><path d="M20.475 6.318a.777.777 0 00-.556-.244h-4.54v-1.13C15.38 2.199 13.125 0 10.346 0c-2.78 0-5.003 2.228-5.003 4.945v1.13H.773a.727.727 0 00-.557.243c-.154.153-.216.367-.216.58l1.143 14.926c.154 2.259 2.1 4.03 4.385 4.03h9.512c2.285 0 4.2-1.771 4.385-4l1.266-14.986a.832.832 0 00-.216-.55zM6.238 4.945c0-2.228 1.822-4.03 4.108-4.03 2.254 0 4.076 1.802 4.076 4.03v1.13H6.238v-1.13zm12.26 16.88c-.154 1.77-1.667 3.143-3.458 3.143H5.528c-1.822 0-3.335-1.404-3.459-3.174L.957 7.02h18.808l-1.266 14.804z" fill="currentColor" fill-rule="nonzero"></path></svg>
          </li>
        </ul>
        </nav>
        <div id={`${
          top ? "ae-top" : ""
        }`} className="flex h-[70px] w-full justify-center">
          <a className='text-[22px] pt-4 text-blue-950' href="#">
          AMERICAN EAGLE
          </a>
        </div>
        <div className="h-[80px] w-full bg-cyan-800">
          <div className="h-[70px] pt-[13px] pb-[22px] mx-5 text-white text-sm">
            <div>Everything must go!</div>
            <div>Buy 1 get 1 sale ends August 10th!</div>
          </div>
        </div>
        <div className="flex w-full h-auto pb-10">
          <img alt="women holding hands" src="https://s7d2.scene7.com/is/image/aeo/20230802-aehp-extra-25-sm?scl=1&qlt=60&fmt=webp"></img>
          <div className="absolute w-full items-center mt-8">
            <div className='text-white text-[32px] font-bold mb-2'>
            25% Off All Jeans & Cargo Pants
            </div>
            <div className='flex w-[70%] justify-between mx-auto mt-4'>
              <button className='flex justify-around p-2 w-40 bg-white rounded-3xl text-sm'>
                <span className='w-4/5'>
                Shop Women
                </span>
                <span className='w-4 h-5 items-center'>
                <svg viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg" className='mt-[2px]'><g fill="grey" fill-rule="nonzero"><path d="M14.464 26.536a1.363 1.363 0 01-2.328-.964V2.428a1.363 1.363 0 112.728 0V25.57c0 .377-.153.718-.4.965z"></path><path d="M26.036 14.964a1.36 1.36 0 01-.965.4H1.93a1.363 1.363 0 110-2.728H25.07a1.363 1.363 0 01.965 2.328z"></path></g></svg>
                </span>
              </button>
              <button className='flex justify-around p-2 w-40 bg-white rounded-3xl text-sm'>
                <span className='w-4/5'>
                  Shop Men
                </span>
                <span className='w-4 h-5 items-center'>
                <svg viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg" className='mt-[2px]'><g fill="grey" fill-rule="nonzero"><path d="M14.464 26.536a1.363 1.363 0 01-2.328-.964V2.428a1.363 1.363 0 112.728 0V25.57c0 .377-.153.718-.4.965z"></path><path d="M26.036 14.964a1.36 1.36 0 01-.965.4H1.93a1.363 1.363 0 110-2.728H25.07a1.363 1.363 0 01.965 2.328z"></path></g></svg>
                </span>
              </button>
            </div>
            <div className='absolute mt-8 w-full items-center'>
              <span className='text-white text-xs'>
                Exclusions apply. &nbsp;  
                <a href="#" className='underline'>
                 Details
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full h-auto pb-10">
          <img alt="women gallery" src="https://s7d2.scene7.com/is/image/aeo/20230727-aehp-herocaro-itfits-sm?scl=1&qlt=60&fmt=webp"></img>
          <div className="absolute w-full items-center mt-[380px]">
            <div className='text-white text-[32px] font-bold mb-2'>
            <p className='text-[18px]'>
            THE 
            </p> 
            <p className='text-5xl'>
            AE IT FITS 
            </p>
            <p className='text-[18px] mt-2'>
            FEAT. THE ZIEGLER SISTERS
            </p>
            </div>
            <div className='flex w-[70%] justify-center mx-auto mt-4'>
              <button className='flex p-2 w-40 bg-white rounded-3xl text-sm'>
                <span className='w-4/5'>
                Shop Now
                </span>
                <span className='w-4 h-5 items-center'>
                <svg viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg" className='mt-[2px]'><g fill="grey" fill-rule="nonzero"><path d="M14.464 26.536a1.363 1.363 0 01-2.328-.964V2.428a1.363 1.363 0 112.728 0V25.57c0 .377-.153.718-.4.965z"></path><path d="M26.036 14.964a1.36 1.36 0 01-.965.4H1.93a1.363 1.363 0 110-2.728H25.07a1.363 1.363 0 01.965 2.328z"></path></g></svg>
                </span>
              </button>
            </div>
            <div className='flex w-full mt-4'>
              <span className='text-white text-lg mx-5'>
              Including your fave baggy, straight & kick bootcut jeans.
              </span>
            </div>
          </div>
          <img className="hidden" alt="men gallery" src="https://s7d2.scene7.com/is/image/aeo/20230727-aehp-herocaro-airflex-sm?scl=1&qlt=60&fmt=webp"></img>
          <img className="hidden" alt="jeans spelling american eagle logo" src="https://s7d2.scene7.com/is/image/aeo/20230727-aehp-herocaro-aejeans-png-sm?fmt=png-alpha&scl=1"></img>
        </div>
        <div className='w-full h-16 footer pt-4'>
          <div className='w-[95%] ml-[2.5%]'>
            <ul className='flex flex-row justify-around'>
            <li className='w-6 h-6'>
            <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999X" viewBox="0 0 310 310" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_834_"> <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"></path> </g> </g></svg>
            </li>
            <li className='w-6 h-6'>
            <svg viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>twitter [#154]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]"> </path> </g> </g> </g> </g></svg>
            </li>
            <li className='w-6 h-6'>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"></path> </g></svg>
            </li >
            <li className='w-6 h-6'>
              <svg viewBox="0 -0.5 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.8097 14.2306C10.4323 14.06 9.98797 14.2276 9.81733 14.605C9.64668 14.9824 9.81431 15.4267 10.1917 15.5974L10.8097 14.2306ZM12.5007 15.344L12.5015 16.0941L12.5136 16.0939L12.5007 15.344ZM17.5007 10.172L16.7508 10.1595C16.7507 10.1678 16.7507 10.1762 16.7508 10.1845L17.5007 10.172ZM12.5007 5L12.5136 4.25011C12.505 4.24996 12.4964 4.24996 12.4879 4.25011L12.5007 5ZM7.50072 10.172L8.25072 10.1741C8.25073 10.1692 8.2507 10.1644 8.25062 10.1595L7.50072 10.172ZM7.68386 13.4079C7.90528 13.758 8.36855 13.8623 8.71862 13.6409C9.06869 13.4194 9.17299 12.9562 8.95158 12.6061L7.68386 13.4079ZM11.2292 15.0923C11.3277 14.69 11.0814 14.284 10.679 14.1855C10.2767 14.087 9.87069 14.3334 9.77222 14.7357L11.2292 15.0923ZM8.77222 18.8217C8.67375 19.224 8.92009 19.63 9.32243 19.7285C9.72477 19.827 10.1308 19.5806 10.2292 19.1783L8.77222 18.8217ZM9.76171 14.7861C9.69105 15.1942 9.96463 15.5823 10.3728 15.653C10.7809 15.7237 11.1691 15.4501 11.2397 15.0419L9.76171 14.7861ZM12.2397 9.26594C12.3104 8.8578 12.0368 8.46966 11.6287 8.39899C11.2205 8.32833 10.8324 8.60191 10.7617 9.01006L12.2397 9.26594ZM10.1917 15.5974C10.9175 15.9255 11.705 16.0949 12.5015 16.094L12.4999 14.594C11.9171 14.5946 11.3408 14.4707 10.8097 14.2306L10.1917 15.5974ZM12.5136 16.0939C15.7362 16.0386 18.3043 13.3822 18.2506 10.1595L16.7508 10.1845C16.7907 12.5791 14.8825 14.553 12.4879 14.5941L12.5136 16.0939ZM18.2506 10.1845C18.3043 6.96184 15.7362 4.30541 12.5136 4.25011L12.4879 5.74989C14.8825 5.79098 16.7907 7.76488 16.7508 10.1595L18.2506 10.1845ZM12.4879 4.25011C9.26523 4.30541 6.69714 6.96184 6.75082 10.1845L8.25062 10.1595C8.21072 7.76488 10.119 5.79098 12.5136 5.74989L12.4879 4.25011ZM6.75072 10.1699C6.74751 11.316 7.07122 12.4393 7.68386 13.4079L8.95158 12.6061C8.49143 11.8786 8.24831 11.0349 8.25072 10.1741L6.75072 10.1699ZM9.77222 14.7357L8.77222 18.8217L10.2292 19.1783L11.2292 15.0923L9.77222 14.7357ZM11.2397 15.0419L12.2397 9.26594L10.7617 9.01006L9.76171 14.7861L11.2397 15.0419Z" fill="#000000"></path> </g></svg>
            </li>
            <li className='w-6 h-6'>
            <svg viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>youtube [#168]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"> </path> </g> </g> </g> </g></svg>
            </li>
            </ul>
          </div>
        </div>
        <div className='flex w-full h-12 bottom-0 footer'>
          <span className='w-full text-left pl-2 py-3 text-sm text-gray-600'>
          &copy; David Fedchuk. This is for educational purposes only. 
          </span>
        </div>
    </div>
  );
}
function changeScroll(){
  if(typeof window !== 'undefined'){
    const navMenu = document.querySelector(".checked");
    navMenu.checked = false;
  } 
  }

export default App;
