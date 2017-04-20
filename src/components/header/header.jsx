import React from 'react';
import Headermenu from './header-menu/header-menu';
import './header.scss';

const menu = [
   {
      link: '/',
      label: 'Главная'
   },
   {
      link: '/news',
      label: 'Новости'
   },
   {
      link: '/galerey',
      label: 'Галерея'
   },
   {
      link: '/block',
      label: 'Блок'
   },
   {
      link: '/contacts',
      label: 'Контакты'
   }
];

export default class Header extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         name: this.props.name
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
   }

/*   console.log({this.props});*/

   handleClick() {
      this.setState({
         name: ''
      });
   }

   handleChange(e) {
      this.setState({
         name: e.target.value
      });
   }

   render() {
      return (
          <header className="header">
             <div className="container">
                <label className={ this.state.name.length ? "active" : "" }>
                   Введите: </label>
                <input type="text" value={this.state.name} onChange={this.handleChange} />

                <button type="button" onClick={this.handleClick}>Очистить</button>

                <h2>Имя:{this.state.name}</h2>

                <Headermenu items={menu} />
             </div>
          </header>
      );
   }
}


