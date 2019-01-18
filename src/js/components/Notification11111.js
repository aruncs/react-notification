import React from "react"

import {connect} from "react-redux"

//import notifications from "../../data/notifications"

var styles = {
  notificationWrapper : {position: "absolute",height: 100,width: "100%",bottom: 100,textAlign:"center"},
  notification : {
    textAlign : "center",
    backgroundColor: "#350534",
    width : "fit-content",
    height: "100%",
    minWidth: 250,
    maxWidth: 500,
    display:"inline-block",
    borderRadius: 10,
    opacity:.7,
    color: "beige"
  },
  visibleCloseButton : {textAlign : "center",opacity :1,cursor:"pointer"},
  invisibleCloseButton : {textAlign : "center",opacity :0}
}

const mapStateToProps = (state) => {
  return {notifications : state.notifications}
}

class Notification extends React.Component{


  constructor(){
    super()
    this.state = {
      notifications : notifications
    }

    this._removeCurrentNotification = this._removeCurrentNotification.bind(this)
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this)
  }

  addNotification(notification){
    this.setState((prevState)=>{
      return { notifications : prevState.notifications.slice().push(notification)}
    })
  }

  handleCloseButtonClick(){
    this._removeCurrentNotification()
  }

  _removeCurrentNotification(){

    if(this.state.notifications.length){
      this.setState((prevState)=>{
        return { notification : prevState.notifications.shift()}
      })
    }

  }

  render(){

    if(this.state.notifications.length){
      if(this.state.notifications[0].time){
        setTimeout(()=>{

          this._removeCurrentNotification()

        },this.state.notifications[0].time)
      }
    }
    return(
      <div style={styles.notificationWrapper}>
        <div style={styles.notification}>
            <div>
              {this.state.notifications.length !== 0 && this.state.notifications[0].text}
            </div>
            <div style={this.state.notifications.length && !this.state.notifications[0].time ? styles.visibleCloseButton : styles.invisibleCloseButton}
              onClick={this.handleCloseButtonClick}>
              Close
            </div>
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps)(Notification)
