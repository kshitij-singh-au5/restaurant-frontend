let stateTable = {
    tables: [],
    selectedTable: 1
}

export function tableReducer(state= stateTable,action){
    let stateCopy = {...state}
    switch (action.type){
        case "get-tables":
            stateCopy.tables = action.payload
            return stateCopy
        case "select-tables":
            stateCopy.selectedTable = action.payload
            return stateCopy

        default:
            return stateCopy
    }

}