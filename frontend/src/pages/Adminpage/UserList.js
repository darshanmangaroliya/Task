import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { alluseraction,deleteUser } from "../../Action/userAction";
import Loadingbox from "../../component/Loadingbox";
import MessageBox from "../../component/MessageBox";
import { USER_DETAILS_RESET } from "../../Constant/userConstant";

const UserList = () => {
  const navigate = useNavigate();


  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const [page,setPage] = useState(1)

const handleprevpage = ()=> {
    setPage(users.previous.page)

}

const handlenextpage = ()=> {
    setPage(users.next.page)

}

  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(alluseraction(page));
    dispatch({
      type: USER_DETAILS_RESET,
    });
  }, [dispatch,successDelete,page]);
  const deleteHandler = (user) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(user._id));
    }
  };

  return (
    <div>
      <h1>Users</h1>
      {loadingDelete && <Loadingbox />}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {successDelete && (
        <MessageBox variant="success">User Deleted Successfully</MessageBox>
      )}
      {loading ? (
        <Loadingbox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>IS ADMIN</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.results.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? "YES" : "NO"}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => navigate(`/user/${user._id}/edit`)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="pagination">
          {users?.previous&&<button className="small" onClick={handleprevpage} >prev</button>}
         {users?.next && <button className="small" onClick={handlenextpage} >next</button>}
      </div>
    </div>
  );
};

export default UserList;
