import React from "react";
import { Link, NavLink } from "react-router";
import { useDispatch, useSelector} from 'react-redux'
import { logOut } from "../redux/actionType";
const Navbar = () => {
  const{isLog,user}=useSelector((state)=>state.loginUser)
  const dispatch=useDispatch()
  return (
    <div className="nav">
      <div>
        <h1>LOGO</h1>
      </div>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/favourite'>Favourite</NavLink>
        {!isLog && !user ? (
          <>
            <Link to='/login'>Log In</Link>
            <Link to='/register'>Register</Link>
          </>
        ) : (
          <button onClick={()=>dispatch(logOut())}>Log Out</button>
         )} 
      </div>
    </div>
  );
};

export default Navbar;
