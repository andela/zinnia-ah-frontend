import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="toothy"> My React App!! </h1>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="/editor">
          <button>Editor</button>
        </Link>
      </div>
    );
  }
}

export default App;
