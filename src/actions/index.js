export const ADD_ONE = "ADD_ONE"

export const APPLY_NUMBER = "APPLY_NUMBER"
export const CHANGE_OPERATION = "CHANGE_OPERATION"
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const MEMORY_SET = "MEMORY_SET"
export const MEMORY_APPLY = "MEMORY_APPLY"
export const MEMORY_CLEAR = "MEMORY_CLEAR"

// const addOne = () => {
//     return({type:ADD_ONE})
// }

export const applyNumber = (number) => {
    return({
        type: APPLY_NUMBER,
        payload: number
    })
}

export const changeOperation = (operator) => {
    return({
        type: CHANGE_OPERATION,
        payload: operator
    })
}

export const clearDisplay = () => {
    return({
        type: CLEAR_DISPLAY
    })
}

export const memorySet = (number) => {
    return({
        type: MEMORY_SET,
        payload: number
    })
}

export const memoryApply = () => {
    return({
        type: MEMORY_APPLY
    })
}

export const memoryClear = () => {
    return({
        type: MEMORY_CLEAR
    })
}

export default applyNumber