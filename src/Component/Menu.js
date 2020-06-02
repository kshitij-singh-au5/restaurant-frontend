import React, { Component } from 'react';
class Menu extends Component {
    state = {
        quantity : "",
        disabled: true
    }
    
    changeQty = (val) => {
        this.setState({
            quantity: val
        })
    }
    componentDidUpdate = (p,s) => {
        if(s.quantity != this.state.quantity){
            if(this.state.quantity > 0 ){
                this.setState({
                    disabled: false
                })
            }
            else{
                this.setState({
                    disabled: true
                })
            }
        }
    }

    render() {
        return (
            <tr>
                <td>{this.props.e.itemName}</td>
                <td><input type="text" className="w-100" value={this.state.quantity} onChange={(event)=>this.changeQty(event.target.value)}/></td>
                <td>{this.props.e.itemPrice}</td>
                <td><button className="btn btn-sm rounded-circle btn-success" onClick={() => this.props.addToCart(this.props.e, this.state.quantity)} disabled = {this.state.disabled}><i class="fa fa-plus"></i></button></td>
            </tr>
        );
    }
}

export default Menu;