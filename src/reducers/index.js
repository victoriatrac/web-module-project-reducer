import {
    ADD_ONE,
    APPLY_NUMBER,
    CHANGE_OPERATION,
    CLEAR_DISPLAY,
    MEMORY_SET,
    MEMORY_APPLY,
    MEMORY_CLEAR
} from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

export const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2
        case("*"):
            return num1 * num2
        case("-"):
            return num1 - num2
    }
}

export const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            })

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            })
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            })

        case(CLEAR_DISPLAY):
            return ({
                ...state,
                total: state.total = 0
            })

        case(MEMORY_SET):
            return({
                ...state,
                memory: state.memory = action.payload
            })

        case(MEMORY_APPLY):
            return({
                ...state,
                total: state.memory + state.total
            })

        case(MEMORY_CLEAR):
            return({
                ...state,
                memory: state.memory = 0
            })
            
        default:
            return state
    }
}

export default reducer