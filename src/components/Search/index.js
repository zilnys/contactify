import React from 'react';
import './style.css';

export class Search extends React.Component {
   render() {
      return (
         <div className="Search">
            <input id="search" type="text" placeholder="Search" className="Search__input" />
            <label for="search" className="Search__button" aria-label="Search">
               <i className="fa fa-search" aria-hidden="true"></i>
            </label>
         </div>
      );
   }
}
