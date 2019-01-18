function addNotification(payload){
  return {
    "type" : "ADD_NOTIFICATION",
    payload
  }
}

function removeNotification(){
  return {
    "type" : "REMOVE_NOTIFICATION"
  }
}

export { addNotification, removeNotification}
