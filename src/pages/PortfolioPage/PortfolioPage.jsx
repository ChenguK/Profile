import React, { Component } from 'react';
import Portfolio from '../../components/Portfolio/Portfolio';
import "./PortfolioPage.css";

class PortfolioPage extends Component {
   render(){
       return (
           <div id="Portfolio">
               
               <br />
               <Portfolio />
           </div>
       )
   }
};

export default PortfolioPage;