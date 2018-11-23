import React from 'react';

import {
   Contact
} from '..';

import './style.css';

export class Contacts extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         sortKey: 'name',
         sortAsc: true,
      };

      this.handleChangeSorting = this.handleChangeSorting.bind(this);
      this.renderContacts = this.renderContacts.bind(this);
      this.sortingFunction = this.sortingFunction.bind(this);
      this.renderSortingArrow = this.renderSortingArrow.bind(this);
   }

   handleChangeSorting(key) {
      if (key === this.state.sortKey) {
         this.setState({
            sortAsc: !this.state.sortAsc
         });
      } else {
         this.setState({
            sortKey: key
         });
      }
   }

   sortingFunction(a, b) {
      const valueA = a[this.state.sortKey].toLowerCase();
      const valueB = b[this.state.sortKey].toLowerCase();

      if (this.state.sortAsc) {
         if (valueA < valueB) { return -1; }
         if (valueA > valueB) { return 1; }
         return 0;
      } else {
         if (valueA < valueB) { return 1; }
         if (valueA > valueB) { return -1; }
         return 0;
      }
   }

   renderSortingArrow(key) {
      if (key === this.state.sortKey) {
         if (this.state.sortAsc) {
            return <i className="Contacts__table__header__cell__icon fa fa-arrow-up" aria-hidden="true" />;
         } else {
            return <i className="Contacts__table__header__cell__icon fa fa-arrow-down" aria-hidden="true" />;
         }
      }
      return null;
   }

   renderContacts() {
      const contacts = this.props.contacts.sort(this.sortingFunction);

      if (contacts.length === 0) {
         return (
            <tr className="Contacts__table__empty">
               <td className="Contacts__table__empty__cell" colSpan="6">
                  No data.
               </td>
            </tr>
         );
      }
      
      return (
         contacts.map((item) => {
            return (
               <Contact
                  key={item.id}
                  id={item.id}
                  active={item.active}
                  name={item.name}
                  surname={item.surname}
                  city={item.city}
                  email={item.email}
                  phone={item.phone}
                  onSetActiveContact={this.props.onSetActiveContact}
                  selected={this.props.selectedId === item.id}
               />
            );
         })
      );
   }

   render() {
      return (
         <main className="Contacts">
            <table className="Contacts__table" border="0" cellSpacing="0" cellPadding="0">
               <thead className="Contacts__table__header">
                  <tr>
                     <th 
                        className="Contacts__table__header__cell Contacts__table__header__cell--sortable" 
                        onClick={this.handleChangeSorting.bind(null, 'name')}
                     >
                        Name {this.renderSortingArrow('name')}
                     </th>
                     <th 
                        className="Contacts__table__header__cell Contacts__table__header__cell--sortable" 
                        onClick={this.handleChangeSorting.bind(null, 'surname')}
                     >
                        Surname {this.renderSortingArrow('surname')}
                     </th>
                     <th 
                        className="Contacts__table__header__cell Contacts__table__header__cell--sortable" 
                        onClick={this.handleChangeSorting.bind(null, 'city')}
                     >
                        City {this.renderSortingArrow('city')}
                     </th>
                     <th className="Contacts__table__header__cell">Email</th>
                     <th className="Contacts__table__header__cell">Phone</th>
                     <th className="Contacts__table__header__cell">&nbsp;&nbsp;</th>
                  </tr>
               </thead>
               <tbody>
                  {this.renderContacts()}
               </tbody>
            </table>
         </main>
      );
   }
}