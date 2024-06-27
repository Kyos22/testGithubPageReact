

import React from 'react';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/header/Header';

function App() {
  return (
   
    // <Router basename='/'>
    //   <Routes>
    //   <Route path='/' element={<Hometest/>} />
    //   </Routes>
    // </Router>
    <>
    <Header/>
    </>
    
  );
}

export default App;
