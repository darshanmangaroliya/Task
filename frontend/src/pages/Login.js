import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userloginaction } from "../Action/userAction";
import { useNavigate } from "react-router-dom";
import Loadingbox from "../component/Loadingbox";
import MessageBox from "../component/MessageBox";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const navigate = useNavigate()

const {userinfo,loading,error} = useSelector(state=>state.userLogin)

const dispatch= useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
   dispatch(userloginaction(email,password))
  };
  useEffect(()=>{
   if(userinfo){
     navigate("/")
   }


  },[navigate,userinfo])
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        {loading && <Loadingbox/>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer? <Link to={"/Register"}>Create your account</Link>
          </div>
        </div>
      </form>
     <div className="center"> <Link to ={"/reset"}>forgot password</Link></div>
    </div>
  );
};

export default Login;
