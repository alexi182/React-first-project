import React from 'react';
import './content.scss';

export default class Content extends React.Component {

   render() {
      return (
          <section className="content">
             <div className="container">
                <h2>Content</h2>
                <img src={require("../../images/subj-img-fr.jpg")} />
             </div>
          </section>
      );
   }
}

