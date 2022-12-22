import React from 'react'

import { BrowserRouter, Link } from'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
const { logout } = useAuth0();
return (
    
    <div>
    
    <button onClick={()=>logout({returnTo: window.location.origin})}>logout</button>
    </div>
    
  )
}

export default Logout