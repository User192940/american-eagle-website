import React from "react";
import { useState, useEffect } from "react";
export default function ScrollToTop() {

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="flex w-full h-12 justify-center">
        <button className="w-[105%] border-x-0 border" onClick={scrollToTop}>
            Back to Top
        </button>
    </div>
  );
}