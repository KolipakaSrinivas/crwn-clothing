import React from 'react';
import SHOP_DATA from './shopData'
import CollectionPreview from '../../components/CollectionPreview/Collection-preview.componet'

class ShopPage extends React.Component{

    constructor(){
        super();
        this.state={
            collection:SHOP_DATA
        }
    }





    render(){

        const collection =this.state.collection



        return(
            <div>
                {
                    collection.map(({id,...othercollectionprops})=>(
                        <CollectionPreview ket={id} {...othercollectionprops}/>

                    ))
                }    
            </div>
        )
    }
}

export default ShopPage