import React from 'react';
import './header.styles.scss'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../Assects/log.svg'
const Header = () =>{
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/signin'>signin</Link>
            </div>
        </div>
    )
}

export default Header