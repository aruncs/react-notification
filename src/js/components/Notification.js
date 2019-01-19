import React from "react"

import {connect} from "react-redux"

import {removeNotification, addNotification} from "../actions"

const mapStateToProps = (state) => {
  return {notifications : state && state.notifications}
}

class Notification extends React.Component{

  constructor(){
    super()

    this.state = {
      open : false
    }
    //TODO: Remove this..only for testing
    window.notification = this;
    this._notificationWrapper = React.createRef()

    this._removeCurrentNotification = this._removeCurrentNotification.bind(this)
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this)
    this.addNotification = this.addNotification.bind(this)
  }

  addNotification(notification){
    this.props.dispatch(addNotification(notification))
  }

  handleCloseButtonClick(){
    this.closeNotification()
  }

  _removeCurrentNotification(){
      if(this.props.notifications && this.props.notifications.length){
        this.props.dispatch(removeNotification())
      }
  }
  openNotification(){
    this.setState({ open: true })
    if(this.props.notifications && this.props.notifications.length && this.props.notifications[0].duration){
      setTimeout(()=>{
        this.closeNotification()
      }, this.props.notifications[0].duration)
    }
  }
  closeNotification(){
    this.setState({ open: false })
    setTimeout(()=>{
    	this._removeCurrentNotification()
    }, 1000)
  }
  componentDidMount(){
    if(this.props.notifications && this.props.notifications.length){
      this.openNotification()
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(this.props.notifications && this.props.notifications.length && this.props.notifications[0] !== prevProps.notifications[0]) {
    	this.openNotification()
    }
  }

  render(){

    var notificationWrapperclassName = "notificationWrapper"
    notificationWrapperclassName += this.state.open ? " displayed" : ""

    //Close button should be invisible if there is a non zero time duration specified
    var closeButtonClassName = "closeButton"
    closeButtonClassName += this.props.notifications && this.props.notifications.length && this.props.notifications[0].duration ? " invisible" : ""

    return(
      <div className={notificationWrapperclassName} ref={this._notificationWrapper}>
        <div className="notification">
            <div className={closeButtonClassName}
              onClick={this.handleCloseButtonClick}>
              x
            </div>
            <div>
              {this.props.notifications && this.props.notifications.length !== 0 && this.props.notifications[0].text}
            </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Notification)
