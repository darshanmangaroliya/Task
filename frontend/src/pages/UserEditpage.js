import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { detailsUser, updateUser } from "../Action/userAction";
import Loadingbox from "../component/Loadingbox";
import MessageBox from "../component/MessageBox";
import { USER_UPDATE_RESET } from "../Constant/userConstant";

const UserEditpage = () => {

    const navigate = useNavigate();
  const params = useParams();
  const { id: userId } = params;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
    const [isAdmin, setIsAdmin] = useState(false);

    const dispatch = useDispatch();
    
    const {error,loading,user} = useSelector((state) => state.userDetails);
    
    const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
} = userUpdate;

useEffect(() => {
    if (successUpdate) {
        dispatch({ type: USER_UPDATE_RESET });
        navigate('/userlist');
    }
    if (!user) {
        dispatch(detailsUser(userId));
    } else {
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
    }
}, [dispatch, navigate,  user, userId,successUpdate]);
const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(updateUser({ _id: userId, name, email, isAdmin }));
}
  return (
    <div>
      <div>
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h1>Edit User {name}</h1>
            {loadingUpdate && <Loadingbox/>}
          {errorUpdate && (
            <MessageBox variant="danger">{errorUpdate}</MessageBox>
          )}
          </div>
           {loading ? (
          <Loadingbox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
           
          
            <div>
              <label htmlFor="isAdmin">Is Admin</label>
              <input
                id="isAdmin"
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></input>
            </div>
            <div>
              <button type="submit" className="primary">
                Update
              </button>
            </div>
          </>
          )} 
        </form>
      </div>
    </div>
  );
};

export default UserEditpage;
