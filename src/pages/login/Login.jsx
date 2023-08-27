import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/authSlise';
import back from "../../assets/images/my-account.jpg";

const Login = () => {
  const dispatch = useDispatch();
  const handleSibmit = e => {
    e.preventDefault()
    dispatch(authActions.login())
  };
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>My Account</h1>
            </div>
          </div>

          <form onSubmit={handleSibmit}>
            <span>Username or Email address</span>
            <input type='text' required />
            <span>Password * </span>
            <input type='password' required />
            <button className='button'>Log in </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login;