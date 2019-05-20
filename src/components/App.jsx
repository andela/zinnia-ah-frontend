import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/presentationals/Navbar/Navbar';
import Button from '../components/presentationals/Button/Button';
import PopularAuthorsList from '../components/presentationals/PopularAuthorsList/PopularAuthorsList';
import Searchbar from '../components/presentationals/Searchbar/Searchbar';

import './App.scss';

class App extends Component {
  state = {
    authors: [
      {
        id: 23,
        name: 'Eben',
        url: 'https://google.com',
        image: 'image',
        info: 'we rock',
      },
      {
        id: 24,
        name: 'Eben',
        url: 'https://google.com',
        image: 'image',
        info: 'we rock',
      },
      {
        id: 25,
        name: 'Eben',
        url: 'https://google.com',
        image: 'image',
        info: 'we rock',
      },
    ],
  };

  render() {
    return (
      <div>
        <div>
          <Navbar>
            <div className="nav-items">
              <Searchbar />
              <Button
                type="submit"
                value="Write"
                className="btn-dark navbar-right"
              />
            </div>
          </Navbar>
        </div>
        <div className="landing-container">
          <ToastContainer autoClose={5000} />
          <h1 className="toothy"> My React App!! </h1>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
          <PopularAuthorsList authors={this.state.authors} />
        </div>
      </div>
    );
  }
}

export default App;
