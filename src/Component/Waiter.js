import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWaiters, setWaiter } from '../Actions/actions'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'


class Waiter extends Component {

    state = {
        waiter: "",
        disabled: true
    }
    componentDidMount = () => {
        this.props.getWaiters()
    }
    handleWaiter = (id) => {
        this.setState({
            waiter: id,
            disabled: false
        })
    }

    render() {
        return (
            <div className="container text-center">
                <h1>Choose one Waiter</h1>
                <div className="row justify-content-center p-5">
                    {
                        this.props.waiters.map((e, i) => {
                            return <div className="col-4 p-5 m-1 bg-danger rounded" key={i} onClick={() => this.handleWaiter(e.id)}>
                                {e.waiterName}
                            </div>
                        })
                    }
                </div>
                <div className="">
                    <Link to='/order'><button className="btn btn-lg rounded-circle btn-info float-right m-5 fa fa-chevron-right p-3" onClick={() => this.props.setWaiter(this.state.waiter)} disabled={this.state.disabled}> </button>
                    </Link>

                </div>

            </div>
        );
    }
}

const getState = (state) => {
    return {
        waiters: state.waiter.waiters
    }
}

const changeState = (dispatch) => {
    return bindActionCreators({ getWaiters, setWaiter }, dispatch)
}


export default connect(getState, changeState)(Waiter)