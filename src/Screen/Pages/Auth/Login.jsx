import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField, Button, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="p-8 rounded shadow-md text-center bg-white">
        <Typography variant="h3" className="text-blue-600 font-[900] mb-4">
        <strong>  Login </strong>
        </Typography>
        <Typography variant="body1" className="text-gray-700 my-10">
          Welcome back!
        </Typography>
        <form onSubmit={handleSubmit} className="w-full">
          <TextField
            className="mb-4 w-[60%]"
            
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            InputProps={{
              classes: {
                root: 'h-10',
              },
            }}
          />
          <TextField
            className="mb-4 w-[60%]"
            
            label="Password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
              classes: {
                root: 'h-10',
              },
            }}
          />
          <Button
            className="mb-4"
            variant="contained"
            color="primary"
            type="submit"
            style={{ borderRadius: '20px' }}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
