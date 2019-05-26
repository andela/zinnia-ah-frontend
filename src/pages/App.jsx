import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import 'react-toastify/dist/ReactToastify.css';
import Glide from '@glidejs/glide';

// components
import Navbar from '../components/presentationals/Navbar/Navbar';
import Button from '../components/presentationals/Button/Button';
import PopularAuthorsList from '../components/presentationals/PopularAuthorsList/PopularAuthorsList';
import Title from '../components/presentationals/Title/Title';
import VerticalCard from '../components/presentationals/VerticalCard/VerticalCard';
import Tag from '../components/presentationals/Tag/Tag';
// import Carousel from '../components/presentationals/Carousel/Carousel';

// styles
import './App.scss';
import HorizontalCard from '../components/presentationals/HorizontalCard/HorizontalCard';
import Image from '../components/presentationals/Image/Image';

class App extends Component {
  componentDidMount() {
    new Glide('.glide', {
      type: 'carousel',
      perView: 2,
      focusAt: 'center',
      gap: '50',
      autoplay: '3000',
      hoverpause: true,
      keyboard: true,
      animationDuration: '2000',
      breakpoints: {
        1250: {
          perView: 1,
        },
        800: {
          perView: 1,
        },
        480: {
          perView: 1,
        },
        399: {
          perView: 1,
        },
      },
    }).mount();
  }

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
        <div className="middle">
          <div className="tag-result-div">
            <div
              className="h-card-container"
              style={{
                marginRight: 'auto',
              }}
            >
              <HorizontalCard />
              <HorizontalCard />
            </div>
            <div className="h-card-container">
              <HorizontalCard />
              <HorizontalCard />
            </div>
          </div>
          <div className="tag-div">
            <Title content="Tags" className="title-md index-title" />
            <div className="inner">
              <Tag value="Sports" />
              <Tag value="Technology" className="active" />
              <Tag value="Finance" />
              <Tag value="International Relations" />
              <Tag value="Religion" />
              <Tag value="Nature & Life" />
              <Tag value="Arts & Culture" />
            </div>
          </div>
        </div>

        <div className="main-bottom">
          <div className="suggested-reads">
            <Title content="Suggested Reads" className="title-md index-title" />
            <div>
              <div className="glide">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">
                    <li className="glide__slide">
                      <HorizontalCard />
                    </li>
                    <li className="glide__slide">
                      <HorizontalCard />
                    </li>
                    <li className="glide__slide">
                      <HorizontalCard />
                    </li>
                  </ul>
                </div>
                <div className="glide__bullets" data-glide-el="controls[nav]">
                  <button className="glide__bullet" data-glide-dir="=0" />
                  <button className="glide__bullet" data-glide-dir="=1" />
                  <button className="glide__bullet" data-glide-dir="=2" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <Link to="/" className="footer-link">
              About
            </Link>
            <Link to="/" className="footer-link">
              Terms & Conditions
            </Link>
            <Link to="/" className="footer-link">
              Contact
            </Link>
            <Link to="/" className="footer-link">
              Support
            </Link>
            <Link to="/" className="footer-link">
              Cookies
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
