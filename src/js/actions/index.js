import constants from "../constants"

function addNotification(payload){
  return {
    "type" : constants.actions.addNotification,
    payload
  }
}

function removeNotification(){
  return {
    "type" : constants.actions.removeNotification
  }
}

export { addNotification, removeNotification}
