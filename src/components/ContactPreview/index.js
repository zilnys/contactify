import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import defaultUserImg from './img/userpic.jpg';

export const ContactPreview = (props) => {
   return (
      <div className="ContactPreview">
         <div className="ContactPreview__image">
            <img className="ContactPreview__image__img" src={defaultUserImg} alt="Contact" />
         </div>

         <table className="ContactPreview__details" border="0" cellSpacing="0" cellPadding="0">
            <tbody>
               <tr className="ContactPreview__details__row">
                  <td className="ContactPreview__details__row__cell">Name:</td>
                  <td className="ContactPreview__details__row__cell">{props.name}</td>
               </tr>
               <tr className="ContactPreview__details__row">
                  <td className="ContactPreview__details__row__cell">Surname:</td>
                  <td className="ContactPreview__details__row__cell">{props.surname}</td>
               </tr>
               <tr className="ContactPreview__details__row">
                  <td className="ContactPreview__details__row__cell">City:</td>
                  <td className="ContactPreview__details__row__cell">{props.city}</td>
               </tr>
               <tr className="ContactPreview__details__row">
                  <td className="ContactPreview__details__row__cell">Email:</td>
                  <td className="ContactPreview__details__row__cell">
                     <a className="ContactPreview__details__link" href={'mailto:' + props.email}>{props.email}</a>
                  </td>
               </tr>
               <tr className="ContactPreview__details__row">
                  <td className="ContactPreview__details__row__cell">Phone:</td>
                  <td className="ContactPreview__details__row__cell">{props.phone}</td>
               </tr>
            </tbody>
         </table>
      </div>
   );
};

ContactPreview.propTypes = {
   name: PropTypes.string.isRequired,
   surname: PropTypes.string.isRequired,
   city: PropTypes.string.isRequired,
   email: PropTypes.string.isRequired,
   phone: PropTypes.string.isRequired,
};

export const ContactPreviewEmpty = () => {
   return (
      <div className="ContactPreview">
         <div className="ContactPreview__empty">
            No preview.
         </div>
      </div>
   );
};
