import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function UserSignUp() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
          // eslint-disable-next-line
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };
  
    return (
        <div>
          <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <FormControl margin="normal">
            <Box component="form" 
            noValidate 
            onSubmit={handleSubmit} 
            sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    required
                    fullWidth
                    id="userName"
                    label="User Name"
                    name="userName"
                  />
                </Grid>
              </Grid>
              <Grid container 
              spacing={2}>
                <Grid 
                item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid 
                item xs={12} 
                sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    inputProps={{minLength: 6}}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link to="/" variant="body2">
                    Already a member? Click here.
                  </Link>
                </Grid>
              </Grid>
            </Box>
            </FormControl>
          </Box>
          </Container>
        </div>
    );
  }

