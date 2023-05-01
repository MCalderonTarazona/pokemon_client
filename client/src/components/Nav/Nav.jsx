import React from 'react';
import style from './Nav.module.css';
import { useLocation } from "react-router-dom"

const Nav = ({logout}) => {

const { pathname } = useLocation();
if (pathname === "/" || pathname === "/user") {
    return null;
}

  return (
    <>
    <div className = {style.containerNav}>
      <div className = {style.containerLeft}></div>
      <div className = {style.containerCont}>Nav</div>
      <div className = {style.containerRight}></div>  
    </div>
    </>
  );
}

export default Nav;