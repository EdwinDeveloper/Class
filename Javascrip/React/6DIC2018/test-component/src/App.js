import React, { Component } from 'react';
import FormPets from './components/FormPets';
import getPets from './components/ListPets/getPets';

import './App.css';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path='/GetPets' exact component ={getPets}></Route>
          <Route path='/FormPets' exact component={FormPets}></Route>
      </div>
    );
  }
}

export default App;
