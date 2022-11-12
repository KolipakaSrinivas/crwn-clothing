import React from 'react';






// import FormInput from '../form-input/form-input.component';
class SignIn extends React.Component{

    constructor(){
        super();
        this.state={
            email:'',
            passward:''
        }
    }

    handleSubmit = (event) =>{
        event.preavntDefult()
        this.setState({email:'',passward:''})
    }
    handleChange = (event)=>{
        const {value,name} =event.traget
        this.setState({[name]:value})

    }



    render(){
        return(
            <div>
                <h1>I have already an account</h1>
                <span>sign in with your email and passward</span>
                <form onSubmit={this.state.handleSubmit}>
                    <input 
                    name='email'
                    type='email'
                    required
                    onChange={this.handleChange}
                    value={this.state.email}
                    />
                    <label>Email</label>
                    <input 
                    name='passward'
                    type='pasward'
                    required
                    onChange={this.handleChange}
                    value={this.state.passward}
                    />


                </form>
            </div>
        )
    }

}

export default SignIn