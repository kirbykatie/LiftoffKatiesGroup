import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function UserLogIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateEm, setValidateEm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setEmail(data.email);
    setValidateEm(validEmail(data.get("email")));
    console.log(validateEm);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    /*        <div>
           <Card elevation={4}>
                <CardHeader component="form" 
                 onSubmit={handleSubmit}
                 title="My Dewey Library Card" 
                 subheader="Please log in to continue" />
                <CardContent>
                    <></>
                </CardContent>
            </Card>
        </div>*/

    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            My Dewey Library Card
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              error={validateEm}
              helperText="Please enter a valid email."
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              inputProps={{ minLength: 6 }}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
