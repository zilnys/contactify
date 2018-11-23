import React from 'react';
import {
   Input
 } from '../';
import './style.css';

export class ActionsBar extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         name: '',
         city: '',
         active: true,
      };

      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeCity = this.handleChangeCity.bind(this);
      this.handleChangeActive = this.handleChangeActive.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
   }

   handleChangeName(e) {
      const trimmedName = e.target.value.trim();
      this.setState({ name: trimmedName });
   }

   handleChangeCity(e) {
      this.setState({ city: e.target.value });
   }

   handleChangeActive() {
      this.setState({ active: !this.state.active });
   }

   handleFilter(e) {
      e.preventDefault();
      this.props.onFilterContacts({
         name: this.state.name, 
         city: this.state.city, 
         active: this.state.active
      });
   }

   render() {
      return (
         <section className="ActionsBar">
            <div className="ActionsBar__filters">
               <Input
                  className="ActionsBar__filters__name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={this.handleChangeName}
                  aria-label="Filter by Name"
               />
               <Input type="select" name="city" value={this.state.city} onChange={this.handleChangeCity} aria-label="Filter by City">
                  <option value="">City</option>
                  <option value="London">London</option>
                  <option value="Sydney">Sydney</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Hong Kong">Hong Kong</option>
               </Input>
               <label className="ActionsBar__filters__active"><input className="ActionsBar__filters__checkbox" type="checkbox" defaultChecked onClick={this.handleChangeActive} aria-label="Show active" />Show active</label>
               <button className="ActionsBar__filters__button" type="submit" onClick={this.handleFilter}>Filter</button>
            </div>
            <button type="button" className="ActionsBar__add-contract">
               <i className="ActionsBar__add-contract__icon fa fa-plus" aria-hidden="true" />
               <span className="ActionsBar__add-contract__text">Add new contract</span>
            </button>
         </section>
      );
   }
}

