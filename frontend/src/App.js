import "./css/index.css";
import "./css/App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/register"
import Login from "./pages/login";
import React, { Component } from "react";
import User from "./utils/user";
import Modal from "./components/Modal";
import axios from "axios";
import Home from "./pages/home";
import ProtectedPage from "./utils/user";


function App() {
  return(
    <>
      <Home/>
        <Router>
              <div className="route">
                <AuthProvider>
                  <NavBar />
                  <Routes>
                    <Route path="/status" element={<User/>}/>
                    <Route path="/login"  element={<Login/>}  />
                    <Route path="/register" element={<Register/>} />
                    <Route  path="/" element={Home}/>

                  </Routes>
                </AuthProvider>
              </div>
            </Router>
      </>
  )
  
}  
    

          
          
      
export default App;


