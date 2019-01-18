import React from "react"

import Notification from "./js/components/Notification"

class App extends React.Component {

  constructor(){
    super()
  }

  render() {
    return(
      <div>
        <Notification />
      </div>
    )
  }
}

export default App
