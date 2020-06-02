import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMenu, addToCart, deleteCart, setBill, handleName, handleNumber, handlePayment } from '../Actions/actions'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import Menu from './Menu'
class Order extends Component {
    
    componentDidMount = () => {
        this.props.getMenu()
    }
    
    render() {
        let order = {
            userName: this.props.customerName,
            userMobile: this.props.customerMobile,
            totalPrice: this.props.cartTotal,
            paymentMode: this.props.paymentMethod,
            waiterId: this.props.waiter,
            tableId: this.props.table,
            itemsOrdered: this.props.cart
            
        }
        return (
            <div className="container">
                <div className="row justify-content-center mt-5 bg-dark text-white p-2">
                    <div className="col-5">
                        <h3 className="text-center">Customer</h3>
                        <form action="">
                            <label htmlFor="input">Customer Name:</label>
                            <input type="text" className="form-control"  onChange={(event) => this.props.handleName(event.target.value)} />
                            <label htmlFor="input">Customer Number:</label>
                            <input type="number" className="form-control" maxLength="10" onChange={(event) => this.props.handleNumber(event.target.value)} />
                            <div className="mt-3">
                                <label class="radio-inline px-3"><input type="radio" name="optradio" value="cash" onChange={(event)=>{this.props.handlePayment(event.target.value)}}/> Cash</label>
                                <label class="radio-inline px-3"><input type="radio" name="optradio" value="card" onChange={(event)=>{this.props.handlePayment(event.target.value)}}/> Card</label>
                                <label class="radio-inline px-3"><input type="radio" name="optradio" value="paytm" onChange={(event)=>{this.props.handlePayment(event.target.value)}}/> Paytm</label>
                            </div>
                        </form>
                        <div className="mt-5">
                            <h6 className="text-center">Menu</h6>
                            <table className="table text-center text-white">
                                <thead className="thead-dark">
                                    <tr>
                                        <th className="col-6">Item</th>
                                        <th className="col-2">Quantity</th>
                                        <th className="col-2">Price</th>
                                        <th className="col-2">Add</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.menu.map((e, i) => {
                                        return <Menu e={e} i={i} addToCart={this.props.addToCart} />
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-5">
                        <h3 className="text-center">Cart</h3>
                        <div>
                            <table className="table text-white text-center">
                                <thead className="thead-dark">
                                    <tr>
                                        <th className="col-6">Item</th>
                                        <th className="col-2">Quantity</th>
                                        <th className="col-2">Price</th>
                                        <th className="col-2">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.cart.map((e, i) => {
                                        return <tr>
                                            <td>{e.item.itemName}</td>
                                            <td>{e.quantity}</td>
                                            <td>{e.item.itemPrice}</td>
                                            <td><button className="btn btn-sm btn-danger" onClick={() => this.props.deleteCart(i)}><i class="fa fa-trash-o"></i></button></td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <p className="float-left pl-5 pt-2">Total: Rs.{this.props.cartTotal}</p>
                            <button className="float-right btn btn-info" onClick={()=>{this.props.setBill(order)}}>Generate bill</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const stateToProps = (state) => {
    console.log(state)
    return {
        menu: state.order.menu,
        cart: state.order.cart,
        cartTotal: state.order.cartTotal,
        waiter: state.waiter.selectedWaiter,
        table: state.table.selectedTable,
        customerName: state.order.customerName,
        customerMobile: state.order.customerNumber,
        paymentMethod: state.order.payMethod
    }
}
const changesToState = (dispatch) => {
    return bindActionCreators({ getMenu, addToCart, deleteCart, setBill, handleName, handleNumber, handlePayment }, dispatch)
}
export default connect(stateToProps, changesToState)(Order);