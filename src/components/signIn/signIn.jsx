import React, { Component } from "react";
import FormInput from "../formInput/formInput";
import CustomButton from "../customButton/customButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./signIn.scss";

export class signIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: " ",
      password: " ",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            handleChange={this.handleChange}
            value={this.state.email}
            required
            label='email'
          />

          <FormInput
            type='password'
            name='password'
            handleChange={this.handleChange}
            value={this.state.password}
            required
            label='password'
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default signIn;
