import React from 'react';

import Title from '../Title/Title';
import Illustration from '../../../assets/images/reading-lady.svg';
import './AuthenticationIllustration.scss';

const AuthenticationIllustration = () => {
  const styles = {
    fontSize: '20px',
    lineHeight: '24px',
    marginTop: '18px',
  };
  return (
    <div className="left">
      <Title
        className="title-lg"
        content="A Safe Haven For The Creative At Heart"
      />
      <p style={styles}>
        A community of like minded authors to foster inspiration and innovation
        by leveraging the modern web.
      </p>
      <div className="illustration-container">
        <img
          src={Illustration}
          alt="A lady sitting on a pile of books and reading a book"
        />
      </div>
    </div>
  );
};

export default AuthenticationIllustration;
