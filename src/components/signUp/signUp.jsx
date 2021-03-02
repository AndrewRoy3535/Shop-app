import React, { Component } from "react";
import FormInput from "../formInput/formInput";
import CustomButton from "../customButton/customButton";
import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";

import "./signUp.scss";

export class signUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmedPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmedPassword } = this.state;

    if (password !== confirmedPassword) {
      alert(`password doesn't match`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDoc(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmedPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmedPassword } = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>sign up with your email and password</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            label='Display Name'
            onChange={this.handleChange}
            required></FormInput>
          <FormInput
            type='email'
            name='email'
            value={email}
            label='Email'
            onChange={this.handleChange}
            required></FormInput>
          <FormInput
            type='password'
            name='password'
            value={password}
            label='Password'
            onChange={this.handleChange}
            required></FormInput>
          <FormInput
            type='password'
            name='confirmedPassword'
            value={confirmedPassword}
            label='Confirmed Password'
            onChange={this.handleChange}
            required></FormInput>

          <CustomButton type='submit'>Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default signUp;
