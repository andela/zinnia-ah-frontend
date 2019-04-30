import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </header>
      <h1>Login Page</h1>
      <p>This is where you begin your journey</p>
    </div>
  );
};

export default Login;
