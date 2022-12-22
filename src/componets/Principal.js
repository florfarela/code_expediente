import React from 'react'
import { useAuth0  } from '@auth0/auth0-react';

const Principal = () => {

const { loginWithRedirect  } = useAuth0();

return(
     <div className='conta'>
    <div className='glass'>
     <div className='conta-two'>
     <div className='img'></div>
     </div>
     </div>
     <div className='letter'>Welcome to National Hospital</div>
     <div className='conta-boto'>
        <button onClick={() => loginWithRedirect()} className='btn btn-success' id='bt'>start session</button>
        
    </div>
    <div className='conte-img'></div>
    </div>
);

}

export default Principal