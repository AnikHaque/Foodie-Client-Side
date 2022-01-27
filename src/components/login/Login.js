import { Container, Grid, Typography,Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
import login from '../../images/login.jpg';
const Login = () => {
    const [loginData,setLoginData] = useState({})
    const {user,loginUser,isLoading,authError,signInWithGoogle}=useAuth()
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
       const value = e.target.value;
        const newLoginData = {...loginData};
       newLoginData[field] = value;
        setLoginData(newLoginData);
  }

    const handleLoginSubmit = e => {
        loginUser(loginData.email,loginData.password,location,history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(useLocation,useHistory);
     }
    return (
        <div>
            <h1 className='text-center fw-bold mt-5 mb-5'>Please Login</h1>
            <div class="container">
  <div class="row">
  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        
        <form onSubmit={handleLoginSubmit} className="login text-white p-5 login">
    <TextField 
    sx={{width:'75%', m:1}}
    name="email"
    id="standard-basic" 
    label="Your Email"
    onChange={handleOnChange}
     variant="standard"
     
    
      />
    <TextField
    sx={{width:'75%', m:1}}
    name="password"
    className='bg-light'
              id="standard-basic"
              label="Your Password"
              onChange={handleOnChange}
              type="password"
              variant="standard"
    />
    <Button sx={{width:'75%', m:1}} variant="contained" type="submit" className='bg-dark text-white'>Login</Button>
    <Link style={{textDecoration:'none', }} to="/register">
    <Button variant="text" className="text-dark">First Time Here??? Please Register</Button>
    
    </Link>
    
    </form>
    <p className='text-dark  fw-bold mx-5'>..............   or   ...............</p>
        
     <Button onClick={handleGoogleSignIn} className="bg-dark text-white px-2 pe-4  pt-3 pb-2 mb-5 mx-5"><i class="fab fa-google px-3 fs-4 text-white"></i>Sign In With Google</Button>
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

export default Login;