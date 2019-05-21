import React from 'react';
import { Input } from 'semantic-ui-react';

import './Searchbar.scss';

const Searchbar = () => {
  return (
    <form className="search-bar">
      <Input icon="search" iconPosition="left" placeholder="Search..." />
    </form>
  );
};

export default Searchbar;
