import React from 'react';
import './Styles/styles.scss';
import {Switch, Route, Redirect} from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext"
import User from "./Components/User";
import ProtectedRoute from "./Components/ProtectedRoute";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Redirect to="/user" />
          </Route>
          <ProtectedRoute path="/user">
            
              <User />
            
          </ProtectedRoute>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </AuthProvider>
    </div>
  )
}

export default App;