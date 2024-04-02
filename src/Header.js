import React, { useState } from "react";
import { Bars4Icon } from '@heroicons/react/24/solid'

const Header = () => {
    const[click, Click] = useState(false);
  return (
 


    <header className="flex justify-between px-6 py-6 bg-header">
      <a className="font-bold text-black font-google-font text-4xl " href="#">
        Sathish
      </a>
      <nav className="hidden md:block ">
        <ul className="flex text-white">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {click&&<nav className="block md:hidden">
        <ul onClick={()=>Click(!click)} className="flex flex-col text-white moblie-view">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#project">Project</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>}
      <button onClick={()=>Click(!click)} className="block md:hidden"><Bars4Icon  className="text-white h-5"/></button>
    </header>
  );
};

export default Header;
