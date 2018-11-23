import React from 'react';
import {
   Nav,
   Search,
   Dropdown
} from '../';
import './style.css';
import logoImg from './img/contactify-logo.svg';

export class Header extends React.Component {
   render() {
      return (
         <header className="Header">
            <div className="Header__logo">
               <img className="Header__logo__img" src={logoImg} alt="Contactify" />
            </div>
            <div className="Header__nav">
               <Nav />
            </div>
            <div className="Header__search">
               <Search />
            </div>
            <div className="Header__dropdown">
               <Dropdown />
            </div>
         </header>
      );
   }
}
