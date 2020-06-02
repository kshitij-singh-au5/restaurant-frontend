import { combineReducers } from 'redux'
import { tableReducer } from './table'
import { orderReducer } from './order'
import { waiterReducer } from './waiter'

const rootReducers = combineReducers({
    table: tableReducer,
    waiter: waiterReducer,
    order: orderReducer
})

export default rootReducers;