import { Container, Grid, Typography,Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link, useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../images/login.jpg';
import './Login.css';
const loginImage = {
    width:'580px'
}
const Register = () => {

const [loginData,setLoginData] = useState({})
 const history = useHistory();
 const location = useLocation();

 const {user, registerUser, isLoading,authError,signInWithGoogle} = useAuth()
const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
}

    const handleLoginSubmit = e => {
        if(loginData.password !=loginData.password2){
            alert('Your Password did not match');
            return

        }
        registerUser(loginData.email, loginData.password,loginData.name, history);
         e.preventDefault();
    }
    const handleGoogleSignIn = () => {
         signInWithGoogle(useLocation,useHistory);
    }
    return (
        <div>
            <h1 className='text-center fw-bold mt-5 mb-5'>Please Register</h1>
            <div class="container">
  <div class="row">
  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        
  <form className=" text-dark p-5 mb-5 login" onSubmit={handleLoginSubmit}>
    <TextField 
    sx={{width:'75%', m:1}}
    name="email"
    id="standard-basic" 
    label="Your Email"
    type="email"
    onChange={handleOnChange}
     variant="standard"
    />
    
    <TextField 
sx={{width:'75%', m:1}}
name="name"
id="standard-basic" 
label="Your Name"
onChange={handleOnChange}
 variant="standard"

  />
    
    <TextField
    sx={{width:'75%', m:1}}
    name="password"
              id="standard-basic"
              label="Your Password"
              onChange={handleOnChange}
              type="password"
              variant="standard"
    />
    
    <TextField
    sx={{width:'75%', m:1}}
    name="password2"
              id="standard-basic"
              label="ReType Your Password"
              onChange={handleOnChange}
              type="password"
              variant="standard"
    />
    <Button sx={{width:'75%', m:1}} variant="contained" type="submit" className='text-white bg-dark'>Register</Button>
    <Link style={{textDecoration:'none', marginLeft:'50px'}} to="/login">
    <Button variant="text" className="text-dark fw-bold">Already Registered??? Please Login</Button>
    
    </Link>
    <p className='text-dark  fw-bold mx-5'>..............   or   ...............</p>
    <Button onClick={handleGoogleSignIn} className="bg-dark text-white px-2 pe-4  pt-3 pb-2 mb-5 mx-5"><i class="fab fa-google px-3 fs-4 text-white"></i>Sign In With Google</Button>
    </form>
    
        
     
     {
        isLoading && <CircularProgress color="inherit" />
    
    }
    {
        user?.email && <Alert severity="success">Successfully Logged In</Alert>
    
    }
    {
        authError && <Alert severity="error">Login Failed!!!</Alert>
    
    
    }  
        </div>

    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
     <img src={login} className='img-fluid w-100 mb-5'></img>
    </div>
   
    
  </div>
</div>
        </div>
    );
};

export default Register;