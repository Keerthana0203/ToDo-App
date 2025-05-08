import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Must be at least 6 characters').required('Required')
    }),
    onSubmit: (values) => {
      // Dummy credentials check
      if (values.email === 'keerthana@gmail.com' && values.password === '987456') {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/dashboard');
      } else {
        alert('Invalid credentials');
      }
    }
  });

  return (
    <Container maxWidth="xs" sx={{ mt: 8, mb: 4 , p: 4, borderRadius: 3, boxShadow: 4 ,border: '1px solid rgb(221, 108, 226)',marginLeft: '530px', background:'linear-gradient(to right,rgb(218, 99, 137),rgb(167, 105, 188))'}}>
      <Typography variant="h5" gutterBottom sx={{ mb: 2,textAlign: 'center' ,color: 'black'}}>
        Login
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ mb: 2,
            mt: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              '& fieldset': {
                borderColor: 'black', // default border
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white', // focused border
              },
              '& input::placeholder': {
                color: 'black', // default placeholder
                opacity: 1,
              },
              '&.Mui-focused input::placeholder': {
                color: 'white', // focused placeholder
                opacity: 1,
              },
            },
            input: {
              color: 'black', // optional input text color (can stay black)
            },
            '& label': {
              color: 'black',
            },
            '& .Mui-focused label': {
              color: 'white',
            },
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ mb: 2,
            mt: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              '& fieldset': {
                borderColor: 'black', // default border
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white', 
              },
              '& input::placeholder': {
                color: 'black', 
                opacity: 1,
              },
              '&.Mui-focused input::placeholder': {
                color: 'white', 
                opacity: 1,
              },
            },
            input: {
              color: 'black', 
            },
            '& label': {
              color: 'black',
            },
            '& .Mui-focused label': {
              color: 'white',
            },}}
        />
        <Button color="secondary" variant="contained" fullWidth type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
