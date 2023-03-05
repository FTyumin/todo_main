import React from "react";
import "./css/index.css";
import "./css/App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return(
    <Router>
      <div>
        <AuthProvider>
          <SideBar/>
          <Switch>
            <Route component={Home} path="/"/>
            <Route component={Register} path="/register"/>
            <Route component={Login} path="/login"/>
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  )
}

export default App;
