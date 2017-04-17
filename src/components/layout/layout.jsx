import React from 'react';
import Header from '../header/header';
import Content from '../content/content';
import Footer from '../footer/footer';
import './layout.scss';

export default class Layout extends React.Component {

   constructor(props) {
      super(props);
   }

   render() {
      return (
          <div className="layout">
             <Header name="" />
             <Content />
             <Footer />
          </div>
      );
   }
}

