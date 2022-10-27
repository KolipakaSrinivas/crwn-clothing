import React from 'react'
import './Homepage.style.scss'

const Homepage = () =>{
    return(
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Hates</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>jackets</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>snakers</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Womens</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Mans</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Homepage