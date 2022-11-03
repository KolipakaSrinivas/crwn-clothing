import {React,Component} from 'react'
import SHOP_DATA from './shopData'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class Shoppage extends Component{

    constructor(){
        super();
        this.state={
            collection:SHOP_DATA

        }
    }


    render(){

        const {collection}=this.state
        return(
            <div className='shoppage'>
                {
                    collection.map(({id,...othercollectionprops})=>(
                        <CollectionPreview  key={id}{...othercollectionprops}/>
                    ))
                }
            </div>
        )
    }
}

export default Shoppage