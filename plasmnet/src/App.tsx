import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { GlobalStyle } from "./styles/globalStyle";
import FooterPush from './components/FooterPush';
import MainContents from './components/MainContents';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <MainContents />
      <FooterPush />
      <Footer />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
