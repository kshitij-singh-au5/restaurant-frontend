import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import {getTable,selectTable} from '../Actions/actions';


class Table extends Component {
    state = {
        selectTable: "",
        disabled: true
    }

    setTable = (data) => {
        this.setState({
            selectTable:data,
            disabled: false
        })
    }
    componentDidMount = () => {
        this.props.getTable()
    }
    render() {console.log(this.props)
        return(
            <div className="container text-center">
                <h1 className="mt-3">Choose one Table</h1>
                <div className="row justify-content-center p-5">
                    {
                        this.props.tables.map((ele,i)=>{
                        return <div onClick={()=>this.setTable(ele.id)} className="col-4 p-5 m-1 bg-info rounded" key={i}>
                            Table {i+1}
                            </div>
                        })
                    }
                    
                </div>
                <div className="">
                    <Link to ='/waiter'><button onClick={this.props.selectTable(this.state.selectTable)} disabled={this.state.disabled} className="btn btn-lg rounded-circle btn-info float-right m-5 fa fa-chevron-right p-3 " > </button>
                    </Link>
                    
                </div>
            </div>
        )
    }
}

const getState = (state) => {console.log(state)
    return {
        tables: state.table.tables
    }
}

const changeState = (dispatch) => {
    return bindActionCreators({getTable,selectTable},dispatch)
}


export default connect(getState, changeState)(Table)