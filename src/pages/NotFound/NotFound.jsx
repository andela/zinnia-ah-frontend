import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/presentationals/Navbar/Navbar';
import Button from '../../components/presentationals/Button/Button';

import './NotFound.scss';
const NotFound = () => {
  return (
    <Fragment>
      <Navbar>
        <div className="hide-sm w-15">
          <Link to="/">
            <Button className="btn-dark" value="Go Back Home" />
          </Link>
        </div>
      </Navbar>
      <div className="d-flex justify-content-center text-content">
        <div>
          <h1 className="hero-text text-center">Ooops</h1>
          <p className="text-medium text-center">
            We went searching but sadly, we still could not find it
          </p>
          <Link to="/" className="hide-lg">
            <Button className="btn-dark" value="Go Back Home" />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
