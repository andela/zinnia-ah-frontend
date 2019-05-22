import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import 'react-toastify/dist/ReactToastify.css';

// components
import Navbar from '../components/presentationals/Navbar/Navbar';
import Button from '../components/presentationals/Button/Button';
import PopularAuthorsList from '../components/presentationals/PopularAuthorsList/PopularAuthorsList';
import Title from '../components/presentationals/Title/Title';
import VerticalCard from '../components/presentationals/VerticalCard/VerticalCard';

// styles
import './App.scss';
import HorizontalCard from '../components/presentationals/HorizontalCard/HorizontalCard';
import Image from '../components/presentationals/Image/Image';

class App extends Component {
  state = {
    authors: [
      {
        id: 23,
        name: 'Nedy',
        url: 'https://google.com',
        image:
          'https://res.cloudinary.com/nedy123/image/upload/v1544002134/xykn3yriqcsgrbwrqwa6.jpg',
        username: 'nedyudombat',
      },
      {
        id: 24,
        name: 'Samantha',
        url: 'https://google.com',
        image:
          'https://res.cloudinary.com/nedy123/image/upload/v1516819339/lady-2_jqx4go.jpg',
        username: 'samanthress',
      },
      {
        id: 25,
        name: 'Hilary',
        url: 'https://google.com',
        image:
          'https://res.cloudinary.com/nedy123/image/upload/v1516819339/dummy-av.jpg',
        username: 'noMoreEben',
      },
    ],
  };
  Searchbar() {
    return (
      <form className="search-bar">
        <Input icon="search" iconPosition="left" placeholder="Search..." />
      </form>
    );
  }

  render() {
    return (
      <Fragment>
        <div className="pt-3">
          <Navbar>
            <div className="nav-items">
              {this.Searchbar()}
              <Link to="/login">
                <Button type="submit" value="WRITE" className="btn-dark w-10" />
              </Link>
            </div>
          </Navbar>
        </div>
        <div className="top">
          <div className="trending">
            <Title content="Trending" className="title-md index-title" />
            <div className="trending-inner up">
              <div className="v-card-container">
                <VerticalCard />
              </div>
              <div className="h-card-container">
                <HorizontalCard />
                <HorizontalCard />
              </div>
            </div>
            <div className="trending-inner bottom">
              <div className="h-card-container">
                <HorizontalCard />
                <HorizontalCard />
              </div>
              <div className="v-card-container">
                <VerticalCard />
              </div>
            </div>
          </div>
          <div className="popular">
            <PopularAuthorsList authors={this.state.authors} />
            <div className="justify-content-center ads">
              <div
                style={{
                  maxWidth: '100%',
                  marginTop: '2rem',
                  position: 'relative',
                }}
              >
                <Image
                  src="https://res.cloudinary.com/nedy123/image/upload/v1558511972/jumia-ad_hvrkw8.png"
                  style={{
                    maxWidth: '100%',
                    position: 'relative',
                    zIndex: '2',
                  }}
                />
                <Image
                  src="https://res.cloudinary.com/nedy123/image/upload/v1558511973/lady-ad_jc3tth.png"
                  style={{
                    maxWidth: '100%',
                    marginTop: '-2.8125rem',
                    position: 'relative',
                    zIndex: '1',
                  }}
                />
                <Image
                  src="https://res.cloudinary.com/nedy123/image/upload/v1558511972/konga-ad_cw2mpn.png"
                  style={{
                    maxWidth: '100%',
                    marginTop: '-3.2625rem',
                    position: 'relative',
                    zIndex: '2',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
