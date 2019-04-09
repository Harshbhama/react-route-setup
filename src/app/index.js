// import React from "react"
// import ReactDOM from "react-dom"
// import {BrowserRouter, Route} from "react-router-dom"
//
// import { Root } from "./components/Root"
// import { Home } from "./components/Home"
// import { User } from "./components/User"
//
// class App extends React.Component{
//   render(){
//     return(
//         <BrowserRouter>
//           <Route path = "/user" component = {User} />
//           <Route path = "/home" component = {Home} />
//         </BrowserRouter>
//
//     )
//   }
// }
//
// ReactDOM.render(<App />, document.getElementById("root"))


import { createStore, combineReducers, applyMiddleware } from "redux"

import { createLogger } from "redux-logger"

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





const myLogger = (store) => (next) => (action) => {
  console.log("Logged in", action)
  next(action)
}


const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(myLogger, logger))

store.subscribe(() => {
  console.log("Store updated!!", store.getState())
})

store.dispatch({
  type: "ADD",
  payload: 100
})

store.dispatch({
  type: "ADD",
  payload: 50
})

store.dispatch({
  type: "SUBSTRACT",
  payload: 10
})

store.dispatch({
  type: "SET_AGE",
  payload: 30
})
