
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,
Switch,
 Route,
} from "react-router-dom" ; 

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
      
      
      
      
        <Navbar/>
       <Switch> 
         <Route exact path ="/" > <News country ="in" key ="general" category ="general"/></Route>
       <Route exact path ="/sports"><News  key= "sports" country="in" category="sports"/></Route>
       <Route exact path ="/science"><News country="in"  key ="science" category="science"/></Route>
       <Route exact path ="/business"><News country="in"  key=" business" category="business"/></Route>
       <Route exact path ="/entertainment"><News country="in"  key="entertainment" category="entertainment"/></Route>
       <Route exact path ="/technology"><News country="in" key="technology" category="technology"/></Route>
       <Route exact path ="/health"><News country="in" key="health" category="health"/></Route>
       </Switch>
       
       
      </div>
      </Router>
    )
  }
}

