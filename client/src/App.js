import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Addmovie from "./Components/AddMovies";
import Admin from "./Components/Admin";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import AdminRoute from "./Components/PrivateRoute/AdminRoute";
import PrivateRoute from "./Components/PrivateRoute/privateRoute";

import Profile from "./Components/Profile";
import Register from "./Components/register";
import { getcurrent } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/signUp" element={<Register></Register>} />
        <Route path="/signIn" element={<Login></Login>} />
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/add" element={<Addmovie></Addmovie>}></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin></Admin>
            </AdminRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;