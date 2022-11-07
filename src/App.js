import React from 'react'
import './App.scss';
import { Routes,Route } from 'react-router-dom';




import Homepage from './pages/HomePage/Homepage.component'
import ShopPage from './pages/shopePage/Shop.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/shop' element={<ShopPage/>} />

      </Routes>
      </div>
  );
}

export default App;
