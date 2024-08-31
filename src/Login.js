import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Login = () => {
  const [logindata, setlogindata] = React.useState({});
  const [error, seterror] = React.useState('');
  const [fill, setfill] = React.useState('');
  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
  };

  const handleclick = () => {
    // Reset messages
    seterror('');
    setfill('');

    // Check if fields are filled
    if (!logindata.email || !logindata.password) {
      setfill("Please fill all the fields");
      return;
    }

    const data = JSON.parse(localStorage.getItem("data")); 

    if (data) {
     
      if (data.email === logindata.email && data.password === logindata.password) {
      
        setTimeout(() => {
          navigate('/Expenses');
        }, 1000);
      } else {
        seterror("Invalid email or password");
      }
    } else {
      seterror("No user info found");
    }
  };

  return (
    <>
      <div className='myname'>
        {fill && <p style={{ color: 'red' }}>{fill}</p>}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={logindata.email }
          onChange={handlechange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={logindata.password }
          onChange={handlechange}
        />
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={()=>{handleclick()}}>Login</Button>
          <Button variant="contained" onClick={() => navigate('/')}>Registration</Button>
        </Stack>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </>
  );
};

export default Login;