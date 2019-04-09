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


import { createStore } from "redux"

const initialState = {
      result: 1,
      lastvalues: []
}

const reducer = (state = initialState, action) => {
      switch (action.type) {
        case "ADD":
            state = {
              ...state,
              result: state.result + action.payload,
              lastvalues: [...state.lastvalues, action.payload]
            }

          break;

        case "SUBSTRACT":
          state = state - action.payload
          break;

      }

      return state;
}


const store = createStore(reducer)

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
