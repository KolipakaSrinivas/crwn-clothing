import React from 'react';

const CollectionPreview = ({title,items}) =>{
    return(
        <div>
            <h1 className='title'>{title}</h1>
            {
                items.filter((items,index)=> index < 4 )
                .map((items)=>(
                    <div>{items.name}</div>
                ))
            }
        </div>
    )
} 

export default CollectionPreview