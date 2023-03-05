import "./css/index.css";
import "./css/App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/register"
import Login from "./pages/login";
import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";
import Home from "./pages/home";


function App() {
  return(
    <>
      <Home/>
        <Router>
              <div className="route">
                <AuthProvider>
                  <SideBar />
                  <Routes>
                    <Route path="/login"  element={<Login/>}  />
                    <Route path="/register" element={<Register/>} />
                    <Route element={Home} path="/" />
                  </Routes>
                </AuthProvider>
              </div>
            </Router>
      </>
  )
  
}  
    

          
          
      
export default App;


