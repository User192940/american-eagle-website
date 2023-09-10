import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Account({open, onClose, openSignIn, openCreateAccount}) {
    const {user, logOut} = UserAuth();
    const navigate = useNavigate();

    const handleSignIn = () => {
        onClose();
        openSignIn();
    }
    const handleCreateAccount = () => {
        onClose();
        openCreateAccount();
    }

    const handleLogout = async () => {
      try{
        await logOut();
        navigate("/home");
        onClose();
      } catch(error){
        console.log(error);
      }
    }
  return <div className={`${(open) ? "overlay" : ""}`}>
  <nav className={`${(open) ? "account-active" : "account"} pl-4`}>
              <div className='flex justify-end w-full mt-8 h-[18px]'>
                <button onClick={onClose} className='w-[18px] h-[18px] mr-6'>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 5L19 19M5 19L19 5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                
                </button>
              </div>
              <ul className='flex w-full flex-col just'>
                <li className='pb-6 text-left'>
                <span className='w-full text-3xl font-semibold'>{(user) ? user.name : ""} Account</span>
                </li>
                <li className={`${(user) ? "hide " : ""}flex flex-row p-0 m-0 justify-around`}>
                <button onClick={handleSignIn} className="w-[48%] py-2 bg-white text-black rounded-full font-semibold">
                Sign In
                </button>
                <button onClick={handleCreateAccount} className="w-[48%] bg-[#24272a] text-white rounded-full font-semibold">
                Create Account
                </button>
                </li>
                <li className={`${(user) ? "" : "mt-6 "}bl py-3 text-left text-[14px] font-semibold`}>
                  Real Rewards
                </li>
                <li className={`${(user) ? "" : ""}bl py-3 text-left text-[14px] font-semibold`}>Track Order</li>
                <li className={`${(user) ? "" : ""}bl py-3 text-left text-[14px] font-semibold`}>Account Settings</li>
                <li className='bl py-3 text-left text-[14px] font-semibold'>Help</li>
                <li className='bl py-3 text-left text-[14px] font-semibold'>Store Locator</li>
                <li className={`${(user)?"":"hidden "}py-6 w-full`}>
                <button onClick={handleLogout} className='py-3 w-full bg-white rounded-3xl text-sm border-2'>
                    Sign Out
                    </button>
                </li>
              </ul>
            </nav>
            </div>;
}
  