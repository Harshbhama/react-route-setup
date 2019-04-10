export function addNumber(number) {
    return {
        type: "ADD",
        payload: number
    }
}

export function substractNumner(number) {
    return {
        type: "SUBSTRACT",
        payload: number
    }
}