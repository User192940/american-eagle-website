import Home from './components/home';
import { Promos } from './components/promos';
import { Logo } from './components/logo';
import { Footer } from './components/footer';
import { DrawerMenu } from './components/drawerMenu';
import { AeNavbar } from './components/AeNavbar';
import { AeHeader } from './components/AeHeader';
import './App.css';
import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";

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
      <AeHeader     />
      <AeNavbar   top={top} changeUI={changeUI}  />
        <DrawerMenu   changeScroll={changeScroll}  />
        <Logo   top={top}  />
        <Promos     />
        <Routes>
          <Route exact path="/" element={<Home/>}/>                    
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
