import React from 'react';
import CollectionItems from '../Collection-items/Collection-items.componet';
import './collection-preview.style.scss'

const CollectionPreview = ({title,items}) =>{
    return(
        <div className='collection-preview'>
            <h1 className='title' >{title.toUpperCase()}</h1>
           <div className='preview'>
            {
                items.filter((items,index)=> index < 4 )
                .map(({id,...otheritemsprops})=>(
                    <CollectionItems key={id} {...otheritemsprops} />
                ))
            
            }
            </div>
        </div>
    )
} 

export default CollectionPreview