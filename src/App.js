import React,{Component} from 'react';
import Table from './Component/Table'
import Order from './Component/Order'
import Waiter from './Component/Waiter'
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom'


class App extends Component {
  render() { 
    return (<BrowserRouter>
    <Route path="/" exact><Redirect to="/table"/></Route>
    <Route path="/table" component={Table} exact/>
    <Route path="/waiter" component={Waiter} exact/>
    <Route path="/order" component={Order} exact/>
    </BrowserRouter>  );
  }
}

export default App;
