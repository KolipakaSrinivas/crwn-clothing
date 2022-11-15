import React from 'react'
import './App.scss';
import { Routes,Route } from 'react-router-dom';




import SignInAndSignUp from './pages/sign-In-and-sign-up/sign-in-and-sign-up.component';
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
        <Route path='/signin' element={<SignInAndSignUp/>}/>
      </Routes>
      </div>
  );
}

export default App;
