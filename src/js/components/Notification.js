import React from "react"

import {connect} from "react-redux"

import {removeNotification, addNotification} from "../actions"

const mapStateToProps = (state) => {
  return {notifications : state.notifications}
}

class Notification extends React.Component{

  constructor(){
    super()

    this.shouldRemoveNotification = false;

    this.state = {
      isDisplayed : false
    }
    this._notificationWrapper = React.createRef()

    this._removeCurrentNotification = this._removeCurrentNotification.bind(this)
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this)
  }

  addNotification(notification){
    this.props.dispatch(addNotification(notification))
  }

  handleCloseButtonClick(){
    this.closeNotification()
  }

  _removeCurrentNotification(){
      debugger
      if(this.props.notifications.length){
        this.props.dispatch(removeNotification())
      }
  }
  openNotification(){
    debugger
    this.setState({ isDisplayed: true })
    if(this.props.notifications[0].time){
      setTimeout(()=>{
        this.closeNotification()
      }, this.props.notifications[0].time)
    }
  }
  closeNotification(){
    debugger
    this.setState({ isDisplayed: false })
    setTimeout(()=>{
    	this._removeCurrentNotification()
    }, 500)
  }
  componentDidMount(){
    debugger;
    if(this.props.notifications.length){
      this.openNotification()
    }
  }
  componentWillUpdate(nextProps, nextState){

  }
  componentWillReceiveProps(nextProps){
    debugger
    if(this.props.notifications[0] !== nextProps.notifications[0]) {
    	this.openNotification()
    }
  }
  componentDidUpdate(prevProps, prevState){

  }

  render(){

    debugger;
    var notificationWrapperclassName = "notificationWrapper"
    notificationWrapperclassName += this.state.isDisplayed ? " displayed" : ""

    //Close button should be invisible if there is a non zero time specified
    var closeButtonClassName = "closeButton"
    closeButtonClassName += this.props.notifications.length && this.props.notifications[0].time ? " invisible" : ""

    return(
      <div className={notificationWrapperclassName} ref={this._notificationWrapper}>
        <div className="notification">
            <div className={closeButtonClassName}
              onClick={this.handleCloseButtonClick}>
              x
            </div>
            <div>
              {this.props.notifications.length !== 0 && this.props.notifications[0].text}
            </div>
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps)(Notification)


/*
class Notification {
	constructor () {
  	this.state = {
    	open: false
    }
  }
  componentDidMount () {
  	if (this.props.notifArray.length) {
    	this.openNotification()
    }
  }
  componentWillReceiveProps (nextProps) {
	  if (this.props.notifArray[0] !== nextProps.notifArray[0]) {
    	this.openNotification()
    }
  }
  openNotfication () {
  	this.setState({ open: true })
    var currentNotif = this.props.notifArray[0]
    setTimeout(function(){
    	this.closeNotification()
    }, currentNotif.duration)
  }
  closeNotication () {
  	this.setState({ open: false })
    setTimeout(function() {
    	removeNotification()
    }, 500)
  }
	render () {

  }
}

*/
