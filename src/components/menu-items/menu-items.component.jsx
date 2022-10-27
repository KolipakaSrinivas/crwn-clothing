import React from 'react'
import './menu-items.style.scss'


const Menuitems = (props) =>{
    return(
        
         <div
         style={{
            backgroundImage:`url(${props.imageUrl})`
         }}
         className={`${props.size} menu-item`}>
            <div className='content'>
               <h1 className='title'>{props.title}</h1>
               <span className='subtitle'>Shop Now</span>
            </div>
        </div>       
    )
}

export default Menuitems