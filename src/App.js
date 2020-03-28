import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header/Header.jsx';
import Menu from './Components/Menu/Menu.jsx';
import Public from './Components/Public/Public.jsx';
import Footer from './Components/Footer/Footer.jsx';
// Route
import { Route, BrowserRouter } from 'react-router-dom';
// Navigation 


function App (props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='Wrapper'>
            <Menu />
            <Public UserData={props.UserData} MessageData={props.MessageData} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
