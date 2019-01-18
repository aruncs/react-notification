import React from "react"

class NotificationItem extends React.Component{

  constructor(){
    super()
  }

  render(){

    return (
      <div className="height: 100px;width: 500px;display: block;background-color: #CCCCCC;">
        <div className="close-btn"></div>
        <div>{this.props.text}</div>
      </div>

    )
  }
}

export default NotificationItem
