import React from "react"
import ReactDOM from "react-dom"

import App from "./components/App"

import { createStore, combineReducers, applyMiddleware } from "redux"

import { createLogger } from "redux-logger"
import { Provider } from "react-redux"

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


const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(myLogger))

store.subscribe(() => {
  console.log("Store updated!!", store.getState())
})

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>, document.getElementById("root"))
