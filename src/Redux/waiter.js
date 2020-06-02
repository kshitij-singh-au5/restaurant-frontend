let stateWaiter = {
    waiters: [],
    selectedWaiter: 1

}

export function waiterReducer(state = stateWaiter, action) {
    let stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "get-waiters":
            stateCopy.waiters = action.payload
            return stateCopy
        case 'set-waiter':
            stateCopy.selectedWaiter = action.payload
            return stateCopy
        default:
            return stateCopy
    }

}