import React from 'react';


class SignIn extends React.Component{
    
    constructor(){
        super();
        this.state={
            email:'',
            passward:''
        }
    }
    
    handlesubmit=(event)=>{
        event.preventdefult();
        this.setState({email:'',passward:''})
    }

    handelChange = (event)=>{
        const {value,name} = event.traget
        this.setState({[name]:value})
    }
    
    
    
    
    
    
    render(){
        return(
            <div className='sign-in'>
                <h1>I have aldery have account</h1>
                <span>sign with email and passward</span>
                <form>
                    <input
                     name='name'
                     type='name'
                     value={this.state.email}  
                     onChange={this.handelChange}
                     required
                    />
                    <label>Name</label>

                    <input 
                    name='name'
                    type='email'
                    value={this.state.passward} 
                    onChange={this.handelChange}
                    required
                     />

                    <label>Email</label>

                    <input name='submit' type='submit' value='sumbit form'/>
                </form>

            </div>
        )
    }
}

export default SignIn