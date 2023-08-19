import Home from './components/home';
import { Promos } from './components/promos';
import { Logo } from './components/logo';
import { Footer } from './components/footer';
import {DrawerMenu} from './components/drawerMenu';
import { AeNavbar } from './components/AeNavbar';
import { AeHeader } from './components/AeHeader';
import './App.css';
import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import Register  from "./components/register";
import Bag from "./components/bag";
import SignIn from './components/signIn';

function App() {
  const [top, setTop] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if(typeof window !== "undefined"){
      window.addEventListener("scroll", () => {
        setTop(window.scrollY > 40)
    })
    }
  }, [])
  return (
    <div className="App">
      <AeHeader     />
      <AeNavbar   top={top} changeUI={changeUI}  />
        <DrawerMenu   changeScroll={changeScroll}  />
        <Logo   top={top}  />
        <SignIn open={openModal}/>
        <Promos/>
        <Routes>
          <Route exact path="/" element={<Home/>}/> 
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/register" element={<Register/>}/>  
          <Route exact path="/bag" element={<Bag/>}/>                
        </Routes>
        <Footer/>
    </div>
  );
}
function changeScroll(){
  if(typeof window !== 'undefined'){
    const topNavBar = document.querySelector(".top-navigation");
    const navMenu = document.querySelector(".checked");
    navMenu.checked = false;
    document.body.style.overflowY = "scroll";
    topNavBar.style.position = "";
  } 
  }
  function changeUI(){
    const topNavBar = document.querySelector(".top-navigation");
    const topBar = document.querySelector('.ae-aerie-topbar');
    document.body.style.overflowY = "hidden";
    topBar.style.position = "relative";
    topNavBar.style.position = "relative";
  }

export default App;
