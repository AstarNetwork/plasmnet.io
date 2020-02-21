import React from 'react';
import ProgressBar from "react-scroll-progress-bar";
import Header from './components/Header'
import HeaderSmall from './components/HeaderSmall'
import Footer from './components/Footer'
import { GlobalStyle } from "./styles/globalStyle";
import FooterPush from './components/FooterPush';
import MainContents from './components/MainContents';
import "./styles/animation.scss"
import { theme } from "./styles/theme";

const App = () => {
  return (
    <React.Fragment>
      <ProgressBar height="4px" bgcolor={theme.colors.yellow} />
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
