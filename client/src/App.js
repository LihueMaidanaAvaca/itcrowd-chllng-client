import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './components/home/Home.jsx';
import React from 'react';
import { Landing } from './components/landing/Landing';
import NewProduct from './components/newproduct/NewProduct';
import Details from './components/details/Details'
import EditProduct from './components/editproduct/EditProduct';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component= {Landing}/>
          <Route path = '/home' component= {Home}/>
          <Route path = '/new' component= {NewProduct}/>
          <Route path = '/:id' component= {Details}/>
          <Route exact path = '/edit/:id' component={EditProduct}/>
         </Switch>
    </Router>
  );
}

export default App;