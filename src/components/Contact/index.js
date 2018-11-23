import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Contact = (props) => {
   const isVisible = props.active ?
      <i className="Contact__cell__icon fa fa-eye" aria-hidden="true" /> :
      <i className="Contact__cell__icon fa fa-eye-slash" aria-hidden="true" />;

   return (
      <tr className={'Contact' + (props.selected ? ' Contact--selected' : '')} data-id={props.id} onClick={props.onSetActiveContact.bind(null, props.id)}>
         <td className="Contact__cell">{isVisible}{props.name}</td>
         <td className="Contact__cell">{props.surname}</td>
         <td className="Contact__cell">{props.city}</td>
         <td className="Contact__cell">{props.email}</td>
         <td className="Contact__cell">{props.phone}</td>
         <td className="Contact__cell">
            <i className="Contact__cell__icon fa fa-pencil-alt" aria-hidden="true"></i>
            <i className="Contact__cell__icon fa fa-trash" aria-hidden="true"></i>
         </td>
      </tr>
   );
};

Contact.propTypes = {
   id: PropTypes.number.isRequired,
   activeRow: PropTypes.number.isRequired,
   active: PropTypes.bool.isRequired,
   name: PropTypes.string.isRequired,
   surname: PropTypes.string.isRequired,
   city: PropTypes.string.isRequired,
   email: PropTypes.string.isRequired,
   phone: PropTypes.string.isRequired,
   onSetActiveContact: PropTypes.func.isRequired,
   selected: PropTypes.bool
};
