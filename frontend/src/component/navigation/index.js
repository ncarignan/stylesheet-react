import './_navigation.scss';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import StyleSheet from '../style-sheet';

class Navigation extends React.Component{
  render(){
    return (
      <section className="navigation">
        <h2>Navigation</h2>
        <ul>
          <li><a href="/">Link to Home</a> </li>
          <li><a href="/Login">Link to Login</a> </li>
          <li><a href="/styleSheet">Link to styleSheet</a> </li>
        </ul>
      </section>);
  }
}

export default Navigation;
