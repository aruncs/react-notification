import React from "react"

import {connect} from "react-redux"

import Notification from "./js/components/Notification"
import Form from "./js/components/Form"

import {addNotification} from "./js/actions"

class App extends React.Component {

  constructor(){
    super()

    this.handleNotificationFormSubmit = this.handleNotificationFormSubmit.bind(this)
  }

  handleNotificationFormSubmit(formData){
    this.props.dispatch(addNotification(formData))
  }

  render() {
    return(
      <div>
        <Form submitCallback={this.handleNotificationFormSubmit}/>
        <Notification/>
      </div>
    )
  }
}

export default connect(null)(App)
