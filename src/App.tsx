import React, { Component } from 'react';
import LandingPage from './pages/landingPage/LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import NavbarSmall from './components/navbar/NavbarSmall';
import Footer from './components/footer/Footer';
import FooterPush from './components/footer/FooterPush';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Navbar />
        <NavbarSmall />
        <Router>
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
          </Switch>
        </Router>
        <FooterPush />
        <Footer />
      </div>
    );
  }

}

export default App;
