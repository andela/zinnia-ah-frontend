import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';
import StarRating from './presentationals/StarRating/StarRating';

class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer autoClose={5000} />
        <h1 className="toothy"> My React App!! </h1>
        <StarRating />
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
      </div>
    );
  }
}

export default App;
