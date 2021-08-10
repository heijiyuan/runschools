import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {  Provider  } from 'react-redux';
import { Switch, HashRouter as Router, Route } from 'react-router-dom'
import store from './models/index'

import loadable from '@loadable/component'

const Login = loadable(() => import('./pages/Login/index'))
const Tealogin = loadable(() => import('./pages/teaLogin'))
const Home  = loadable(() => import('./pages/home'))

function App() {
  return (
   <Provider store={store}>
     <Router>
       <Switch>
         {/* {renderRender(mainRouters)} */}
            <Route path="/" exact component={Login}/>
            <Route path="/Tealogin"  component={Tealogin}/>
            <Route path="/home"   component={Home}/>
       </Switch>
     </Router>
   </Provider>
  );
}

export default App;
