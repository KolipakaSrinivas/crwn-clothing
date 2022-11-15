import React from 'react';
import './sign-in.style.scss'






import FormInput from '../form-input/form-input.component'

class SignIn extends React.Component{

    constructor(){
        super();
        this.state={
            email:'',
            passward:''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefult()
        this.setState({email:'',passward:''})
    }

    handleChange = (event) =>{
        const {value,name} = event.traget
        this.setState({[value]:name})

    }




    render(){
        return(
            <div className='signin'>
                <h1>I already have an account</h1>
                <span>sign in with your email and passward</span>
                <form onChange={this.handleSubmit}>
                    <FormInput type='email' name='email' value={this.state.email} label='email' handleChange={this.handleChange}/>
                    <FormInput type='passward' name='passward' value={this.state.passward} label='passward' handleChange={this.handleChange}/>
                    <input type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}

export default  SignIn 