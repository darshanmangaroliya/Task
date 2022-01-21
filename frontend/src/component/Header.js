import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signoutaction } from "../Action/userAction";

const Header = () => {
  const {userinfo} =useSelector(state=>state.userLogin) ;
  const dispatch = useDispatch()
  const signoutHandler = () => {
 dispatch(signoutaction)

  };
  return(
  <header className="row">
    <div>
      <Link className="brand" to="/">
        Task
      </Link>
    </div>
    <div className="page">
    <div>
      <Link  to="/page1">
        Page1
      </Link>
    </div>
    <div>
      <Link  to="/page2">
        Page2
      </Link>
    </div>
    </div>
    <div>
      {userinfo ? (
        <div className="dropdown">
          <Link to="#">
           {userinfo.name} <i className="fa fa-caret-down"></i>{" "}
          </Link>
          <ul className="dropdown-content">
            <li>
              <Link to="/profile">User Profile</Link>
            </li>
           
            <li>
              <Link to="#signout" onClick={signoutHandler}>
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
      {userinfo && userinfo.isAdmin && (
        <div className="dropdown">
          <Link to="#admin">
            Admin <i className="fa fa-caret-down"></i>
          </Link>
          <ul className="dropdown-content">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
           
            <li>
              <Link to="/userlist">Users</Link>
            </li>
          </ul>
        </div>
      )} 
    </div>
  </header>);
  };

export default Header;
