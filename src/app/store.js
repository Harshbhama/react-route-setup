import { createStore, combineReducers, applyMiddleware } from "redux"
import mathReducer from "./reducers/mathReducer"
import userReducer from "./reducers/userReducer"


const myLogger = (store) => (next) => (action) => {
    console.log("Logged in", action)
    next(action)
  }

export default createStore(
    combineReducers({
        mathReducer, 
        userReducer}),
     {}, 
     applyMiddleware(myLogger))

     
      
