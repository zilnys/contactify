import React from 'react';
import './style.css';

export const Footer = () => {
   return (
      <footer className="Footer">
         <div className="Footer__menu">
            <nav className="Footer__menu__nav">
               <ul className="Footer__menu__nav__list">
                  <li><a href="#dashboards" className="Footer__menu__nav__list__link">Dashboards</a></li>
                  <li><a href="#contacts" className="Footer__menu__nav__list__link">Contacts</a></li>
                  <li><a href="#notifications" className="Footer__menu__nav__list__link">Notifications</a></li>
               </ul>
            </nav>
            <div className="Footer__menu__about">
               <span>&#9400; 2015 Contactify</span>
               <nav className="Footer__menu__nav">
                  <ul className="Footer__menu__nav__list Footer__menu__nav__list--horizontal">
                     <li><a href="#about" className="Footer__menu__nav__list__link">About</a></li>
                     <li><a href="#privacy" className="Footer__menu__nav__list__link">Privacy</a></li>
                  </ul>
               </nav>
            </div>
         </div>
         <div className="Footer__info">
            <div className="Footer__info__panel">
               <i className="Footer__info__panel__icon fa fa-cloud-upload-alt" aria-hidden="true"></i>
               <div>Last synced:<br />2015-06-02 14:33:10</div>
               <div className="Footer__info__sync">
                  <i className="fa fa-refresh" aria-hidden="true" />
                  <a className="Footer__info__sync__link" href="#sync">Force sync</a>
               </div>
            </div>
            <div className="Footer__info__panel">
               <i className="Footer__info__panel__icon fa fa-stethoscope" aria-hidden="true"></i>
               <div>Help desk and Resolution center available: <br /> I-IV: 8:00-18:00, V: 8:00-16:45</div>
            </div>
         </div>
         <div className="Footer__menu">
            <nav className="Footer__menu__nav">
               <ul className="Footer__menu__nav__list">
                  <li><a href="#groups" className="Footer__menu__nav__list__link">Groups</a></li>
                  <li><a href="#frequently-contacted" className="Footer__menu__nav__list__link">Frequently contacted</a></li>
                  <li><a href="#preferences" className="Footer__menu__nav__list__link">Preferences</a></li>
                  <li><a href="#logout" className="Footer__menu__nav__list__link">Log out</a></li>
               </ul>
            </nav>
         </div>
      </footer>
   );
};
