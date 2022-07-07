import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from "./portfolio/portfolio-container";
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>My, Jose RodCas React Starter</h1>
        <PortfolioContainer />
        <h2>My First React Application</h2>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}

