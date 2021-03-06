import './_app.scss';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import StyleSheet from '../style-sheet';
import Landing from '../landing';
import Navigation from '../navigation';

class App extends React.Component{
  render(){
    return (
      <div className="app"> 
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <Navigation/>
        <BrowserRouter>
          <div>
            <Route path="/" component={Landing} />
            <Route path="/styleSheet" component={StyleSheet} />
          </div>
        </BrowserRouter>
      </div>);
  }
}

export default App;
