import { faShoppingBag, faShoppingBasket, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import SignIn from './signIn';
import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";

function Bag({onOpen}){
    const {user, logOut} = UserAuth()
    console.log(user)
    return (
        <div className='flex w-full flex-col bag'>
            <span className={`${(user) ? "hidden " : ""}ml-[2.5%] mt-4 mb-4 w-full text-left text-3xl font-medium`}>Shopping Bag</span>
            <span className={`${(user) ? "" : "hidden"}ml-[2.5%] mt-4 mb-4 w-full text-left text-3xl font-medium`}>{user.name}'s Bag</span>
            <div className={`${(user) ? "hidden " : ""}flex flex-row mr-[2.5%] mb-8 ml-[2.5%]`}>
                <p className="text-sm text-left text-gray-500 mr-2">
                Sign in to enjoy faster checkout, track your order and earn rewards!
                </p>
                <div className="w-24">
                    <button onClick={onOpen} className='p-2 w-24 bg-white rounded-3xl text-sm'>
                    Sign In
                    </button>
                </div>
            </div>
            <div className="empty-cart-section w-[95%] ml-[2.5%] mr-[2.5%] mb-4">
                <section className="flex flex-col items-center mt-4">
                <svg viewBox="0 0 21 26" xmlns="http://www.w3.org/2000/svg" className="md:h-[30] md:w-[27px] md:top-[1px] h-[28px]"><path fill="inherit" d="M.957 7.02l3.24-.486 5.79.135 9.778.351.378 2.12-1.185 13.44-.677 1.355-1.083.948-1.591.508-10.597.067-1.523-.575-1.253-1.117-.474-1.49-.44-4.232L.372 7.651z"></path><path d="M20.475 6.318a.777.777 0 00-.556-.244h-4.54v-1.13C15.38 2.199 13.125 0 10.346 0c-2.78 0-5.003 2.228-5.003 4.945v1.13H.773a.727.727 0 00-.557.243c-.154.153-.216.367-.216.58l1.143 14.926c.154 2.259 2.1 4.03 4.385 4.03h9.512c2.285 0 4.2-1.771 4.385-4l1.266-14.986a.832.832 0 00-.216-.55zM6.238 4.945c0-2.228 1.822-4.03 4.108-4.03 2.254 0 4.076 1.802 4.076 4.03v1.13H6.238v-1.13zm12.26 16.88c-.154 1.77-1.667 3.143-3.458 3.143H5.528c-1.822 0-3.335-1.404-3.459-3.174L.957 7.02h18.808l-1.266 14.804z" fill="currentColor" fill-rule="nonzero"></path></svg>
                <span className="text-xl ml-5 mr-5 mt-4"> Your bag is empty. Find something you love!</span>
                <button className="cart-button w-[65%] h-10">Womens New Arrivals</button>
                <button className="cart-button w-[65%] h-10">Mens New Arrivals</button>
                </section>
            </div>
        </div>
    )
}
export default Bag