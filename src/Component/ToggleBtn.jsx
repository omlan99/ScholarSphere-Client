import React from 'react';
import { Link } from 'react-router-dom';

const ToggleBtn = () => {
    return (
    
            <div className="join mt-12 justify-center">
            <Link to={'/login'}> 
            <button
              className="join-item btn"
               >Login</button></Link>
            <Link to={'/signup'}>
            <button
              className="join-item btn btn-clicked"
              type="radio"
              name="options"
              aria-label="Sign Up"
              
            > SignUp</button>
            

            </Link>
          </div>
        
    );
};

export default ToggleBtn;