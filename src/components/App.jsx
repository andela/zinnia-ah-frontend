import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </header>
        <h1 className="toothy"> My React App!! </h1>
      </div>
    );
  }
}

export default App;
