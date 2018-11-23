import React from 'react';

import {
   ActionsBar,
   ContactPreview,
   ContactPreviewEmpty,
   Contacts
} from '..';

import './style.css';
import contactsJSON from '../../contacts.json';

export class Content extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         activeId: 2,
         contacts: contactsJSON
      };

      this.handleFilterContacts = this.handleFilterContacts.bind(this);
      this.handleSetActiveContact = this.handleSetActiveContact.bind(this);
      this.renderActiveContact = this.renderActiveContact.bind(this);
   }

   handleFilterContacts(filters) {
      var filteredContacts = contactsJSON;

      if (filters.name !== '') {
         filteredContacts = filteredContacts.filter(filterName);
      }

      if (filters.city !== '') {
         filteredContacts = filteredContacts.filter(filterCity);
      }

      if (!filters.active) {
         filteredContacts = filteredContacts.filter(filterActive);
      }
      
      this.setState({
         contacts: filteredContacts,
         activeId: filteredContacts[0] ? filteredContacts[0].id : null
      });

      function filterName(contact) {
         return contact.name.toLowerCase().indexOf(filters.name.toLowerCase()) > -1;
      };

      function filterCity(contact) {
         return contact.city.toLowerCase().indexOf(filters.city.toLowerCase()) > -1;
      };

      function filterActive(contact) {
         return !contact.active;
      };
   }

   handleSetActiveContact(id) {
      this.setState({ activeId: id });
   }

   renderActiveContact() {
      const activeItem = this.state.contacts.find(contact => contact.id === this.state.activeId);

      if (activeItem) {
         return (
            <ContactPreview
               name={activeItem.name}
               surname={activeItem.surname}
               city={activeItem.city}
               email={activeItem.email}
               phone={activeItem.surname}
            />
         );
      }
      
      return <ContactPreviewEmpty />;
   }

   render() {
      return (
         <section className="Content">
            <ActionsBar
               onFilterContacts={this.handleFilterContacts}
            />
            <div className="Content__data">
               <aside className="Content__data__details">
                  {this.renderActiveContact()}
               </aside>
               <Contacts 
                  contacts={this.state.contacts} 
                  selectedId={this.state.activeId}
                  onSetActiveContact={this.handleSetActiveContact}
               />
            </div>
         </section>
      );
   }
}
