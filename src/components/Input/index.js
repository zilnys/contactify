import React from 'react';
import './style.css';

export class Input extends React.Component {
   render() {
      var classString = 'Input';
      var props = Object.assign({}, this.props);

      if (props.className) {
         classString = classString + ' ' + props.className;

         delete props['className'];
      }

      return (
         this.props.type === 'select' 
         ? <select className={classString} {...props}>{props.children}</select> 
         : <input className={classString} {...props} />
      );
   }
}

