import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import Home from './containers/pages/home/Home';
import Login from './containers/auth/Login';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
