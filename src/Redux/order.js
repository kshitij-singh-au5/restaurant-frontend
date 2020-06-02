let stateOrder = {
    menu: [],
    cart: [],
    cartTotal: "",
    customerName :"",
    customerNumber: "",
    payMethod : ""

}

export function orderReducer(state = stateOrder, action) {
    let stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "get-menu":
            stateCopy.menu = action.payload
            return stateCopy
        case "add-to-cart":
            let item = action.payload.item
            let quantity = action.payload.quantity
            stateCopy.cartTotal += (item.itemPrice * Number(quantity))
            stateCopy.cart = stateCopy.cart.map(e => {
                if (e.item.id === item.id) {
                    e.quantity = Number(e.quantity) + Number(quantity)
                    e.item.itemPrice += (item.itemPrice * quantity)
                    item = false
                }
                return e
            })
            if (item) {
                item.itemPrice = item.itemPrice * quantity
                stateCopy.cart.push({ quantity, item })
            }

            return stateCopy
        case 'delete-from-cart':
            stateCopy.cartTotal -= stateCopy.cart[action.payload].item.itemPrice
            stateCopy.cart.splice(action.payload, 1)
            return stateCopy
        case 'set-bill':
            stateCopy.menu = []
            stateCopy.cart = []
            stateCopy.cartTotal = 0
            return stateCopy
        case 'customer-name':
            stateCopy.customerName = action.payload
            return stateCopy
        case 'customer-number':
            stateCopy.customerNumber = action.payload
            return stateCopy
        case 'customer-pay':
            stateCopy.payMethod = action.payload
            return stateCopy
        default:
            return stateCopy
    }

}