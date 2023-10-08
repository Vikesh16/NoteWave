// import React, {useState} from 'react'
// import { useHistory } from 'react-router-dom'


// const Login = (props) => {
//     const [credentials, setCredentials] = useState({email: "", password: ""}) 
//     let history = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch("http://localhost:5000/api/auth/login", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({email: credentials.email, password: credentials.password})
//         });
//         const json = await response.json()
//         console.log(json);
//         if (json.success){
//             // Save the auth token and redirect
//             localStorage.setItem('token', json.authtoken); 
//             history.push("/");

//         }
//         else{
//             alert("Invalid credentials");
//         }
//     }

//     const onChange = (e)=>{
//         setCredentials({...credentials, [e.target.name]: e.target.value})
//     }

//     return (
//         <div>
//             <form  onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email address</label>
//                     <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
//                 </div>

//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Login
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  ThemeProvider,
} from '@mui/material';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();

const Login = (props) => {
  const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            history.push("/");

        }
        else{
            alert("Invalid credentials");
        }
    }

    const handleChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '50%' }} style={{padding:'5%' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={credentials.email}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={credentials.password}
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;