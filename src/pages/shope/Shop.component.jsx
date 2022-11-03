import {React,Component} from 'react'
import SHOP_DATA from './shopData'

class Shoppage extends Component{

    constructor(){
        super();
        this.state={
            collection:SHOP_DATA

        }
    }







    render(){
        return(
            <div>
                <h1>shop</h1>

            </div>
        )
    }
}

export default Shoppage