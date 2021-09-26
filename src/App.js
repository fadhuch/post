import React from 'react';
import './components/FontawesomeIcons'
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import MyProvider from './components/context/Provider';
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'


function App() {
  return (
    <div className="App">
      <MyProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
      </Switch>
      </BrowserRouter>
      </MyProvider>
    </div>
);
}

export default App;
