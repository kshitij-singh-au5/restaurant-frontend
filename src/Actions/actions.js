import axios from 'axios'

export const getTable = () => {
    let table = axios.get('https://billing-restaurant.herokuapp.com/table')
    // table.then(res => {
    //     console.log(res.data)
    // })
    // return {type: ""}
    return dispatch => {
        table.then(res => {
            dispatch({
                type: 'get-tables',
                payload: res.data
            })
        })
    }
    
}

export const selectTable = (id) => {
    return {
        type: "select-tables",
        payload: id
    }
}

export const getWaiters = () => {
    let req = axios.get('https://billing-restaurant.herokuapp.com/waiter')
    return dispatch => {
        req.then(resp => {
            dispatch({
                type: "get-waiters",
                payload: resp.data
            })
        })
    }
}

export const setWaiter = (id) => {
    return {
        type: 'set-waiter',
        payload: id
    }
}

export const getMenu = () => {
    let req = axios.get('https://billing-restaurant.herokuapp.com/menu')
    return dispatch => {
        req.then(res => {
            dispatch({
                type: 'get-menu',
                payload: res.data
            })
        })
    }
}

export const addToCart = (item,quantity) => {
    return {
        type: "add-to-cart",
        payload: {
            item: item,
            quantity: quantity
        }
    }
}

export const deleteCart = (index) => {
    return {
        type: 'delete-from-cart',
        payload: index
    }
}

export const setBill = (data) => {
    let request = axios.post("https://billing-restaurant.herokuapp.com/order",data)
    return dispatch => {
        request.then(response => {
            dispatch({
                type: 'set-bill'
            })
        })
    }
    // request.then(res => {
    //     console.log('hi',res.data)
        
    // })

    // request.catch(error => {
    //     console.log(error)
    // })
    
    // return {type:""}
}

export const handleName = (data) => {
    return {
        type: 'customer-name',
        payload: data
    }
}

export const handleNumber = (data) => {
    return {
        type: 'customer-number',
        payload: data
    }
}

export const handlePayment = (data) => {
    return {
        type: 'customer-pay',
        payload: data
    }
}