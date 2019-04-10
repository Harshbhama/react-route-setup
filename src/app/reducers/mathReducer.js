const mathReducer = (state = {
    result: 1,
    lastvalues: []
}, action) => {
    switch (action.type) {
      case "ADD":
          state = {
            ...state,
            result: state.result + action.payload,
            lastvalues: [...state.lastvalues, action.payload]
          }

        break;

      case "SUBSTRACT":
        state = {
          ...state,
          result: state.result - action.payload,
          lastvalues: [...state.lastvalues, action.payload]
        }
        break;

    }

    return state;
}

export default mathReducer