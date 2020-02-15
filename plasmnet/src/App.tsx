import React from 'react';
import Header from './components/Header'
import HeaderSmall from './components/HeaderSmall'
import Footer from './components/Footer'
import { GlobalStyle } from "./styles/globalStyle";
import FooterPush from './components/FooterPush';
import MainContents from './components/MainContents';
import "./styles/animation.scss"

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <HeaderSmall />
      <MainContents />
      <FooterPush />
      <Footer />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
