import React from 'react'
import '../../components/collection-preview/collecion-preview.style.sass'

const CollectionPreview = ({title,items,routeName}) =>{
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item,index)=>index < 4)
                    .map(items=>(
                           <div key={items.id}>{items.name}</div> 
                        )
                    )

                }
            </div>
        </div>
    )
}

export default CollectionPreview