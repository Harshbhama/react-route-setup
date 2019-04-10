const userReducer = (state = {
    name: "Harsh",
    age: 23
}, action) => {
    switch (action.type) {
      case "SET_NAME":
          state = {
            ...state,
            name: action.payload
          }

        break;

      case "SET_AGE":
        state = {
          ...state,
          name: action.payload
        }
        break;

    }

    return state;
}
export default userReducer
