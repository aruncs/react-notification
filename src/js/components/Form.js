import React from "react"

class Form extends React.Component{

  constructor(){
    super()

    this.state = {
      "text" : "",
      "duration" : 0
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){

    this.setState({
      [event.target.dataset.fieldname] : event.target.dataset.fieldname === "duration" ? parseInt(event.target.value) : event.target.value
    })
  }

  handleFormSubmit(event){

    event.preventDefault()
    var formData = Object.assign({},this.state)

    this.props.submitCallback(formData)
  }
  
  render(){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} className="notificationForm">
          <div className="formItemWrapper">
            <label className="formTitle">Notification Details</label>
          </div>

          <div className="formItemWrapper">
            <label className="formLabel">Text</label>
            <input type="text" value={this.state.notificationText} onChange={this.handleChange} data-fieldname="text" className="formInputField"/>
          </div>

          <div className="formItemWrapper">
            <label>Duration</label>
            <input type="text" value={this.state.notificationDuration} onChange={this.handleChange} data-fieldname="duration" className="formInputField"/>
          </div>

          <div className="formItemWrapper">
            <input type="submit" value="Add Notification" className="submitButton"/>
          </div>


        </form>
      </div>
    )
  }
}

export default Form
