import React from 'react';
import './style.css';

export class Dropdown extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         dropdownVisible: false
      };

      this.handleToggleDropdown = this.handleToggleDropdown.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
   }

   handleToggleDropdown(event) {
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();

      this.setState({
         dropdownVisible: !this.state.dropdownVisible
      });
   }

   handleClickOutside() {
      this.setState({
         dropdownVisible: false
      });
   }

   componentDidMount() {
      document.addEventListener('click', this.handleClickOutside);
   }

   componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside);
   }

   render() {
      return (
         <div className="Dropdown" onClick={this.handleToggleDropdown}>
               <div className="Dropdown__panel" >
                  <i className="Dropdown__panel__icon fa fa-user" aria-hidden="true"></i>
                  <span>Jorah Mormont</span>
                  <i className={'Dropdown__panel__arrow fa' + (this.state.dropdownVisible ? ' fa-caret-up' : ' fa-caret-down')} aria-hidden="true"></i>
               </div>
               {this.state.dropdownVisible && <nav className="Dropdown__nav">
                  <ul className="Dropdown__nav__list">
                     <li className="Dropdown__nav__list__item">
                        <i className="Dropdown__nav__list__item__icon fa fa-users" aria-hidden="true"></i>Groups
                     </li>
                     <li className="Dropdown__nav__list__item">
                        <i className="Dropdown__nav__list__item__icon fa fa-comments" aria-hidden="true"></i>Frequently contacted
                     </li>
                     <li className="Dropdown__nav__list__item">
                        <i className="Dropdown__nav__list__item__icon fa fa-wrench" aria-hidden="true"></i>Preferences
                     </li>
                     <li className="Dropdown__nav__list__item">
                        <i className="Dropdown__nav__list__item__icon fa fa-power-off" aria-hidden="true"></i>Log out
                     </li>
                  </ul>
               </nav>}
            </div>
      );
   }
}
