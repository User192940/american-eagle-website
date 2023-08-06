import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (<div>
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
        </div>
  )
};
export default Home; 