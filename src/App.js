import React,{Component} from 'react';
import Table from './Component/Table'
import Order from './Component/Order'
import Waiter from './Component/Waiter'
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom'


class App extends Component {
  render() { 
    return (<BrowserRouter>
    <Route path="/table" component={Table} />
    <Route path="/waiter" component={Waiter} />
    <Route path="/order" component={Order} />
    <Route path="/" exact><Redirect to="/table"/></Route>
    </BrowserRouter>  );
  }
}

export default App;
