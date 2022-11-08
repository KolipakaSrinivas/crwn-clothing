import React from 'react'
import './App.scss';
import { Routes,Route } from 'react-router-dom';


import SingInSingUp from '../src/pages/sing-in-.sing-up/Sign-in.sing-up.component'
import Header from './components/header/Header.component'
import Homepage from './pages/HomePage/Homepage.component'
import ShopPage from './pages/shopePage/Shop.component';
// import { upload } from '@testing-library/user-event/dist/upload';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/SingInSingUp' element={<SingInSingUp/>}/>
      </Routes>
      </div>
  );
}

export default App;
