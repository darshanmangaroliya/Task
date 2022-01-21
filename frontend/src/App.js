import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminRoute from "./component/AdminPriveteRoute";
import Header from "./component/Header";
import PrivateRoute from "./component/PrivateRoute";
import UserList from "./pages/Adminpage/UserList";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import UserEditpage from "./pages/UserEditpage";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/userlist"
          element={
            <AdminRoute>
              <UserList />
            </AdminRoute>
          }
        />
        <Route
          path="/user/:id/edit"
          element={
            <AdminRoute>
              <UserEditpage />
            </AdminRoute>
          }
        />

        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
