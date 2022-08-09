import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
function App() {
 
  return (
    <div className="App">
      <Header></Header>
      <div className='App-header'>
      <Routes>
      <Route path="/React-Reduxsaga-Typescript-demo" element ={<Main></Main>}/>
      <Route path="/React-Reduxsaga-Typescript-demo/cart" element ={<Cart></Cart>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
