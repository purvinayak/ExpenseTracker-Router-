import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {

  const data = JSON.parse(localStorage.getItem("data"));

  
  const Authenticated = () => {
    return data;  
  };
  return(
  <div>
   {Authenticated()?children:<Navigate to='/Login'/>};
   </div>
)
};

export default PrivateRouter;