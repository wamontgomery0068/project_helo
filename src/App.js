import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import './App.css';




// Imported Components Below before making a routes file

import Nav from './component/Nav/Nav';
// import Auth from './component/Auth/Auth';
// import Dashboard from './component/Dashboard/Dashboard';
// import Form from './component/Form/Form';
// import Post from './component/Post/Post';

// Imported Components Above before making a routes file

// ****** Reminder ******
// Import Nav


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className = "App_Container">
          <Nav />
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

