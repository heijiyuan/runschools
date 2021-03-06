import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {  Provider  } from 'react-redux';
import { Switch, HashRouter as Router, Route ,Redirect} from 'react-router-dom'
import store from './models/index'

import loadable from '@loadable/component'

const Login = loadable(() => import('./pages/Login'))
const Tealogin = loadable(() => import('./pages/teaLogin'))
const Home  = loadable(() => import('./pages/home'))
const Start  = loadable(() => import('./pages/start'))
function App() {
  return (
   <Provider store={store}>
     <Router>
       <Switch>
            {/* <Route path="/" exact component={Start}/> */}
            <Route path="/Login"  component={Login}/>
            <Route path="/Tealogin"  component={Tealogin}/>
            <Route path="/home"   component={Home}/>
            <Redirect to="/Login"/>
       </Switch>
     </Router>
   </Provider>
  );
}

export default App;
