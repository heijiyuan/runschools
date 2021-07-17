import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {  Provider  } from 'react-redux';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import store from './models/index'
import Home from './pages/home/index'
import Login from './pages/Login/index'

function App() {
  return (
   <Provider store={store}>
     <Router>
       <Switch>
         {/* {renderRender(mainRouters)} */}
            <Route path="/" exact component={Login}/>
            <Route path="/home"  component={Home}/>
            {/* <Route path="/index"  component={Index}/> */}
       </Switch>
     </Router>
   </Provider>
  );
}

export default App;
