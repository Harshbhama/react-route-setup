import React from "react"
import ReactDOM from "react-dom"

import { Root } from "./components/Root"
import { Home } from "./components/Home"

class App extends React.Component{
  render(){
    return(
          <Root>
            <Home></Home>
          </Root>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
