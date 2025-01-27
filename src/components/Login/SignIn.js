import React, { Component } from 'react'
import FormInput from './FormInput';
import CustomButton from '../Button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        label="email"
                        required 
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        label="password"
                        required 
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
                    </div>       
                </form>
            </div>
        )
    }
}
