import React from 'react';
import './style.css';

export class Nav extends React.Component {
   render() {
      return (
         <nav className="Nav">
            <ul className="Nav__list">
               <li className="Nav__list__item">
                  <a className="Nav__list__item__link" href="#dashboard">Dashboard</a>
               </li>
               <li className="Nav__list__item">
                  <a className="Nav__list__item__link Nav__list__item__link--active" href="#contacts">Contacts</a>
               </li>
               <li className="Nav__list__item">
                  <a className="Nav__list__item__link" href="#notifications">Notifications</a>
               </li>
            </ul>
         </nav>
      );
   }
}
