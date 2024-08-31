
import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

import './Registration.css'; // Import the CSS file

function Registration() {
  const [data, setdata] = React.useState({});
  const [showAlert, setShowAlert] = React.useState(false);
  const navigate = useNavigate();

  const handleclick = () => {
    localStorage.setItem("data", JSON.stringify(data));
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  return (
    <div className='myclass'>
    <>
    
      <div className="registration-container">
        <div className="registration-form">
          <h1>Registration page</h1>
          <label>First Name</label>
          <TextField
            variant="outlined"
            name="fname"
            value={data.fname }
            onChange={handlechange}
          />
          <label>Last Name</label>
          <TextField
            variant="outlined"
            name="lname"
            value={data.lname }
            onChange={handlechange}
          />
          <label>Email</label>
          <TextField
            variant="outlined"
            name="email"
            type="email"
            value={data.email }
            onChange={handlechange}
          />
          <label>Password</label>
          <TextField
            variant="outlined"
            name="password"
            type="password"
            value={data.password }
            onChange={handlechange}
          />
          <Button variant="contained" onClick={handleclick}>Registration</Button>
          <Button variant="contained" onClick={() => navigate("/Login")} >Login</Button>
        </div>
      </div>
      {showAlert && (
        <Stack className="alert-container" spacing={2}>
          <Alert severity="success">Successful Registration.</Alert>
        </Stack>
      )}
     
    </>
     </div>
  );
}

export default Registration;