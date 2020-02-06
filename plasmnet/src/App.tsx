import React from 'react';
import './App.css';
import Header from './components/Header'
import { GlobalStyle } from "./styles/globalStyle";

const App = () => {
  return (
    <div>
      <Header />
      <GlobalStyle />
    </div>
  );
}

export default App;
