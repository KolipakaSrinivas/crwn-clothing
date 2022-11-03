import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Shoppage from './pages/shope/Shop.component';



import Homepage from './pages/Homepage.component'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Homepage /> }/>
        <Route path='/shop' element={<Shoppage />}/>
     
        
      </Routes>
      </div>
  );
}

export default App;
