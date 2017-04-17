import React from 'react';
import './header-menu.scss';

export default class Headermenu extends React.Component {

   render() {
      /*console.log('items', this.props.items);*/
      console.log( this.props);
      return (
          <div className="header-menu">
             <ul>
                {this.props.items.map((item, index) =>
                    <li key={index}>
                       <a href={item.link}>
                          {item.label}
                       </a>
                    </li>
                )}
             </ul>
          </div>
      );
   }
}


